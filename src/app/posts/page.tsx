import { neon } from "@neondatabase/serverless"

const getData = async () => {
    const sql = neon(process.env.DATABASE_URL as string)

    const test = await sql`
        SELECT * FROM playing_with_neon
    `

    return test
}

const Page = async () => {
    const data = await getData()

    return (
        <>
            <div className='flex flex-col'>
                {
                    data.map((item) => (
                        <div key={item.id} className='flex gap-4'>
                            <h1>{item.name}</h1>
                            <p>{item.value}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Page;