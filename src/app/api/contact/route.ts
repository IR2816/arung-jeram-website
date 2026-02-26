import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { withAdminAuth, withRateLimit } from '@/lib/auth-utils'
import { contactSchema, sanitizeObject } from '@/lib/validations'

// GET - Get all contact messages (Admin only)
export const GET = withAdminAuth(async () => {
  try {
    const messages = await db.contactMessage.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(messages)
  } catch (error) {
    console.error('Error fetching messages:', error)
    return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 })
  }
})

// POST - Submit contact message (Public with rate limiting)
export const POST = withRateLimit(async (request: NextRequest) => {
  try {
    const body = await request.json()
    
    // Validate input
    const validationResult = contactSchema.safeParse(sanitizeObject(body))
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Validasi gagal', 
          details: validationResult.error.flatten().fieldErrors 
        },
        { status: 400 }
      )
    }
    
    const data = validationResult.data

    const contactMessage = await db.contactMessage.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        subject: data.subject || null,
        message: data.message,
        isRead: false
      }
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Pesan berhasil dikirim',
      data: contactMessage 
    }, { status: 201 })
  } catch (error) {
    console.error('Error creating message:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
})
