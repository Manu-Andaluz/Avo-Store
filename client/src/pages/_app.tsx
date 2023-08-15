import { Providers } from '@/redux/provider'
import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import './pages.css'
type AppOwnProps = { example: string }
 
export default function MyApp({
  Component,
  pageProps,
  example,
}: AppProps & AppOwnProps) {
  return (
      <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}
 
MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context)
 
  return { ...ctx, example: 'data' }
}