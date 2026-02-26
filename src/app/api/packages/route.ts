import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET - Get all packages
export async function GET() {
  try {
    const packages = await db.package.findMany({
      where: { active: true },
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(packages)
  } catch (error) {
    console.error('Error fetching packages:', error)
    return NextResponse.json({ error: 'Failed to fetch packages' }, { status: 500 })
  }
}

// POST - Create new package (Admin only)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, slug, description, price, duration, difficulty, location, included, imageUrl, gallery, featured } = body

    const newPackage = await db.package.create({
      data: {
        name,
        slug: slug || name.toLowerCase().replace(/\s+/g, '-'),
        description,
        price: parseFloat(price),
        duration,
        difficulty,
        location,
        included: included ? JSON.stringify(included) : '[]',
        imageUrl,
        gallery: gallery ? JSON.stringify(gallery) : null,
        featured: featured || false,
      }
    })

    return NextResponse.json(newPackage, { status: 201 })
  } catch (error) {
    console.error('Error creating package:', error)
    return NextResponse.json({ error: 'Failed to create package' }, { status: 500 })
  }
}
