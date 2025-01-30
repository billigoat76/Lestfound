import Link from "next/link";
import Image from "next/image";

export function Navbar(){
    return(
        <nav className = "flex justify-between items-center py-5">
            <Link href = "/" className="flex items-center gap-2">
                <Image src="/logo.png" alt="logo" width={40} height={40} />
                <h1 className="text-2xl font-bold">
                     Lest<span className="text-primary">Found</span></h1>
            </Link>
        </nav>
    )
}