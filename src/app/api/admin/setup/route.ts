import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import bcrypt from 'bcryptjs'
import { registerSchema } from '@/lib/validations'

// POST - Create initial admin user (only if no admin exists)
export async function POST(request: NextRequest) {
  try {
    // Check if any admin already exists
    const existingAdmin = await db.user.findFirst({
      where: { role: { in: ['admin', 'superadmin'] } }
    })

    if (existingAdmin) {
      return NextResponse.json(
        { error: 'Admin sudah ada. Gunakan fitur ini hanya untuk setup awal.' },
        { status: 400 }
      )
    }

    const body = await request.json()
    
    // Validate input
    const validationResult = registerSchema.safeParse(body)
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Validasi gagal', 
          details: validationResult.error.flatten().fieldErrors 
        },
        { status: 400 }
      )
    }

    const { name, email, password } = validationResult.data

    // Check if email already exists
    const existingUser = await db.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email sudah terdaftar' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create superadmin user
    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: 'superadmin'
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Admin berhasil dibuat',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    }, { status: 201 })
  } catch (error) {
    console.error('Error creating admin:', error)
    return NextResponse.json({ error: 'Failed to create admin' }, { status: 500 })
  }
}
