import type { Metadata } from 'next'
import '@/styles/global.scss'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@/antDesign/AntRegistry';
import ReduxProvider from '@/redux/Provider';
import Header from '@/components/Header';
import { ConfigProvider } from 'antd';
import theme from '@/antDesign/ThemeConfig'
import { $apiCMS} from '@/axios/serverConfig';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Магазин на Next-js',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const getUser = async()=> {
    try {
      const {data} = await $apiCMS.get('/users/me?populate=*')
       return data 
    } catch(error) {
      console.error(error);
      return null
    }

  }

   const user = await getUser()



  

  return (
    <html lang="en">
      <body className={inter.className}>
       <ReduxProvider>
      <StyledComponentsRegistry>
        <ConfigProvider theme={theme}>
        <Header user={user} />
        {children}
        </ConfigProvider>
      </StyledComponentsRegistry>
       </ReduxProvider>
      </body>
    </html>
  )
}
