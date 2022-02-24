import Head from 'next/head'
import Image from 'next/image'
import teamlitho from '../public/teamlitho.png'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Covid-19 Tracker Quebec</title>
        <meta name="description" content="Ya another Covid tracker..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.div}>
        <h1>
          TeamLitho Projects <span styles={styles.span} className="aria-hidden">|</span> Beta
    </h1>
      </div>


      <main className={styles.main}>
        <div>
          <h1>Welcome to TeamLitho Projects</h1>
          <p>Covid-19 Tracker QC</p>
        </div>
      </main>


      <div style={{borderRadius: '5px', overflow: 'hidden'}}>
        <Image
          src={teamlitho}
          alt="Picture of the author"
          width="800" 
          height="800"
        />
      </div>

      <br/>

      <footer className={styles.footer}>
        <a
          href="https://team-litho.pages.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TeamLitho
        </a>
      </footer>
    </div>
  )
}
