import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export interface PostProps {
  title: string
  hook?: string
  image?: {
    src: StaticImageData | string
    alt: string
    fill?: boolean
  },
  author: string
  date: string
  content: string
}

const Post: FC<PostProps> = ({ title, hook, image={src: "https://picsum.photos/1000/500", alt: "A randomly generated image from Lorem Picsum", fill: true}, author, date, content }) => {
  image.fill ??= true

  return (
    <>
      <Navbar />
      <main>
        <div className="grid grid-cols-2 grid-rows-2 h-[50vh] w-[100vw] overflow-hidden relative gap-4">
          <Image src={image.src} alt={image.alt} height={0} width={0} sizes="100vw" className={`col-start-1 col-end-3 ${image.fill ? "w-[100vw]" : "w-auto"} ${!image.fill && "justify-self-center"} h-auto`} />
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
          <p>{content}</p>
        </article>
      </main>
      <Footer />
    </>
  )
}

export default Post