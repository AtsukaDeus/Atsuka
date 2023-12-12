



export default function CompExperienciaLaboral(){

const company  = 'underline text-lg text-neutral-300';
const position = 'text-orange-300';
const year = 'text-teal-300';


return (
    <div className="mt-[150px]">
        <div className="flex text-center justify-center">
            <h1 className="text-2xl font-sans text-center text-neutral-300">Experiencia Laboral</h1>
        </div>

        <div className="mt-10 md:w-4/5 md:ml-[150px]">

            <p className="text-gray-400">
                <span className={`${company}`}>Usercode SPA</span> <br />
                <span className={`${position}`}>Desarrollador Fullstack</span> <span className={`${year}`}>- 2023</span> <br />
                • Brindar Apoyo en el desarrollo del front-end con Next js de una aplicación web para un contexto educacional. <br />
                • Maquetizar informes desde el back-end en Node js + PptxGenjs, con el objetivo de automatizar la generación de estos. <br />
                • Versionar en GitHub el código desarrollado. <br />
                • Informar en las daylis sobre las tareas realizadas el día anterior + lo pendiente por desarrollar durante el día <br />
            </p>

            <p className="text-gray-400 mt-10">
                <span className={`${company}`}>Citröen Chile</span> <br />
                <span className={`${position}`}>Apoyo administrativo post venta</span> <span className={`${year}`}>- 2023</span> <br />
                • Crear ordenes de devolución para facturas rechazadas por las compañías
                de seguros, generando nuevas orden de venta para la refacturación de estas. <br />
                • Recepcionar y reportar guías de despacho de la entrega de productos
                vendidos por Citroën. <br />
                • Regularizar movimiento de inventario de los productos. <br />
                • Generar ordenes de venta según las solicitudes de compra enviadas por las
                compañías de seguros. <br />
                • Realizar notas de crédito de los productos devueltos por los clientes <br /><br />

                <span className={`${position}`}>Cajero Administrativo</span> <span className={`${year}`}>- 2022</span> <br />
                • Facturar órdenes de venta, guías de despacho y notas de crédito, recibidas
                por correo y venta mesón. (Clientes y compañías de seguros). <br />
                • Conciliar los pagos que realizaban los clientes en sus cuentas de Microsoft Dynamics. <br />
                • Recepcionar y contabilizar el fondo fijo de la sucursal (rendiciones + dinero en efectivo). <br />
                • Realizar el cierre de caja con lo trabajado en Excel y Microsoft Dynamics. <br />

            </p>

            <p className="text-gray-400 mt-10">
                <span className={`${company}`}>Paris S.A.</span> <br />
                <span className={`${position}`}>Cajero</span> <span className={`${year}`}>- 2021</span> <br />
                • Recepcionar pago de clientes: débito, crédito y Cencosud. <br />
                • Cuadrar cierre de caja, contabilizando váuchers y efectivo. <br />
            </p>

            <p className="text-gray-400 mt-10">
                <span className={`${company}`}>Asesorías B y B servicios de contabilidad y abogacía jurídica</span> <br />
                <span className={`${position}`}>Práctica profesional (Contador nivel medio)</span> <span className={`${year}`}>- 2019</span> <br />
                • Brindar soporte al área de Contabilidad en la gestión notas de crédito, contabilización de facturas y boletas de honorarios. <br />
                • Realizar formularios de pagos de impuestos en el SII, y pago de cotizaciones en PreviRed. <br />
            </p>
        </div>
    </div>
)
}