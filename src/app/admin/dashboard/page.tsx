import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { AdminDashboard } from './client'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    redirect('/admin/login')
  }

  // Get stats
  const [bookingCount, pendingBookings, messageCount, unreadMessages] = await Promise.all([
    db.booking.count(),
    db.booking.count({ where: { status: 'pending' } }),
    db.contactMessage.count(),
    db.contactMessage.count({ where: { isRead: false } }),
  ])

  // Get recent bookings
  const recentBookings = await db.booking.findMany({
    include: { package: true },
    orderBy: { createdAt: 'desc' },
    take: 5,
  })

  // Get recent messages
  const recentMessages = await db.contactMessage.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5,
  })

  return (
    <AdminDashboard 
      user={session.user}
      stats={{
        bookingCount,
        pendingBookings,
        messageCount,
        unreadMessages,
      }}
      recentBookings={recentBookings}
      recentMessages={recentMessages}
    />
  )
}
