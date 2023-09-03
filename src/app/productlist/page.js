'use client'

import Link from "next/link";
import { useEffect, useState } from "react"

export default function Page() {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        (async () => {
            let data = await fetch("https://dummyjson.com/products")
            data = await data.json()
            setProduct(data.products)
        })()

    }, [])

    return (
        <div>
            <Link href="/">Go to home</Link>
            <h1> product list</h1>
            {
                product.map((item, key) => <h3 key={key}>Name: {item.title}</h3>)
            }
        </div>
    )
}