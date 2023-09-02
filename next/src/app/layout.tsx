'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/global.scss'
import Header from '@/components/header'
import Providers from "@/redux/providers"
const inter = Inter({ subsets: ['latin'] })






export const metadata: Metadata = {
  title: 'Next',
  description: 'Новое приложение на Next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
        <body className={inter.className}>
           <div className='container' >
           <Header/>
       
           <Providers>
                     {children}
           </Providers>
           
           </div>
           <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossOrigin="anonymous"></script>
          </body>
      </html>
  )
}
