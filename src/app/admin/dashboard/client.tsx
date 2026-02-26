'use client'

import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Waves, 
  LogOut, 
  Users, 
  MessageSquare, 
  Calendar, 
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react'

interface User {
  id: string
  email: string
  name: string | null
  role: string
}

interface Booking {
  id: string
  customerName: string
  customerPhone: string
  customerEmail: string | null
  bookingDate: Date
  numberOfPeople: number
  status: string
  notes: string | null
  createdAt: Date
  package: {
    name: string
    price: number
  } | null
}

interface Message {
  id: string
  name: string
  email: string
  phone: string | null
  subject: string | null
  message: string
  isRead: boolean
  createdAt: Date
}

interface Props {
  user: User
  stats: {
    bookingCount: number
    pendingBookings: number
    messageCount: number
    unreadMessages: number
  }
  recentBookings: Booking[]
  recentMessages: Message[]
}

export function AdminDashboard({ user, stats, recentBookings, recentMessages }: Props) {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  }

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-700',
      confirmed: 'bg-blue-100 text-blue-700',
      completed: 'bg-green-100 text-green-700',
      cancelled: 'bg-red-100 text-red-700',
    }
    const icons = {
      pending: AlertCircle,
      confirmed: CheckCircle,
      completed: CheckCircle,
      cancelled: XCircle,
    }
    const Icon = icons[status as keyof typeof icons] || AlertCircle
    return (
      <Badge className={styles[status as keyof typeof styles] || 'bg-gray-100 text-gray-700'}>
        <Icon className="h-3 w-3 mr-1" />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-lg">
              <Waves className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-800">Sembah Adventure</h1>
              <p className="text-xs text-gray-500">Admin Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="font-medium text-gray-800">{user.name}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => signOut({ callbackUrl: '/admin/login' })}
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-100 p-3 rounded-xl">
                  <Calendar className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-800">{stats.bookingCount}</p>
                  <p className="text-sm text-gray-500">Total Booking</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-100 p-3 rounded-xl">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-800">{stats.pendingBookings}</p>
                  <p className="text-sm text-gray-500">Pending</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-800">{stats.messageCount}</p>
                  <p className="text-sm text-gray-500">Pesan</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-3 rounded-xl">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-800">{stats.unreadMessages}</p>
                  <p className="text-sm text-gray-500">Belum Dibaca</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Bookings */}
        <Card className="border-0 shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Booking Terbaru
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-left">
                    <th className="pb-3 font-medium text-gray-500">Nama</th>
                    <th className="pb-3 font-medium text-gray-500">Paket</th>
                    <th className="pb-3 font-medium text-gray-500">Tanggal</th>
                    <th className="pb-3 font-medium text-gray-500">Peserta</th>
                    <th className="pb-3 font-medium text-gray-500">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentBookings.map((booking) => (
                    <tr key={booking.id} className="border-b last:border-0">
                      <td className="py-3">
                        <div>
                          <p className="font-medium text-gray-800">{booking.customerName}</p>
                          <p className="text-xs text-gray-500">{booking.customerPhone}</p>
                        </div>
                      </td>
                      <td className="py-3">
                        <p className="text-gray-800">{booking.package?.name || '-'}</p>
                      </td>
                      <td className="py-3">
                        <p className="text-gray-800">{formatDate(booking.bookingDate)}</p>
                      </td>
                      <td className="py-3">
                        <p className="text-gray-800">{booking.numberOfPeople} orang</p>
                      </td>
                      <td className="py-3">
                        {getStatusBadge(booking.status)}
                      </td>
                    </tr>
                  ))}
                  {recentBookings.length === 0 && (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-gray-500">
                        Belum ada booking
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Recent Messages */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Pesan Terbaru
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMessages.map((msg) => (
                <div key={msg.id} className={`p-4 rounded-lg border ${msg.isRead ? 'bg-white' : 'bg-blue-50 border-blue-200'}`}>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-medium text-gray-800">{msg.name}</p>
                      <p className="text-xs text-gray-500">{msg.email}</p>
                    </div>
                    <span className="text-xs text-gray-400">{formatDate(msg.createdAt)}</span>
                  </div>
                  <p className="text-sm text-gray-600">{msg.message}</p>
                </div>
              ))}
              {recentMessages.length === 0 && (
                <p className="text-center text-gray-500 py-8">Belum ada pesan</p>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
