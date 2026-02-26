import { z } from 'zod'

// Booking validation schema
export const bookingSchema = z.object({
  customerName: z
    .string()
    .min(2, 'Nama minimal 2 karakter')
    .max(100, 'Nama maksimal 100 karakter')
    .regex(/^[a-zA-Z\s]+$/, 'Nama hanya boleh berisi huruf'),
  customerPhone: z
    .string()
    .min(10, 'Nomor telepon minimal 10 digit')
    .max(15, 'Nomor telepon maksimal 15 digit')
    .regex(/^[0-9+\-\s]+$/, 'Format nomor telepon tidak valid'),
  customerEmail: z
    .string()
    .email('Format email tidak valid')
    .optional()
    .or(z.literal('')),
  packageId: z.string().optional(),
  packageName: z.string().optional(),
  bookingDate: z.string().refine((val) => {
    const date = new Date(val)
    return !isNaN(date.getTime()) && date > new Date()
  }, 'Tanggal harus valid dan tidak boleh hari ini atau sebelumnya'),
  numberOfPeople: z
    .number()
    .min(1, 'Minimal 1 peserta')
    .max(50, 'Maksimal 50 peserta'),
  notes: z.string().max(500, 'Catatan maksimal 500 karakter').optional(),
  addOns: z.array(z.string()).optional(),
})

export type BookingInput = z.infer<typeof bookingSchema>

// Contact message validation schema
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Nama minimal 2 karakter')
    .max(100, 'Nama maksimal 100 karakter'),
  email: z
    .string()
    .email('Format email tidak valid'),
  phone: z
    .string()
    .min(10, 'Nomor telepon minimal 10 digit')
    .max(15, 'Nomor telepon maksimal 15 digit')
    .optional()
    .or(z.literal('')),
  subject: z.string().max(100, 'Subjek maksimal 100 karakter').optional(),
  message: z
    .string()
    .min(10, 'Pesan minimal 10 karakter')
    .max(1000, 'Pesan maksimal 1000 karakter'),
})

export type ContactInput = z.infer<typeof contactSchema>

// Admin login validation
export const loginSchema = z.object({
  email: z.string().email('Format email tidak valid'),
  password: z
    .string()
    .min(6, 'Password minimal 6 karakter')
    .max(100, 'Password maksimal 100 karakter'),
})

export type LoginInput = z.infer<typeof loginSchema>

// Admin registration validation (for creating new admins)
export const registerSchema = z.object({
  name: z
    .string()
    .min(2, 'Nama minimal 2 karakter')
    .max(100, 'Nama maksimal 100 karakter'),
  email: z.string().email('Format email tidak valid'),
  password: z
    .string()
    .min(8, 'Password minimal 8 karakter')
    .max(100, 'Password maksimal 100 karakter')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password harus mengandung huruf besar, huruf kecil, dan angka'
    ),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Password tidak cocok',
  path: ['confirmPassword'],
})

export type RegisterInput = z.infer<typeof registerSchema>

// Package validation schema
export const packageSchema = z.object({
  name: z.string().min(3, 'Nama paket minimal 3 karakter').max(100),
  slug: z.string().min(3).max(100).regex(/^[a-z0-9-]+$/, 'Slug hanya boleh huruf kecil, angka, dan strip'),
  description: z.string().min(10, 'Deskripsi minimal 10 karakter'),
  price: z.number().min(0, 'Harga tidak boleh negatif'),
  duration: z.string().min(1, 'Durasi diperlukan'),
  distance: z.string().optional(),
  minAge: z.number().min(0).max(100).optional(),
  capacity: z.string().optional(),
  difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']),
  highlights: z.array(z.string()).optional(),
  featured: z.boolean().optional(),
  active: z.boolean().optional(),
})

export type PackageInput = z.infer<typeof packageSchema>

// Sanitize HTML input to prevent XSS
export function sanitizeInput(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

// Sanitize object recursively
export function sanitizeObject(obj: Record<string, unknown>): Record<string, unknown> {
  const sanitized: Record<string, unknown> = { ...obj }
  for (const key in sanitized) {
    if (typeof sanitized[key] === 'string') {
      sanitized[key] = sanitizeInput(sanitized[key] as string)
    } else if (typeof sanitized[key] === 'object' && sanitized[key] !== null) {
      sanitized[key] = sanitizeObject(sanitized[key] as Record<string, unknown>)
    }
  }
  return sanitized
}
