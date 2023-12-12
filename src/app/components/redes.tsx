import Image from "next/image";

import icon_linkedin from '../../../public/img/lnkIcon.png';
import icon_github from '../../../public/img/githubIcon.png';


export default function CompRedes(){
return (

    <div className="-mt-10 mb-20 flex justify-end w-full">
        <a href="https://github.com/AtsukaDeus" target="_blank">
        <Image className="mr-5 transition delay-75 duration-300 ease-in-out hover:rotate-45 shadow-lg shadow-indigo-500/50 rounded-full" src={icon_github} alt="imgIconoGitHub" width={50} height={50}></Image>
        </a>
        <a href="https://www.linkedin.com/in/fcomaths/" target="_blank">  
        <Image className="mr-5 transition delay-75 duration-300 ease-in-out hover:rotate-45 shadow-lg shadow-indigo-500/50 rounded-full" src={icon_linkedin} alt="imgIconoLnk" width={50} height={50}></Image>
        </a>
    </div>

)
}