import Image from 'next/image'
import Logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <header className='flex mt-10 center justify-between bg-zinc-700 h-16 rounded-lg'>
      <div className='pl-6 pt-3 pb-3'>
        <Image src={Logo} alt="Logo do portfolio" className='' />
      </div>

      <div className='flex items-center'>
        <ul className='flex '>
          <li className='cursor-pointer mr-4 font-normal text-lg hover:font-medium hover:text-zinc-400'>Home</li>
          <li className='cursor-pointer mr-4 font-normal text-lg hover:font-medium hover:text-zinc-400'>Sobre mim</li>
          <li className='cursor-pointer mr-4 font-normal text-lg hover:font-medium hover:text-zinc-400'>Portfólio</li>
          <li className='cursor-pointer mr-4 font-normal text-lg hover:font-medium hover:text-zinc-400'>Skills</li>
          <li className='cursor-pointer mr-4 font-normal text-lg hover:font-medium hover:text-zinc-400'>Carreira</li>
          <li className='cursor-pointer mr-4 font-normal text-lg hover:font-medium hover:text-zinc-400'>Recomendações</li>
          <li className='cursor-pointer mr-6 font-normal text-lg hover:font-medium hover:text-zinc-400'>Contato</li>
        </ul>
      </div>
    </header>
  )
}