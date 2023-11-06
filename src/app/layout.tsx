import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Empleos',
  description: 'Nuestra aplicacion de empleos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-danger'>
        <body className={inter.className}>{children}</body>
    </html>
  )
}
