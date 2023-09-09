'use client'
import Link from "next/link";
import { useState } from "react";
import custom from '../custom.module.css'
import outside from '@/styles/outside.module.css'
import Script from "next/script";

export default function Page() {
    const [h4Style, seth4Style] = useState({ backgroundColor: "bisque" })
    const [color, setColor] = useState("red");

    const { red } = custom
    console.log(red)

    return (
        <div>

            <Script
                src="./location.js"
                onLoad={() => console.log("file loaded")}
            />

            <Link href="/">Go to home</Link>
            <h1 style={{ backgroundColor: "yellow" }}>User page</h1>
            <h4 style={h4Style}>Hello user</h4>
            <h4 className={red}>Hello user2</h4>
            <p
                className={color == "red" ? custom.red : custom.main}
                style={{ backgroundColor: color == "red" ? "yellow" : "gray" }}
            >Modular style3</p>
            <button onClick={() => setColor("green")}>Update color</button>
            <p className={outside.main}>Modular style</p>
            <button onClick={() => seth4Style({ backgroundColor: "orange" })}>Update h4 style</button>
            <p id={custom.orange}>Bye bye</p>

        </div>
    )
}