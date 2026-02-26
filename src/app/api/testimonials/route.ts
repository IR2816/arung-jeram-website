import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET - Get approved testimonials
export async function GET() {
  try {
    const testimonials = await db.testimonial.findMany({
      where: { approved: true },
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(testimonials)
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 })
  }
}

// POST - Create new testimonial
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { customerName, customerLocation, rating, comment, imageUrl } = body

    const testimonial = await db.testimonial.create({
      data: {
        customerName,
        customerLocation,
        rating: parseInt(rating),
        comment,
        imageUrl,
        approved: false // Needs admin approval
      }
    })

    return NextResponse.json(testimonial, { status: 201 })
  } catch (error) {
    console.error('Error creating testimonial:', error)
    return NextResponse.json({ error: 'Failed to create testimonial' }, { status: 500 })
  }
}
