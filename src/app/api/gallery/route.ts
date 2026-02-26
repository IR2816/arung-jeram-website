import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET - Get all gallery images
export async function GET() {
  try {
    const gallery = await db.gallery.findMany({
      where: { active: true },
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(gallery)
  } catch (error) {
    console.error('Error fetching gallery:', error)
    return NextResponse.json({ error: 'Failed to fetch gallery' }, { status: 500 })
  }
}

// POST - Add gallery image (Admin)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, description, imageUrl, category } = body

    const image = await db.gallery.create({
      data: {
        title,
        description,
        imageUrl,
        category,
        active: true
      }
    })

    return NextResponse.json(image, { status: 201 })
  } catch (error) {
    console.error('Error creating gallery image:', error)
    return NextResponse.json({ error: 'Failed to create gallery image' }, { status: 500 })
  }
}
