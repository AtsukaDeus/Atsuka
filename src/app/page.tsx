'use client'

import Image from "next/image";
import Link from 'next/link';


import icon_gmail from '../../public/img/gmailIcon.png';


import icon_f_vc from '../../public/img/f-sv.png';
import icon_wsp from '../../public/img/wspIcon.png';

import CompRedes from "./components/redes";
import CompTecnologiasIcons from "./components/tecnologiasIconos";
import CompExperienciaLaboral from "./components/experienciaLaboral";
import CompProyectos from "./components/proyectos";
import CompCertificaciones from "./components/certificaciones";




export default function Home() {


  return (
    <main className="bg-black flex min-h-screen flex-col items-center justify-between md:p-24 px-[50px] py-24">
      
      <CompRedes></CompRedes>
      
      <h1 className="text-2xl font-sans text-center text-white">
        Hola que tal!, mi nombre es <span className="text-teal-300">Francisco Argandoña</span>
        , bienvenido a mi <span className="text-fuchsia-400">Portafolio</span> 🖥️🖱️
      </h1>

      <div className="relative mt-10 group">
        <Image className="rounded-full transition duration-300 ease-in-out transform group-hover:-translate-x-5 border-2 border-zinc-500 group-hover:border-cyan-400 h-[420px]" src={icon_f_vc} alt="imgFrancisco" width={280} height={200} />

        <div className="right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 pr-10 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
          <div className="flex mb-2">
              <Image className="mr-5" src={icon_gmail} alt="gmailIcon" width={25} height={20}></Image><span className="text-neutral-300">fcomaths@gmail.com</span><br />
          </div>
          <div className="flex">
              <Image className="mr-5" src={icon_wsp} alt="wspIcon" width={25} height={20}></Image><span className="text-neutral-300">+569 2020 8745</span>
          </div>
          
        </div>
      </div>


      <div className="mt-10">
        <div className="flex mb-5">
          <p>Pincha en el botón para ver mi curriculum 👉</p>
          <Link className="ml-2 h-7 text-center bg-blue-700 px-6 rounded-md transition delay-200 hover:-translate-y-1 hover:bg-blue-500 " href={"/PDF/CV-Francisco-Argandoña.pdf"} target="_blank" rel="noopener noreferrer">Ver</Link>
        </div>

        <p className="text-neutral-300">En este momento me encuentro estudiando <span className="text-teal-400">Ingeniería Informática </span> 
          en <span className="text-amber-300">Duoc UC.</span> Además te quiero comentar que poseo <br />experiencia en los siguientes
          lenguajes y tecnologías:
        </p>
      </div>

      <CompTecnologiasIcons></CompTecnologiasIcons>
      
      <CompProyectos></CompProyectos>

      <CompExperienciaLaboral></CompExperienciaLaboral>
      
      <CompCertificaciones></CompCertificaciones>
      
      
    
    
    </main>
  )
}

