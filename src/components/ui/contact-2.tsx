"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { getWhatsAppUrl } from "@/lib/whatsapp"

interface Contact2Props {
  embedded?: boolean
  className?: string
  title?: string
  description?: string
  address?: string
  phone?: string
  email?: string
  web?: { label: string; url: string }
  whatsappGreeting?: string
}

export const Contact2 = ({
  embedded = false,
  className,
  title = "Hubungi Kami",
  description = "Kami siap menjawab pertanyaan, request informasi, atau kebutuhan kolaborasi. Tulis pesanmu dan kami akan respon via WhatsApp.",
  address = "Desa Putat Nutug, Ciseeng, Bogor",
  phone = "+62 812-3456-7890",
  email = "sembaradventure@gmail.com",
  web = { label: "Instagram @sembaradventure", url: "https://instagram.com/sembaradventure" },
  whatsappGreeting = "Halo Sembar Adventure, saya ingin bertanya:",
}: Contact2Props) => {
  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")
  const [emailInput, setEmailInput] = React.useState("")
  const [subject, setSubject] = React.useState("")
  const [message, setMessage] = React.useState("")

  const wrapperClassName = cn(embedded ? "" : "py-32", className)
  const Wrapper: React.ElementType = embedded ? "div" : "section"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const name = `${firstName} ${lastName}`.trim()
    const lines = [
      whatsappGreeting,
      "",
      name ? `Nama: ${name}` : null,
      emailInput ? `Email: ${emailInput}` : null,
      subject ? `Subjek: ${subject}` : null,
      message ? `Pesan: ${message}` : null,
    ].filter(Boolean) as string[]

    const url = getWhatsAppUrl(lines.join("\n"))
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <Wrapper className={wrapperClassName}>
      <div className="container">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                {title}
              </h1>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">Detail Kontak</h3>
              <ul className="ml-4 list-disc">
                <li>
                  <span className="font-bold">Alamat: </span>
                  {address}
                </li>
                <li>
                  <span className="font-bold">WhatsApp: </span>
                  {phone}
                </li>
                <li>
                  <span className="font-bold">Email: </span>
                  <a href={`mailto:${email}`} className="underline">
                    {email}
                  </a>
                </li>
                <li>
                  <span className="font-bold">Web: </span>
                  <a
                    href={web.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    {web.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10"
          >
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="contact-firstname">Nama Depan</Label>
                <Input
                  type="text"
                  id="contact-firstname"
                  placeholder="Nama depan"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="contact-lastname">Nama Belakang</Label>
                <Input
                  type="text"
                  id="contact-lastname"
                  placeholder="Nama belakang"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="contact-email">Email</Label>
              <Input
                type="email"
                id="contact-email"
                placeholder="email@example.com"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="contact-subject">Subjek</Label>
              <Input
                type="text"
                id="contact-subject"
                placeholder="Contoh: tanya paket rafting"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="contact-message">Pesan</Label>
              <Textarea
                placeholder="Tulis pesan kamu di sini..."
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Kirim via WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
