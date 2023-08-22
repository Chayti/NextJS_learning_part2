'use client'

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

  return (
    <main className={styles.main}>
      <h1>home page</h1>
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

