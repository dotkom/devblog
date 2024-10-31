import { neon } from "@neondatabase/serverless"
import Link from "next/link"

const getData = async () => {
    const sql = neon(process.env.DATABASE_URL as string)

    const test = await sql`
        SELECT id, title, hook, author, posting_date FROM posts ORDER BY posting_date DESC
    `

    return test
}

const Page = async () => {
    const data = await getData()

    console.log(data)

    return (
        <div className='flex flex-col'>
            {
                data.map((item) => (
                    <Link href={`/posts/${item.id}`} key={item.id} className='flex gap-4'>
                        <h1>{item.title}</h1>
                        {item.hook && <p>{item.hook}</p>}
                        <p>{item.author}</p>
                        <p>{item.posting_date.toLocaleDateString()}</p>
                    </Link>
                ))
            }
        </div>
    )
}

export default Page;