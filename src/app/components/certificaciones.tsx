import Image from "next/image";

import img_cert_anali_plan from '../../../public/img/certificaciones/certificacion-analisis-planificacion.png';
import img_cert_python from '../../../public/img/certificaciones/certificacion-python.jpg';
import img_cert_js from '../../../public/img/certificaciones/certificacion-javascript.jpg';


export default function CompCertificaciones(){
return(
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
)
}