import Image from "next/image";
import img_proy_skyrim from '../../../public/img/proyectos/ImgSkyProj.png';
import img_proy_sukivet from '../../../public/img/proyectos/imgSukiVet.png';


export default function CompProyectos(){

return(
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
)
}