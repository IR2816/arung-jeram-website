const DEFAULT_WHATSAPP_NUMBER = '6281234567890'

function getWhatsAppNumber(): string {
  return (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEFAULT_WHATSAPP_NUMBER).replace(/\D/g, '')
}

export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${getWhatsAppNumber()}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}
