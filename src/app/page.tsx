'use client'

import Image from "next/image";
import { useState } from "react";

import img_cert_anali_plan from '../../public/img/certificaciones/certificacion-analisis-planificacion.png';
import img_cert_python from '../../public/img/certificaciones/certificacion-python.jpg';
import img_cert_js from '../../public/img/certificaciones/certificacion-javascript.jpg';


import img_proy_skyrim from '../../public/img/proyectos/ImgSkyProj.png';
import img_proy_sukivet from '../../public/img/proyectos/imgSukiVet.png';

import icon_bootstrap from '../../public/img/tecnologias/bootstrapIcon.png';
import icon_cpp from '../../public/img/tecnologias/cppIcon.png';
import icon_css from '../../public/img/tecnologias/cssIcon.png';
import icon_django from '../../public/img/tecnologias/djangoIcon.png';
import icon_html from '../../public/img/tecnologias/htmlIcon.png';
import icon_ionic from '../../public/img/tecnologias/ionicIcon.png';
import icon_java from '../../public/img/tecnologias/javaIcon.png';
import icon_js from '../../public/img/tecnologias/jsIcon.png';
import icon_node from '../../public/img/tecnologias/nodeIcon.png';
import icon_oracle from '../../public/img/tecnologias/oracleDevIcon.png';
import icon_postgres from '../../public/img/tecnologias/postgresIcon.png';
import icon_python from '../../public/img/tecnologias/pythonIcon.png';
import icon_react from '../../public/img/tecnologias/reactIcon.png';
import icon_tailwind from '../../public/img/tecnologias/tailwindIcon.png';

import icon_github from '../../public/img/githubIcon.png';
import icon_gmail from '../../public/img/gmailIcon.png';
import icon_linkedin from '../../public/img/lnkIcon.png';
import icon_foto_perfil from '../../public/img/lnkphoto.png';
import icon_wsp from '../../public/img/wspIcon.png';




