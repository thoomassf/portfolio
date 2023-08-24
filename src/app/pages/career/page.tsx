import { Subtitle } from "@/app/components/Subtitle";
import { Card } from "./components/Card";

export default function Career() {
  return (
    <main className="min-h-screen max-w-[1240px] m-auto flex flex-col items-center">
      <div className="flex flex-col items-center mt-10">
        <Subtitle 
          text="💼 Carreira"
        />
        <h1 className="mt-7 text-slate-100 font-bold text-4xl">Minha trajetória até o momento</h1>
      </div>

      <div className="grid grid-cols-2 mt-16">
        <article className="flex flex-col items-center mr-24">
          <h2 className="text-slate-100 text-3xl font-bold">Área profissional</h2>
          <h3 className="mt-2 text-slate-500 text-xl font-normal">2016 · Atualmente</h3>

          <Card 
            title="Bacharelado em sistemas de informação"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente pariatur amet, officia est, tempora iure cupiditate hic possimus praesentium nesciunt commodi "
            duration="4 anos"
            period="fevereiro/2018 · dezembro/2022"
          />

        <Card 
            title="Bacharelado em sistemas de informação"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente pariatur amet, officia est, tempora iure cupiditate hic possimus praesentium nesciunt commodi "
            duration="4 anos"
            period="fevereiro/2018 · dezembro/2022"
          />
        </article>
        <article className="flex flex-col items-center ml-24">
          <h2 className="text-slate-100 text-3xl font-bold">Área acadêmica</h2>
          <h3 className="mt-2 text-slate-500 text-xl font-normal">2016 · Atualmente</h3>  

          <Card 
            title="Bacharelado em sistemas de informação"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente pariatur amet, officia est, tempora iure cupiditate hic possimus praesentium nesciunt commodi "
            duration="4 anos"
            period="fevereiro/2018 · dezembro/2022"
          />

          <Card 
            title="Bacharelado em sistemas de informação"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente pariatur amet, officia est, tempora iure cupiditate hic possimus praesentium nesciunt commodi "
            duration="4 anos"
            period="fevereiro/2018 · dezembro/2022"
          />
        </article>
      </div>
    </main>
  )
}