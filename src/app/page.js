'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styles from './page.module.css'

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
    </main>
  )
}

const User = ({ name }) => {
  return (
    <h2>My name is {name}</h2>
  )
}

