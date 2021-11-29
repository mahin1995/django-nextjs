

import Head from 'next/head'
import Script from 'next/script'
import { Provider } from 'react-redux'
import { useStore } from '../store'

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  return(
<>
<Head>
  <title>HttpOnly Auth</title>
  <link 
    href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' 
    rel='stylesheet'
    />  
</Head>
<Script  src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js' strategy="beforeInteractive"  ></Script>
<Provider store={store}>
<Component {...pageProps} />
</Provider>
</>
  )
}

export default MyApp
