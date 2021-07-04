import Head from 'next/head'
import headshot from '../public/Headshot.jpg'
import Image from 'next/image'
import styles from '../styles/About.module.css'
const About = () => {


    return ( 
        <>
        <Head>
            <title>Test Project | about</title>
        </Head>
        <div className={styles.container}>
            <h1 className={styles.title}>About Me</h1>
            <Image src={headshot} width={250} height={200} alt="Jon Smith's headshot" />
            <p>Test page using the image tag vs the traditional html image tag</p>
        </div>
        </>
     );
}
 
export default About;