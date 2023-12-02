import '../styles/globals.css';
import Head from 'next/head';

// components
import Layout from '../components/Layout';
import Transition from '../components/Transition';
// router
import { useRouter } from 'next/router';
// framer Motion
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>Rohan Das | Passionate Coder with Imagination</title>
        <meta property="og:title" content="Rohan Das | Passionate Coder with Imagination" key="title" />
        <meta name="description" content="Rohan Das is young and passionate Python coder, who has a good command in Python, HTML, CSS."/>
        <meta name="keywords" content="rohan, rohan das, Rohan Das, rohandas, corvus, corvus sensei, rohan das youtube, codewithharry, rohandas codewithharry"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="English"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/x-icon" href="/favicon-32x32.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition/>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>);
}

export default MyApp;
