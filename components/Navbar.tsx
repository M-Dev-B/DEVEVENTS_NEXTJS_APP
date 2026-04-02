import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <header>
            <nav>
                <Link href="/" className="logo">
                    <Image src="/icons/logo.png" alt="logo" width={20} height={20} />
                    <p>DevEvent</p>
                </Link>
                <ul>
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/events"><li>Events</li></Link>
                    <Link href="/about"><li>Create Event</li></Link>
                </ul>
            </nav> 
        </header>
    )
}

export default Navbar