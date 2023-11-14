import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ventas',
  description: 'Nuestra aplicacion de Ventas',
}

export default function VentasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='bg-warning'>
        <div> Este es el Layout de fidelizados, a continuacion se
          dibuja el template / page correspondiente al path.
        </div>
        {children}
        <div>Layout abajo de template / page</div>
    </div>
  )
}
