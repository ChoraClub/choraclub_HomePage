import { Inter, Poppins } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
 
export const poppins = Poppins({
    variable: '--font-poppins',
    weight: ['300','400', '500','700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})