"use client"

import { DownloadSimple, GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from 'phosphor-react';

import { Header } from "./components/Header";

export default function Home() {
  return (
    <main className="min-h-screen max-w-[1640px] m-auto">
      <Header />

      <div className="grid grid-cols-home mt-28 items-center">
        <div className="">
          <span className='font-medium text-xl text-violet-900 bg-violet-500 bg-opacity-70 rounded-lg px-3 py-1 '>
            ✌️ Saudações!
          </span>

          <h1 className='text-zinc-200 font-bold text-5xl mt-6'>Thomas <br/>Farias</h1>

          <h3 className='mt-4 font-normal text-zinc-500 text-xl'>Front-end Developer</h3>

          <div className='flex items-center mt-6'>
            <a href="#" className='mr-4 text-zinc-200'>
              <GithubLogo size={32} />
            </a>
            <a href="#" className='mr-4 text-zinc-200'>
              <InstagramLogo size={32} />
            </a>
            <a href="#" className='text-zinc-200'>
              <LinkedinLogo size={32} />
            </a>
          </div>
        </div>

        <div className="">
          {/* <Image src="https://github.com/thoomassf.png" alt="Avatar de Thomas Farias" width={50} height={50} /> */}
          <div className='bg-zinc-500 w-[555px] h-[600px] rounded-full'></div>
        </div>
        
        <div className="flex flex-col items-end">
          <button className='flex items-center'>
            <span className='font-semibold text-base text-zinc-200 mr-2'>Baixar CV</span>
            <DownloadSimple size={16} className='text-zinc-200'/>
          </button>

          <button className='flex items-center px-4 py-2 border rounded-2xl mt-3'>
            <WhatsappLogo size={24} className='mr-2 text-zinc-200' />
            <span className='text-zinc-200'>Vamos conversar</span>
          </button>
        </div>
      </div>
    </main>
  )
}
