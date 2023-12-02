// components
import Nav from '../components/Nav'
import Header from '../components/Header'
import { Sora } from '@next/font/google'
import Head from 'next/head';

// font settings
const sora = Sora({
  subsets: ['latin'],
  variable: ['--font-sora'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800',]
});


const Layout = ({ children }) => {
  return (<>
    <Head>
        <title>Rohan Das | Passionate Coder with Imagination</title>
        <meta property="og:title" content="Rohan Das | Passionate Coder with Imagination" key="title" />
        <meta name="description" content="Rohan Das is young and passionate Python coder, who has a good command in Python, HTML, CSS."/>
        <meta name="keywords" content="rohan, rohan das, Rohan Das, rohandas, corvus, corvus sensei, rohan das youtube, codewithharry, rohandas codewithharry"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="English"/>
        <link rel="shortcut icon" href="/img/favicon-32x32.png" type="image/x-icon"/>
      </Head>
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <Nav />
      <Header />
      {children}
    </div>
    </>
    )
};

export default Layout;
