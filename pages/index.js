import Head from 'next/head'
import Header from '../components/Header'
import Intro from '../components/Intro'
import About from '../components/About'
import Skill from '../components/Skill'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Collaboration from '../components/Collaboration'

export default function Home() {
  return (
    <div className='main'>
      <Head>
        <title>Suraj Vishwakarma 🧑‍💻</title>
        <meta name="google-site-verification" content="6eReh_wvunfvtZ0hbAvN2CgVnaL4XTpu_f1h5l6JCb0" />
        <script async defer data-website-id="27065272-7b60-4440-8ebd-e98de2a71a25" src="http://localhost:3000/umami.js"></script>
      </Head>
      <Header />
      <Intro />
      <About/>
      <Skill />
      <Work />
      <Collaboration />
      <Contact />
      <Footer />
    </div>
  )
}
