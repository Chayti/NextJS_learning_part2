import Link from "next/link";
import Product from "./product";

async function productList() {
    let data = await fetch("https://dummyjson.com/products")
    data = await data.json()
    return data.products
}

export default async function Page() {
    let products = await productList()
    console.log(products)
    return (
        <div>
            <Link href={"/"}>Go to Home</Link>
            <h2>Product list fetching on server component</h2>
            {
                products.map((item, key) => <div>
                    <h3 key={key}>Name: {item.title}</h3>
                    <Product price={item.price} />

                </div>
                )}
        </div>
    )
}