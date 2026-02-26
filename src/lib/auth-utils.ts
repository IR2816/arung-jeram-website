import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { NextRequest, NextResponse } from 'next/server'

// Get current session (for server components)
export async function getCurrentUser() {
  const session = await getServerSession(authOptions)
  return session?.user
}

// Check if user is authenticated
export async function isAuthenticated() {
  const user = await getCurrentUser()
  return !!user
}

// Check if user is admin
export async function isAdmin() {
  const user = await getCurrentUser()
  return user?.role === 'admin' || user?.role === 'superadmin'
}

// Type for API route handlers
type ApiHandler = (req: NextRequest, context: any, session?: any) => Promise<NextResponse>

// Middleware helper for API routes
export function withAuth(handler: ApiHandler): ApiHandler {
  return async (req: NextRequest, context: any) => {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized - Silakan login terlebih dahulu' },
        { status: 401 }
      )
    }
    
    return handler(req, context, session)
  }
}

// Middleware helper for admin routes
export function withAdminAuth(handler: ApiHandler): ApiHandler {
  return async (req: NextRequest, context: any) => {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized - Silakan login terlebih dahulu' },
        { status: 401 }
      )
    }
    
    if (session.user.role !== 'admin' && session.user.role !== 'superadmin') {
      return NextResponse.json(
        { error: 'Forbidden - Akses ditolak' },
        { status: 403 }
      )
    }
    
    return handler(req, context, session)
  }
}

// Rate limiting
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX = 10 // max 10 requests per minute
const inMemoryRateLimit = new Map<string, { count: number; windowStart: number }>()

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0]?.trim() || 'unknown'
  }
  return req.headers.get('x-real-ip') || 'unknown'
}

export async function checkRateLimit(ip: string, endpoint: string): Promise<{ allowed: boolean; remaining: number }> {
  const key = `${ip}:${endpoint}`
  const now = Date.now()
  const current = inMemoryRateLimit.get(key)

  if (!current || now - current.windowStart > RATE_LIMIT_WINDOW) {
    inMemoryRateLimit.set(key, { count: 1, windowStart: now })
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 }
  }

  if (current.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0 }
  }

  current.count += 1
  inMemoryRateLimit.set(key, current)

  return { allowed: true, remaining: RATE_LIMIT_MAX - current.count }
}

// Rate limit middleware
export function withRateLimit(handler: ApiHandler): ApiHandler {
  return async (req: NextRequest, context: any) => {
    const ip = getClientIp(req)
    const endpoint = req.nextUrl.pathname
    
    const { allowed, remaining } = await checkRateLimit(ip, endpoint)
    
    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many requests - Coba lagi dalam 1 menit' },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Remaining': remaining.toString(),
            'X-RateLimit-Reset': (60).toString()
          }
        }
      )
    }
    
    const response = await handler(req, context)
    
    // Add rate limit headers to response
    if (response instanceof NextResponse) {
      response.headers.set('X-RateLimit-Remaining', remaining.toString())
    }
    
    return response
  }
}
