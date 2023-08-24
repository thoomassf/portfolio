import Image from 'next/image'
import Logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <header className='flex mt-10 center justify-between bg-dark h-16 rounded-lg shadow-md'>
      <div className='pl-6 pt-3 pb-3'>
        <Image src={Logo} alt="Logo do portfolio" className='' />
      </div>

      <nav className='flex items-center'>
        <ul className='flex text-slate-100'>
          <li className='cursor-pointer mr-4 font-normal text-lg hover:text-blue-700 hover:transition-colors'>Home</li>
          <li className='cursor-pointer mr-4 font-normal text-lg hover:text-blue-700 hover:transition-colors'>Sobre mim</li>
          <li className='cursor-pointer mr-4 font-normal text-lg hover:text-blue-700 hover:transition-colors'>Portfólio</li>
          <li className='cursor-pointer mr-4 font-normal text-lg hover:text-blue-700 hover:transition-colors'>Skills</li>
          <li className='cursor-pointer mr-4 font-normal text-lg hover:text-blue-700 hover:transition-colors'>Carreira</li>
          <li className='cursor-pointer mr-4 font-normal text-lg hover:text-blue-700 hover:transition-colors'>Recomendações</li>
          <li className='cursor-pointer mr-6 font-normal text-lg hover:text-blue-700 hover:transition-colors'>Contato</li>
        </ul>
      </nav>
    </header>
  )
}