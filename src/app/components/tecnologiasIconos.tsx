import Image from "next/image";

import icon_bootstrap from '../../../public/img/tecnologias/bootstrapIcon.png';
import icon_cpp from '../../../public/img/tecnologias/cppIcon.png';
import icon_css from '../../../public/img/tecnologias/cssIcon.png';
import icon_django from '../../../public/img/tecnologias/djangoIcon.png';
import icon_html from '../../../public/img/tecnologias/htmlIcon.png';
import icon_ionic from '../../../public/img/tecnologias/ionicIcon.png';
import icon_java from '../../../public/img/tecnologias/javaIcon.png';
import icon_js from '../../../public/img/tecnologias/jsIcon.png';
import icon_node from '../../../public/img/tecnologias/nodeIcon.png';
import icon_oracle from '../../../public/img/tecnologias/oracleDevIcon.png';
import icon_postgres from '../../../public/img/tecnologias/postgresIcon.png';
import icon_python from '../../../public/img/tecnologias/pythonIcon.png';
import icon_react from '../../../public/img/tecnologias/reactIcon.png';
import icon_tailwind from '../../../public/img/tecnologias/tailwindIcon.png';
import icon_angular from '../../../public/img/tecnologias/angularIcon.png';
import icon_docker from '../../../public/img/tecnologias/dockerIcon.png';
import icon_fastapi from '../../../public/img/tecnologias/fastapiIcon.png';
import icon_gitbash from '../../../public/img/tecnologias/gitbashIcon.png';
import icon_github from '../../../public/img/tecnologias/githubIcon.png';
import icon_mysql from '../../../public/img/tecnologias/mysqlIcon.png';
import icon_next from '../../../public/img/tecnologias/nextIcon.png';
import icon_postgresql from '../../../public/img/tecnologias/postgresqlIcon.png';
import icon_postman from '../../../public/img/tecnologias/postmanIcon.png';
import icon_springboot from '../../../public/img/tecnologias/springbootIcon.png';
import icon_typescript from '../../../public/img/tecnologias/typescriptIcon.png';




export default function CompTecnologiasIcons(){

const styleIcons = 'transition delay-75 duration-300 ease-in-out hover:rotate-45 hover:skew-y-12 ';


return(

<div className="mt-20 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-10 mt-10">
    <Image className={`${styleIcons}`} src={icon_python} alt="imgIconoPython" width={50} height={50}></Image>
    <Image className={`${styleIcons}`} src={icon_cpp} alt="imgIconoCpp" width={50} height={50}></Image>
    <Image className={`${styleIcons}`} src={icon_java} alt="imgIconoJava" width={50} height={50}></Image>
    <Image className={`${styleIcons}`} src={icon_html} alt="imgIconoHtml" width={50} height={50}></Image>
    <Image className={`${styleIcons}`} src={icon_css} alt="imgIconoCss" width={50} height={50}></Image>
    <Image className={`${styleIcons}`} src={icon_js} alt="imgIconoJs" width={50} height={50}></Image>
    <Image className={`${styleIcons}`} src={icon_typescript} alt="imgTypeScriptIcon" width={50} height={50}></Image>

    <Image className={`${styleIcons}`} src={icon_django} alt="imgIconoDjango" width={50} height={50}></Image>
    <Image className={`${styleIcons}`} src={icon_node} alt="imgIconoNodejs" width={50} height={50}></Image>
    <Image className={`${styleIcons}`} src={icon_oracle} alt="imgIconoOracleDev" width={50} height={50}></Image>
    <Image className={`${styleIcons}`} src={icon_postgres} alt="imgPostgresIcon" width={50} height={50}></Image>
    <Image className={`${styleIcons}`} src={icon_ionic} alt="imgIonicIcon" width={50} height={50}></Image>
    <Image className={`${styleIcons}`} src={icon_react} alt="imgReacIcon" width={50} height={50}></Image>
    <Image className={`${styleIcons}`} src={icon_bootstrap} alt="imgBootstrapIcon" width={50} height={50}></Image>
    <Image className={`${styleIcons}`} src={icon_tailwind} alt="imgTailwindIcon" width={50} height={50}></Image>
    <Image className={`${styleIcons}`} src={icon_angular} alt="imgAngularIcon" width={50} height={50}></Image>
    <Image className={`${styleIcons}`} src={icon_docker} alt="imgDockerIcon" width={50} height={50}></Image>
    <Image className={`${styleIcons} rounded-full`} src={icon_fastapi} alt="imgFastApiIcon" width={50} height={50}></Image>
    <Image className={`${styleIcons}`} src={icon_gitbash} alt="imgGitBashIcon" width={50} height={50}></Image>
    <Image className={`${styleIcons} rounded-full`} src={icon_github} alt="imgGitHubIcon" width={50} height={50}></Image>
    <Image className={`${styleIcons}`} src={icon_mysql} alt="imgMySqlIcon" width={50} height={50}></Image>
    <Image className={`${styleIcons} bg-white rounded-full`} src={icon_next} alt="imgNextIcon" width={50} height={50}></Image>
    <Image className={`${styleIcons}`} src={icon_postgresql} alt="imgPostgresqlIcon" width={50} height={50}></Image>
    <Image className={`${styleIcons} rounded-full`} src={icon_postman} alt="imgPostManIcon" width={50} height={50}></Image>
    <Image className={`${styleIcons} rounded-full`} src={icon_springboot} alt="imgSpringIcon" width={50} height={50}></Image>

</div>

)
}