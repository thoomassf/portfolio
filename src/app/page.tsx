"use client"

import { DownloadSimple, GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from 'phosphor-react';

import { Header } from "./components/Header";

export default function Home() {
  return (
    <main className="min-h-screen max-w-[1240px] m-auto">
      <Header />

      <div className="grid grid-cols-home mt-28 items-center">
        <div className="">
           

          <h1 className='text-slate-100 font-bold text-5xl mt-6'>Thomas <br/>Farias</h1>

          <h3 className='mt-4 font-normal text-slate-500 text-xl'>Front-end Developer</h3>

          <div className='flex items-center mt-6'>
            <a href="#" className='p-2 mr-5 text-slate-200 hover:bg-slate-700 hover:rounded-full hover:p-2 hover:transition-colors'>
              <GithubLogo size={32} />
            </a>
            <a href="#" className='p-2 mr-5 text-slate-200 hover:bg-slate-700 hover:rounded-full hover:p-2 hover:transition-colors'>
              <InstagramLogo size={32} />
            </a>
            <a href="#" className='p-2 text-slate-200 hover:bg-slate-700 hover:rounded-full hover:p-2 hover:transition-colors'>
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
            <span className='font-semibold text-lg text-blue-700 mr-2 hover:text-blue-800'>Baixar CV</span>
            <DownloadSimple size={20} className='text-blue-700 hover:text-blue-800'/>
          </button>

          <button className='flex items-center px-4 py-2 border rounded-2xl mt-3 border-blue-700'>
            <WhatsappLogo size={24} className='mr-2 text-blue-700' />
            <span className='text-blue-700 hover:text-blue-800'>Vamos conversar</span>
          </button>
        </div>
      </div>
    </main>
  )
}
