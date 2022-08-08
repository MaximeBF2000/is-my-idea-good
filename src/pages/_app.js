import Head from 'next/head'
import { Navbar } from '../components/Navbar.component'
import '../global.css'

const NextApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💡</text></svg>"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <title>Is my ideas good ?</title>
      </Head>
      <div className="w-2/3 min-h-screen mx-auto">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default NextApp
