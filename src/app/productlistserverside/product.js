'use client'
export default function Product({ price }) {
    return (
        <div>
            <button onClick={() => alert(`Price: ${price}`)}>Check Price</button>
        </div>
    )
}