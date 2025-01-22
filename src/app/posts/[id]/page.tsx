import { FC } from 'react'
import Image from 'next/image'
import { neon } from "@neondatabase/serverless"

interface PostContent {
  title: string
  hook?: string
  image?: {
    src: string
    alt: string
    fill?: boolean
  }
  author: string
  posting_date: Date
  body_text: string
}

export const getContent = async (id: string) => {
  const sql = neon(process.env.DATABASE_URL as string)

  const post = await sql`SELECT * FROM posts WHERE id = ${id}`

  return post[0] as PostContent
}

const page: FC<{params: Promise<{id: string}>}> = async ({ params }) => {
  const content = await getContent((await params).id)

  content.image ??= {
    src: "https://picsum.photos/1000/500",
    alt: "Random image from lorem picsum",
  }
  content.image.fill ??= true

  return (
      <main>
        <div className="grid grid-cols-2 grid-rows-2 h-[50vh] w-[100vw] overflow-hidden relative gap-4">
          <Image src={content.image.src} alt={content.image.alt} height={0} width={0} sizes="100vw" className={`col-start-1 col-end-3 ${content.image.fill ? "w-[100vw]" : "w-auto"} ${!content.image.fill && "justify-self-center"} h-auto`} />
          <div className="col-start-1 row-start-2 z-10 m-6 bg-[#BE8CFF] p-4 w-fit rounded-xl flex flex-col gap-3">
            <h1 className="text-4xl text-text_secondary font-black">{content.title}</h1>
            {content.hook && <p>{content.hook}</p>}
          </div>
        </div>

        <article className="p-4 flex flex-col gap-4">
          <div>
            <h2 className="text-lg">Skrevet av: {content.author}</h2>
            <h2 className="text-lg">Publisert: {content.posting_date.toLocaleDateString("no")}</h2>
          </div>
          <p dangerouslySetInnerHTML={{__html: content.body_text}}></p>
        </article>
      </main>
  )
}

export default page