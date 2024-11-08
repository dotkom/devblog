import { neon } from "@neondatabase/serverless"
import Link from "next/link"

const getData = async () => {
    const sql = neon(process.env.DATABASE_URL as string)

    //Dataen caches, så vi får ikke up-to-date info
    //Spør Bårnes
    const test = await sql`
        SELECT id, title, hook, author, posting_date FROM posts ORDER BY posting_date DESC
    `

    return test
}

const Page = async () => {
    const data = await getData()

    console.log(data)

    return (
        <div className='flex flex-wrap gap-5'>
            {
                data.map((item) => (
                    <Link href={`/posts/${item.id}`} key={item.id} className='flex flex-col gap-4 w-fit mx-10 my-3'>
                        <div className="bg-secondary p-3 rounded-xl flex flex-col w-96">
                            <h1 className="text-2xl">{item.title}</h1>
                            {item.hook && <p>{item.hook}</p>}
                        </div>
                        <p>{item.author}</p>
                        <p>{item.posting_date.toLocaleDateString("no")}</p>
                    </Link>
                ))
            }
        </div>
    )
}

export default Page;