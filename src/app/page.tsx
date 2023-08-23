'use client'

import Image from "next/image";
import { useState } from "react";



export default function Home() {
  const [mostrarDiv, setMostrarDiv] = useState(false);

  const toggleDiv = () => {
    setMostrarDiv(!mostrarDiv);
  };
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="-mt-10 mb-20 flex justify-end w-full">
        <a href="https://github.com/AtsukaDeus" target="_blank">
          <Image className="mr-5 transition delay-75 duration-300 ease-in-out hover:rotate-45 shadow-lg shadow-indigo-500/50 rounded-full" src={"/img/lnkIcon.png"} alt="imgIconoLnk" width={50} height={50}></Image>
        </a>
        <a href="https://www.linkedin.com/in/fcomaths/" target="_blank">  
          <Image className="mr-5 transition delay-75 duration-300 ease-in-out hover:rotate-45 shadow-lg shadow-indigo-500/50 rounded-full" src={"/img/githubIcon.png"} alt="imgIconoGitHub" width={50} height={50}></Image>
        </a>
      </div>
      
      <h1 className="text-2xl font-sans text-center text-white">
        Hola que tal!, mi nombre es <span className="text-teal-300">Francisco Argandoña</span>
        , bienvenido a mi <span className="text-fuchsia-400">Portafolio</span> 🖥️🖱️
      </h1>

      <div className="relative mt-10 group">
        <Image className="rounded-full transition duration-300 ease-in-out transform group-hover:-translate-x-5 border-2 border-zinc-500 group-hover:border-cyan-400" src={"/img/lnkphoto.png"} alt="imgFrancisco" width={300} height={300} />

        <div className="right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 pr-10 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
          <div className="flex mb-2">
              <Image className="mr-5" src={"/img/gmailIcon.png"} alt="gmailIcon" width={25} height={20}></Image><span className="text-neutral-300">fcomaths@gmail.com</span><br />
          </div>
          <div className="flex">
              <Image className="mr-5" src={"/img/wspIcon.png"} alt="wspIcon" width={25} height={20}></Image><span className="text-neutral-300">+569 2020 8745</span>
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
        <Image className="transition delay-75 duration-300 ease-in-out hover:rotate-180 hover:skew-y-12" src={"/img/tecnologias/pythonIcon.png"} alt="imgIconoPython" width={50} height={50}></Image>
        <Image className="transition delay-75 duration-300 ease-in-out hover:rotate-180 hover:skew-y-12" src={"/img/tecnologias/djangoIcon.png"} alt="imgIconoDjango" width={50} height={50}></Image>
        <Image className="transition delay-75 duration-300 ease-in-out hover:rotate-180 hover:skew-y-12" src={"/img/tecnologias/cppIcon.png"} alt="imgIconoCpp" width={50} height={50}></Image>
        <Image className="transition delay-75 duration-300 ease-in-out hover:rotate-180 hover:skew-y-12" src={"/img/tecnologias/javaIcon.png"} alt="imgIconoJava" width={50} height={50}></Image>
        <Image className="transition delay-75 duration-300 ease-in-out hover:rotate-180 hover:skew-y-12" src={"/img/tecnologias/htmlIcon.png"} alt="imgIconoHtml" width={50} height={50}></Image>
        <Image className="transition delay-75 duration-300 ease-in-out hover:rotate-180 hover:skew-y-12" src={"/img/tecnologias/cssIcon.png"} alt="imgIconoCss" width={50} height={50}></Image>
        <Image className="transition delay-75 duration-300 ease-in-out hover:rotate-180 hover:skew-y-12" src={"/img/tecnologias/jsIcon.png"} alt="imgIconoJs" width={50} height={50}></Image>
        <Image className="transition delay-75 duration-300 ease-in-out hover:rotate-180 hover:skew-y-12" src={"/img/tecnologias/nodeIcon.png"} alt="imgIconoNodejs" width={50} height={50}></Image>
        <Image className="transition delay-75 duration-300 ease-in-out hover:rotate-180 hover:skew-y-12" src={"/img/tecnologias/oracleDevIcon.png"} alt="imgIconoOracleDev" width={50} height={50}></Image>
        <Image className="transition delay-75 duration-300 ease-in-out hover:rotate-180 hover:skew-y-12" src={"/img/tecnologias/postgresIcon.png"} alt="imgPostgresIcon" width={50} height={50}></Image>
        <Image className="transition delay-75 duration-300 ease-in-out hover:rotate-180 hover:skew-y-12" src={"/img/tecnologias/ionicIcon.png"} alt="imgIonicIcon" width={50} height={50}></Image>
        <Image className="transition delay-75 duration-300 ease-in-out hover:rotate-180 hover:skew-y-12" src={"/img/tecnologias/reactIcon.png"} alt="imgReacIcon" width={50} height={50}></Image>
        <Image className="transition delay-75 duration-300 ease-in-out hover:rotate-180 hover:skew-y-12" src={"/img/tecnologias/bootstrapIcon.png"} alt="imgBootstrapIcon" width={50} height={50}></Image>
        <Image className="transition delay-75 duration-300 ease-in-out hover:rotate-180 hover:skew-y-12" src={"/img/tecnologias/tailwindIcon.png"} alt="imgTailwindIcon" width={50} height={50}></Image>
      </div>
      
      <div className="mt-20">
          <h1 className="text-2xl font-sans text-center text-neutral-300">Proyectos que he desarrollado </h1><br />
          <p className="text-neutral-300 italic">Por el momento llevo dos, pero habrán más con el tiempo...
          <span className="ml-2 text-indigo-400"> ¡Al clickear podrás ver el código en github!</span>
          </p>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 ">
              <a href="https://github.com/AtsukaDeus/Suki-Vet" target="_blanck">
                  <Image className="rounded-md transition duration-300 ease-in-out hover:scale-110 shadow-lg shadow-cyan-500/50" src={"/img/proyectos/imgSukiVet.png"} alt="imgSukiVet" width={300} height={150}></Image>
              </a>
              <a href="https://github.com/AtsukaDeus/Proyecto_Skyrim"  target="_blanck">
                  <Image className="rounded-md transition duration-300 ease-in-out hover:scale-110 shadow-lg shadow-cyan-500/50" src={"/img/proyectos/imgSkyProj.png"} alt="imgSkyProj" width={300} height={150}></Image>
              </a>
              
          </div>
      </div>

      <div className="mt-[150px]">

          <div className="flex text-center justify-center">
            <h1 className="text-2xl font-sans text-center text-neutral-300">Experiencia Laboral</h1>
            <button className="bg-teal-700 hover:bg-teal-500 text-white font-bold py-1 px-4 rounded ml-5" onClick={toggleDiv}>
              {mostrarDiv ? "￬" : "↑"}
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
                  <Image className="rounded-md transition duration-300 ease-in-out hover:scale-110 shadow-lg shadow-yellow-400/50" src={"/img/certificaciones/certificacion-analisis-planificacion.png"} alt="imgCertAnalisis" width={300} height={150}></Image>
              </a>
              <a href="https://www.udemy.com/certificate/UC-371d9ef6-2cf7-4945-8d3a-098042ad7ce1/"  target="_blanck">
                  <Image className="rounded-md transition duration-300 ease-in-out hover:scale-110 shadow-lg shadow-yellow-400/50" src={"/img/certificaciones/certificacion-python.jpg"} alt="imgCertPython" width={300} height={150}></Image>
              </a>
              
              
          </div>

      </div>
      
      
    
    
    </main>
  )
}

