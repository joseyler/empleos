"use client"
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer}  from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Encabezado } from './componentes/encabezado/Encabezado';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const path = usePathname();
  return (
    <html lang="en">
        <body className={inter.className}>
          <div>En Layout global el path es {path}</div>
          <Encabezado usuario={{ nombre : 'Jose', apellido: path }}/>
          {children}
          <ToastContainer 
            position="top-right"
            autoClose={5000}
            hideProgressBar={true}
            theme="colored"
            />
        </body>
    </html>
  )
}
