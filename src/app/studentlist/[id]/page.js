'use client'
export default function Student({ params }) {
    console.log(params)
    return (
        <div>
            <h1>Student details of {params.id}</h1>
        </div>
    )
}