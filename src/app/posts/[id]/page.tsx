import { FC } from 'react'
//import Image, { StaticImageData } from 'next/image'
import { neon } from "@neondatabase/serverless"

export const getContent = async (id: string) => {
  const sql = neon(process.env.DATABASE_URL as string)

  //Placeholder table query
  const post = await sql`SELECT * FROM playing_with_neon WHERE id = ${id}` //Replace playing_with_neon with name of posts table (Probably gonna be posts)

  return post[0]
}

/*interface PostContent {
  title: string
  hook?: string
  image?: {
    src: StaticImageData | string
    alt: string
  }
  author: string
  date: string
  content: string
}*/

const Post: FC<{params: Promise<{id: string}>}> = async ({ params }) => {
  const id = (await params).id
  
  const content = await getContent(id)
  
  console.log(content)

  return (
      <main>
        {content.name}<br />
        {content.value}
        {/*<div className="grid grid-cols-2 grid-rows-2 h-[50vh] w-[100vw] overflow-hidden relative gap-4">
          <Image src={image.src} alt={image.alt} height={0} width={0} sizes="100vw" className="col-start-1 col-end-3 w-[100vw] h-auto" />
          <div className="col-start-1 row-start-2 z-10 m-6 bg-[#BE8CFF] p-4 w-fit rounded-xl flex flex-col gap-3">
            <h1 className="text-4xl text-text_secondary font-black">{title}</h1>
            {hook && <p>{hook}</p>}
          </div>
        </div>

        <article className="p-4 flex flex-col gap-4">
          <div>
            <h2 className="text-lg">Skrevet av: {author}</h2>
            <h2 className="text-lg">Publisert: {date}</h2>
          </div>
          <p dangerouslySetInnerHTML={{__html: content}}></p>
        </article>*/}
      </main>
  )
}

export default Post