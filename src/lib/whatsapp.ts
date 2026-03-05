const DEFAULT_WHATSAPP_NUMBER = '6281234567890' // Placeholder dummy number

export function getWhatsAppNumber(): string {
  return (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEFAULT_WHATSAPP_NUMBER).replace(/\D/g, '')
}

export function formatPhoneNumber(number: string): string {
  // Format 6281234567890 -> +62 812-3456-7890
  const cleaned = number.replace(/\D/g, '')
  if (cleaned.startsWith('62')) {
    const main = cleaned.slice(2)
    return `+62 ${main.slice(0, 3)}-${main.slice(3, 7)}-${main.slice(7)}`
  }
  return number
}

export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${getWhatsAppNumber()}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}