export default function Home() {
  const [mostrarDiv, setMostrarDiv] = useState(false);

  const toggleDiv = () => {
    setMostrarDiv(!mostrarDiv);
  };
  

  return (
    <main className="bg-black flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="-mt-10 mb-20 flex justify-end w-full">
        <a href="https://github.com/AtsukaDeus" target="_blank">
          <Image className="mr-5 transition delay-75 duration-300 ease-in-out hover:rotate-45 shadow-lg shadow-indigo-500/50 rounded-full" src={icon_github} alt="imgIconoGitHub" width={50} height={50}></Image>
        </a>
        <a href="https://www.linkedin.com/in/fcomaths/" target="_blank">  
          <Image className="mr-5 transition delay-75 duration-300 ease-in-out hover:rotate-45 shadow-lg shadow-indigo-500/50 rounded-full" src={icon_linkedin} alt="imgIconoLnk" width={50} height={50}></Image>
        </a>
      </div>
      
      <h1 className="text-2xl font-sans text-center text-white">
        Hola que tal!, mi nombre es <span className="text-teal-300">Francisco Argandoña</span>
        , bienvenido a mi <span className="text-fuchsia-400">Portafolio</span> 🖥️🖱️
      </h1>

      <div className="relative mt-10 group">
        <Image className="rounded-full transition duration-300 ease-in-out transform group-hover:-translate-x-5 border-2 border-zinc-500 group-hover:border-cyan-400" src={icon_foto_perfil} alt="imgFrancisco" width={300} height={300} />

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
        <p className="text-neutral-300">En este momento me encuentro estudiando <span className="text-teal-400">Ingeniería Informática </span> 
          en <span className="text-amber-300">Duoc UC.</span> Además te quiero comentar que poseo <br />experiencia en las siguientes
          tecnologías:
        </p>
      </div>

      <div className="mt-20 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-10 mt-10">
        <Image className="transition delay-75 duration-300 ease-in-out hover:rotate-180 hover:skew-y-12" src={icon_python} alt="imgIconoPython" width={50} height={50}></Image>
        <Image className="transition delay-75 duration-300 ease-in-out hover:rotate-180 hover:skew-y-12" src={icon_django} alt="imgIconoDjango" width={50} height={50}></Image>
        <Image className="transition delay-75 duration-300 ease-in-out hover:rotate-180 hover:skew-y-12" src={icon_cpp} alt="imgIconoCpp" width={50} height={50}></Image>
        <Image className="transition delay-75 duration-300 ease-in-out hover:rotate-180 hover:skew-y-12" src={icon_java} alt="imgIconoJava" width={50} height={50}></Image>
        <Image className="transition delay-75 duration-300 ease-in-out hover:rotate-180 hover:skew-y-12" src={icon_html} alt="imgIconoHtml" width={50} height={50}></Image>
        <Image className="transition delay-75 duration-300 ease-in-out hover:rotate-180 hover:skew-y-12" src={icon_css} alt="imgIconoCss" width={50} height={50}></Image>
        <Image className="transition delay-75 duration-300 ease-in-out hover:rotate-180 hover:skew-y-12" src={icon_js} alt="imgIconoJs" width={50} height={50}></Image>
        <Image className="transition delay-75 duration-300 ease-in-out hover:rotate-180 hover:skew-y-12" src={icon_node} alt="imgIconoNodejs" width={50} height={50}></Image>
        <Image className="transition delay-75 duration-300 ease-in-out hover:rotate-180 hover:skew-y-12" src={icon_oracle} alt="imgIconoOracleDev" width={50} height={50}></Image>
        <Image className="transition delay-75 duration-300 ease-in-out hover:rotate-180 hover:skew-y-12" src={icon_postgres} alt="imgPostgresIcon" width={50} height={50}></Image>
        <Image className="transition delay-75 duration-300 ease-in-out hover:rotate-180 hover:skew-y-12" src={icon_ionic} alt="imgIonicIcon" width={50} height={50}></Image>
        <Image className="transition delay-75 duration-300 ease-in-out hover:rotate-180 hover:skew-y-12" src={icon_react} alt="imgReacIcon" width={50} height={50}></Image>
        <Image className="transition delay-75 duration-300 ease-in-out hover:rotate-180 hover:skew-y-12" src={icon_bootstrap} alt="imgBootstrapIcon" width={50} height={50}></Image>
        <Image className="transition delay-75 duration-300 ease-in-out hover:rotate-180 hover:skew-y-12" src={icon_tailwind} alt="imgTailwindIcon" width={50} height={50}></Image>
      </div>
      
      <div className="mt-20">
          <h1 className="text-2xl font-sans text-center text-neutral-300">Proyectos que he desarrollado </h1><br />
          <p className="text-neutral-300 italic">Por el momento llevo dos, pero habrán más con el tiempo...
          <span className="ml-2 text-indigo-400"> ¡Al clickear podrás ver el código en github!</span>
          </p>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 ">
              <a href="https://github.com/AtsukaDeus/Suki-Vet" target="_blanck">
                  <Image className="rounded-md transition duration-300 ease-in-out hover:scale-110 shadow-lg shadow-cyan-500/50" src={img_proy_sukivet} alt="imgSukiVet" width={300} height={150}></Image>
              </a>
              <a href="https://github.com/AtsukaDeus/Proyecto_Skyrim"  target="_blanck">
                  <Image className="rounded-md transition duration-300 ease-in-out hover:scale-110 shadow-lg shadow-cyan-500/50" src={img_proy_skyrim} alt="imgSkyProj" width={300} height={150}></Image>
              </a>
              
          </div>
      </div>

      <div className="mt-[150px]">

          <div className="flex text-center justify-center">
            <h1 className="text-2xl font-sans text-center text-neutral-300">Experiencia Laboral</h1>
            <button className="bg-teal-700 hover:bg-teal-500 text-white font-bold py-1 px-4 rounded ml-5" onClick={toggleDiv}>
              {mostrarDiv ? "▼" : "▲"}
            </button>
          </div>


          {!mostrarDiv && (
          <div className="mt-10">
                <p className="text-gray-400">
                  <span className="underline text-lg text-neutral-300">Citröen Chile</span> <br />
                  <span className="text-orange-300">Apoyo administrativo post venta</span> <span className="text-teal-300">- 2023</span> <br />
                  • Crear ordenes de devolución para facturas rechazadas por las compañías
                    de seguros, generando nuevas orden de venta para la refacturación de estas. <br />
                  • Recepcionar y reportar guías de despacho de la entrega de productos
                    vendidos por Citroën. <br />
                  • Regularizar movimiento de inventario de los productos. <br />
                  • Generar ordenes de venta según las solicitudes de compra enviadas por las
                    compañías de seguros. <br />
                  • Realizar notas de crédito de los productos devueltos por los clientes <br /><br />

                  <span className="text-orange-300">Cajero Administrativo</span> <span className="text-teal-300">- 2022</span> <br />
                  • Facturar órdenes de venta, guías de despacho y notas de crédito, recibidas
                    por correo y venta mesón. (Clientes y compañías de seguros). <br />
                  • Conciliar los pagos que realizaban los clientes en sus cuentas de Microsoft Dynamics. <br />
                  • Recepcionar y contabilizar el fondo fijo de la sucursal (rendiciones + dinero en efectivo). <br />
                  • Realizar el cierre de caja con lo trabajado en Excel y Microsoft Dynamics. <br />

                </p>

                <p className="text-gray-400 mt-10">
                  <span className="underline text-lg text-neutral-300">Paris S.A.</span> <br />
                  <span className="text-orange-300">Cajero</span> <span className="text-teal-300">- 2021</span> <br />
                  • Recepcionar pago de clientes: débito, crédito y Cencosud. <br />
                  • Cuadrar cierre de caja, contabilizando váuchers y efectivo. <br />
                </p>

                <p className="text-gray-400 mt-10">
                  <span className="underline text-lg text-neutral-300">Preuniversitario de la Universidad Diego Portales</span> <br />
                  <span className="text-orange-300">Profesor de Matemáticas</span> <span className="text-teal-300">- 2021</span> <br />
                  • Realizar clases de matemáticas preparación PSU. <br />
                  • Ejecutar ensayos PSU a grupo de estudiantes asignados <br />
                </p>

                <p className="text-gray-400 mt-10">
                  <span className="underline text-lg text-neutral-300">Asesorías B y B servicios de contabilidad y abogacía jurídica</span> <br />
                  <span className="text-orange-300">Práctica profesional (Contador nivel medio)</span> <span className="text-teal-300">- 2019</span> <br />
                  • Brindar soporte al área de Contabilidad en la gestión notas de crédito, contabilización de facturas y boletas de honorarios. <br />
                  • Realizar formularios de pagos de impuestos en el SII, y pago de cotizaciones en PreviRed. <br />
                </p>
          </div>

          )}
      </div>
      
      <div>
          <h1 className="mt-20 text-2xl font-sans text-center text-neutral-300">Certificaciones</h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 ">
              <a href="https://drive.google.com/file/d/1-hAXIUR9URW7-ECOq3vsUmfkqChHLvmc/view?pli=1" target="_blanck">
                  <Image className="rounded-md transition duration-300 ease-in-out hover:scale-110 shadow-lg shadow-yellow-400/50" src={img_cert_anali_plan} alt="imgCertAnalisis" width={300} height={150}></Image>
              </a>
              <a href="https://www.udemy.com/certificate/UC-371d9ef6-2cf7-4945-8d3a-098042ad7ce1/"  target="_blanck">
                  <Image className="rounded-md transition duration-300 ease-in-out hover:scale-110 shadow-lg shadow-yellow-400/50" src={img_cert_python} alt="imgCertPython" width={300} height={150}></Image>
              </a>
              <a href="https://www.udemy.com/certificate/UC-55cc796a-7fda-454d-8a89-63c4cd18b02d/"  target="_blanck">
                  <Image className="rounded-md transition duration-300 ease-in-out hover:scale-110 shadow-lg shadow-yellow-400/50" src={img_cert_js} alt="imgCertJs" width={300} height={150}></Image>
              </a>
              
              
          </div>

      </div>
      
      
    
    
    </main>
  )
}

