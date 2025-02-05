import React from 'react'
import { neon } from '@neondatabase/serverless'
import { ConfirmButton, CancelButton } from '../components/FormButtons'
import Image from 'next/image'

const addPost = async (title: string, author: string, content: string, hook?: string, image?: string) => {
  const sql = neon(process.env.DATABASE_URL as string)

  await sql`
    INSERT INTO posts (title, hook, image, author, body_text)
    VALUES (${title} ${hook} ${image} ${author} ${content})
  `
}

const page = () => {
  return (
    <main className='flex flex-col w-1/2 justify-self-center'>
      <h2 className='text-4xl'>Lag ny blogpost</h2>
      <form action="" className='flex flex-col gap-3'>
        <div className='flex justify-between'>
          <div className='flex flex-col w-1/2'>
            <label>Forfatter</label><input type="text" name="" id="" className='text-black' />
            <label>Bilde (URL)</label><input type="text" name="" id="" className='text-black' />
            <label>Tittel</label><input type="text" name="" id="" className='text-black' />
          </div>

          <Image src="https://i.ytimg.com/vi/IxP-CK_X6q0/hqdefault.jpg" alt='Lightning My Queen' width={160} height={90} />
        </div>

        <label>Brødtekst</label><textarea name="" id="" className='text-black h-60'></textarea>
        <div className='flex justify-between'>
          <CancelButton buttonText='Cancel' />
          <ConfirmButton buttonText='Publiser' />
        </div>
      </form>
    </main>
  )
}

export default page