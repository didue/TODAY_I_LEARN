'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import sytles from '../style/navigation.module.css'

export default function Navigation() {

    const path = usePathname();

    return (
    <nav className={sytles.nav}>
        <ul className={sytles.list}>
            <li><Link href="/">Home</Link>{path === "/"? "🔥" : ""}</li>
            <li><Link href="/about-us">About Us</Link>{path === "/about-us"? "🔥" : ""}</li>
        </ul>
    </nav>
    )
}