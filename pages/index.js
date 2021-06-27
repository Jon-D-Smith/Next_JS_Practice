import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'
export default function Home() {
  return (
   <div className={styles.container}>
     <h1>Hello World</h1>
     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam corrupti illum ipsum itaque beatae amet dicta modi omnis neque? Dolores illo molestias itaque voluptate molestiae sequi reiciendis beatae ducimus minima!</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem in aliquid, dolores earum expedita pariatur accusantium! Voluptas repudiandae incidunt exercitationem dolores? Consectetur quis, error esse praesentium ea tempora ratione tempore.</p>
     <Link href="/ninjas">
     <a>See Nina Listing</a>
     </Link>
   </div>
  )
}
