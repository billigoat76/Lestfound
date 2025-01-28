import Link from "next/link";

export function Navbar(){
    return(
        <nav className = "flex justify-between items-center py-5">
            <Link href = "/">
                <h1 className="text-2xl font-bold">
                     Lest <span className="text-primary">Found</span></h1>
            </Link>
        </nav>
    )
}