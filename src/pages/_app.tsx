import type { AppProps } from 'next/app'
import { Header } from '../components/header';
import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return( 
    <>
      <Header/>
      <Component {...pageProps} />
    </>  
    )
}

export default MyApp
