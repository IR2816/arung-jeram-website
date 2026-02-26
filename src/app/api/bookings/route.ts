import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { withAuth, withAdminAuth, withRateLimit } from '@/lib/auth-utils'
import { bookingSchema, sanitizeObject } from '@/lib/validations'

// GET - Get all bookings (Admin only)
export const GET = withAdminAuth(async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const limit = parseInt(searchParams.get('limit') || '50')
    const page = parseInt(searchParams.get('page') || '1')
    const skip = (page - 1) * limit
    
    const where = status ? { status } : {}
    
    const [bookings, total] = await Promise.all([
      db.booking.findMany({
        include: { package: true },
        where,
        orderBy: { createdAt: 'desc' },
        take: limit,
        skip,
      }),
      db.booking.count({ where })
    ])
    
    return NextResponse.json({
      bookings,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching bookings:', error)
    return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 })
  }
})

// POST - Create new booking (Public with rate limiting)
export const POST = withRateLimit(async (request: NextRequest) => {
  try {
    const body = await request.json()
    
    // Validate input
    const validationResult = bookingSchema.safeParse(sanitizeObject(body))
    
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
    
    // Get package price if packageId is provided
    let totalPrice = 0
    if (data.packageId) {
      const pkg = await db.package.findUnique({ where: { id: data.packageId } })
      if (pkg) {
        totalPrice = pkg.price * data.numberOfPeople
      }
    }

    const booking = await db.booking.create({
      data: {
        packageId: data.packageId || null,
        customerName: data.customerName,
        customerEmail: data.customerEmail || null,
        customerPhone: data.customerPhone,
        bookingDate: new Date(data.bookingDate),
        numberOfPeople: data.numberOfPeople,
        totalPrice,
        notes: data.notes,
        addOns: data.addOns ? JSON.stringify(data.addOns) : null,
        status: 'pending',
        source: 'website'
      },
      include: { package: true }
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Booking berhasil dibuat',
      booking 
    }, { status: 201 })
  } catch (error) {
    console.error('Error creating booking:', error)
    return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 })
  }
})
