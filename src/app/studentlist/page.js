import Link from "next/link";

export default function StudentList() {
    const data = [
        { id: 1, name: "Anil" },
        { id: 2, name: "Sonali" },
        { id: 3, name: "Monika" },
        { id: 4, name: "Rubiya" },
    ]
    return (
        <div>
            <Link href="/">Go to home</Link>
            <hr />
            {
                data.map((singleData, id) => <Link key={id} style={{ marginRight: "5px" }} href={`studentlist/${singleData.id}`}>{singleData.name}</Link>)
            }
        </div>
    )
}