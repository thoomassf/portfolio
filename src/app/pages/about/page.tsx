import { Subtitle } from "@/app/components/Subtitle";

export default function About() {
  return (
    <div className="min-h-screen max-w-[1240px] m-auto grid grid-cols-2 items-center justify-between">
      <div>
        <img src="https://github.com/thoomassf.png" alt="Foto de Thomas Farias" className="rounded-full border border-4 border-blue-700 shadow-sm"/>
      </div>

      <div>
        <Subtitle 
          text="🤗 Sobre mim"
        />

        <h1 className='text-slate-100 font-bold text-5xl mt-6'>Thomas Silva de Farias</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eveniet quaerat ex vitae mollitia porro doloribus cumque perspiciatis nisi nam? Dignissimos porro expedita ea in esse optio voluptates veniam enim!</p>
      </div>
    </div>
  )
}