import Head from 'next/head'
import headshot from '../public/Headshot.jpg'
import Image from 'next/image'
const About = () => {
    return ( 
        <>
        <Head>
            <title>Test Project | about</title>
        </Head>
        <div>
            <h1>About Me</h1>
            <Image src={headshot} alt="Jon Smith's headshot" />
        </div>
        </>
     );
}
 
export default About;