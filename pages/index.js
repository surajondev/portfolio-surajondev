import Head from 'next/head'
import Header from '../components/Header'
import Intro from '../components/Intro'
import About from '../components/About'
import Skill from '../components/Skill'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='main'>
      <Head>
        <title>Suraj Vishwakarma 🧑‍💻</title>
        <meta name="google-site-verification" content="6eReh_wvunfvtZ0hbAvN2CgVnaL4XTpu_f1h5l6JCb0" />
      </Head>
      <Header />
      <Intro />
      <About/>
      <Skill />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}
