import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Buttons from '../comps/Buttons'
export default function Home() {

  const sayHi = () => {
    alert('hi')
  }
  return (
    <>
    <Head>
      <title>Test Site | Home</title>
    </Head>
   <div className={styles.container}>
     <h1>Hello World</h1>
     <p>Using this project to test Next</p>
     <Buttons text='Say Hi' variant="contained" color="primary" handleClick={() => sayHi()} />
   </div>
   </>
  )
}
