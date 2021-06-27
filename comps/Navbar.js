import Link from 'next/link'
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>Ninja List</h1>
            </div>
            <ul>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/ninjas"><li>Ninja Listing</li></Link>
            </ul>
        </nav>
     );
}
 
export default Navbar;