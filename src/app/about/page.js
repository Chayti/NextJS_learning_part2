import Link from "next/link";

export default function About() {
    return (
        <div>
            <Link href="/">Go to home</Link><br />
            <Link href="/about/aboutcollege">Go to about college</Link>
            <h1>About</h1>
        </div>
    )
}