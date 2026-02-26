import type { NextConfig } from "next";

const cspDirectives = [
  "default-src 'self'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "form-action 'self'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  "connect-src 'self' https:",
  "frame-src 'self' https://www.google.com https://maps.google.com",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Content-Security-Policy", value: cspDirectives },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
];

const defaultDistDir = process.env.NODE_ENV === "development" ? ".next-build-dev" : ".next-build-prod";

const nextConfig: NextConfig = {
  // Allow overriding output dir to avoid Windows lock/unlink issues during repeated builds.
  // Use a separate dist dir in development so `next dev` does not lock production build artifacts.
  distDir: process.env.NEXT_DIST_DIR || defaultDistDir,
  // Standalone build can fail on some Windows setups due to copyfile locks.
  // Enable it explicitly in CI/deploy with NEXT_STANDALONE=true.
  ...(process.env.NEXT_STANDALONE === "true" ? { output: "standalone" as const } : {}),
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: process.env.NODE_ENV === 'development',
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },

  // React strict mode for better development
  reactStrictMode: true,
  
  // Experimental features
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
    webpackBuildWorker: false,
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
