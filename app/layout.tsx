import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Radhe Events',
  description: 'Created by Sanjeet',
  generator: 'Sanjeet',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
