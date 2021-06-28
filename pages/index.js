import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'
export default function Home() {
  return (
    <>
    <Head>
      <title>Test Site | Home</title>
    </Head>
   <div className={styles.container}>
     <h1>Hello World</h1>
     <p>Using this project to test Next</p>
   </div>
   </>
  )
}
