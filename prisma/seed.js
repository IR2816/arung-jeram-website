// Plain JS seed script to avoid bun/ts runtime
const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  const packages = [
    {
      name: 'Mini Rafting',
      slug: 'mini-rafting',
      description:
        'Pengenalan arung jeram untuk pemula dan anak-anak. Sensasi rafting dalam durasi singkat yang cocok untuk yang baru pertama kali mencoba.',
      price: 600000,
      duration: '15 menit',
      distance: '1 KM',
      minAge: 6,
      capacity: '6 orang/perahu',
      difficulty: 'Beginner',
      highlights: JSON.stringify([
        'Cocok anak usia 6+ tahun',
        'Aman untuk pemula',
        'Instruktur berpengalaman',
      ]),
      featured: false,
      active: true,
    },
    {
      name: 'Family Trip',
      slug: 'family-trip',
      description:
        'Petualangan arung jeram yang sempurna untuk keluarga. Nikmati kebersamaan dengan pemandangan alam yang indah di Sungai Cisadane.',
      price: 650000,
      duration: '1 jam 20 menit',
      distance: '5 KM',
      minAge: 7,
      capacity: '6 orang/perahu',
      difficulty: 'Beginner',
      highlights: JSON.stringify([
        'Ideal untuk keluarga',
        'Pemandangan alam indah',
        'Foto dokumentasi gratis',
      ]),
      featured: true,
      active: true,
    },
    {
      name: 'Panorama Trip',
      slug: 'panorama-trip',
      description:
        'Nikmati keindahan Grand Canyon Cisadane dan Curug yang memukau. Pengalaman rafting dengan view terbaik!',
      price: 700000,
      duration: '80 menit',
      distance: '7 KM',
      minAge: 10,
      capacity: '6 orang/perahu',
      difficulty: 'Intermediate',
      highlights: JSON.stringify([
        'View Grand Canyon',
        'Kunjungan Curug',
        'Spot foto instagramable',
      ]),
      featured: true,
      active: true,
    },
    {
      name: 'Adventure Trip',
      slug: 'adventure-trip',
      description:
        'Tantangan penuh adrenalin dengan jeram yang menegangkan. Lintasan terpanjang untuk pencari sensasi sejati!',
      price: 850000,
      duration: '2,5 jam',
      distance: '12 KM',
      minAge: 12,
      capacity: '6 orang/perahu',
      difficulty: 'Advanced',
      highlights: JSON.stringify([
        'Jeram menantang',
        'Lintasan terpanjang',
        'Untuk pencari adrenalin',
      ]),
      featured: false,
      active: true,
    },
  ]

  for (const pkg of packages) {
    await prisma.package.upsert({
      where: { slug: pkg.slug },
      update: pkg,
      create: pkg,
    })
  }
  console.log('✅ Packages seeded')

  const hashedPassword = await bcrypt.hash('Admin123!', 12)

  const admin = await prisma.user.upsert({
    where: { email: 'admin@sembahadventure.com' },
    update: {},
    create: {
      name: 'Admin Sembah',
      email: 'admin@sembahadventure.com',
      password: hashedPassword,
      role: 'superadmin',
    },
  })
  console.log(`✅ Admin user: ${admin.email}`)

  const settings = [
    { key: 'site_name', value: 'Sembah Adventure' },
    { key: 'site_email', value: 'sembaradventure@gmail.com' },
    { key: 'site_phone', value: '+62 812-3456-7890' },
    { key: 'site_whatsapp', value: '6281234567890' },
    {
      key: 'site_address',
      value:
        'Jl. Lembah Cisadane Jl. H. Miing No.1a, RT.4/RW.2, Putat Nutug, Kec. Ciseeng, Kabupaten Bogor, Jawa Barat 16120',
    },
    { key: 'site_hours', value: 'Senin-Kamis, Sabtu-Minggu: 10:00-16:30 (Jumat Tutup)' },
  ]

  for (const setting of settings) {
    await prisma.siteSetting.upsert({
      where: { key: setting.key },
      update: setting,
      create: setting,
    })
  }
  console.log('✅ Site settings seeded')

  console.log('\n📄 Admin Login:')
  console.log('   Email: admin@sembahadventure.com')
  console.log('   Password: Admin123!')
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
