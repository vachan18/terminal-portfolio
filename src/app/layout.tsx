import type { Metadata } from 'next'
import './globals.css'
import SchemaInjector from '@/components/SchemaInjector'
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Terminal Portfolio - Vacha Shah',
  description: 'Full Stack Developer Portfolio - React, Next.js, Tailwind, Node.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black antialiased">
        {children}
      </body>
    </html>
  )
}
