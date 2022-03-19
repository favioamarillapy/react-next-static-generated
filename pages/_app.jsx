import '../styles/globals.css'
import { darkTheme } from '../themes';


import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }) {

  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
