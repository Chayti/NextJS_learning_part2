'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {

    const pathName = usePathname();
    console.log(pathName)

    return (
        <div>
            {
                !pathName.includes("e")
                    ? <div>
                        <h1>Common Layout for about page start</h1>
                        <ul>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/about/aboutcollege">About College</Link></li>
                            <li><Link href="/about/aboutgardian">About Gardian</Link></li>
                            <li><Link href="/about/aboutstudent">About Student</Link></li>
                        </ul>
                        <h1>Common Layout for about page ends here</h1>
                    </div>
                    : null
            }
            {children}
        </div>
    )
}