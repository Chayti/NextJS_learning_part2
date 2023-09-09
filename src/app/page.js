'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styles from './page.module.css'
import Profile from '../../public/vercel.svg'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  style: 'italic'
})

export default function Home() {

  const [name, setName] = useState("Chayti")

  function handleClick(greet) {
    alert(`Hi ${greet}`)
    setName("Tithi")
  }

  const InnerComponent = () => {
    return (
      <h1>Inner Me!</h1>
    )
  }

  const router = useRouter();
  const navigate = (route) => {
    router.push(`/${route}`)
  }

  console.log(Profile)

  return (
    <main className={styles.main}>

      <Link href="/login">Go to login page</Link>
      <Link href="/about">Go to about page</Link>
      <h1>Dynamic routing | Student List</h1>
      <Link href="/studentlist">Go to student list page</Link>
      <hr />

      <button onClick={() => router.push('/login')}>Go to login</button>
      <button onClick={() => navigate('about')}>Go to about</button>

      <h1 >home page</h1>

      <Link href="/productlist">Go to product list page on client component</Link>
      <br />
      <br />
      <Link href="/productlistserverside">Go to product list page on server component</Link>
      <br />
      <br />
      <Link href="/user">User page</Link>
      <User name="Chayti" />
      <User name="Ridoy" />
      <h1>Events, function, state with {name}</h1>
      <button onClick={() => handleClick('bingo!')}>Click Me</button>

      {/* call as  component*/}
      <InnerComponent />

      {/* call as function */}
      {InnerComponent()}

      <Image
        src={Profile}
      />

      <img src={Profile.src} />

      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Barbie_The_Movie_Logo.png"
        width="400"
        height="200"
      />

      <h1 style={{ fontFamily: 'Roboto', fontWeight: 100 }}>Font optimization checking</h1>
      <h1 className={roboto.className}>Font Optimization with nextjs font feature</h1>

    </main>
  )
}

const User = ({ name }) => {
  return (
    <h2>My name is {name}</h2>
  )
}

