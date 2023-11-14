"use client";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.css';
import { usePathname } from 'next/navigation';

export default function VentasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const path = usePathname();

  return (
    <div className='bg-info'>
      <div>En Layout el path es {path}</div>
        {children}
    </div>
  )
}
