'use client';
import { useState } from 'react';

import serviciosIconoA from 'public/images/serviciosIconoA.png';
import serviciosIconoB from 'public/images/serviciosIconoB.png';
import serviciosIconoC from 'public/images/serviciosIconoC.png';
import serviciosIconoD from 'public/images/serviciosIconoD.png';
import serviciosIconoE from 'public/images/serviciosIconoE.png';
import serviciosIconoF from 'public/images/serviciosIconoF.png';

import imagenServicios01 from 'public/images/imagenservicios01.jpg';

import serviciosbgB from 'public/images/serviciosbgB.jpg';
import serviciosbgC from 'public/images/serviciosbg.jpg';

import ServicioCard from './ServicioCard';


const Servicios = () => {

    const lChevron = '<';
    const rChevron = '>';

    const [currentServ, setCurrentServ] = useState(0);

    const ServicioItem = ({ id, index, color, titulo, texto, icono }) => {
        return (
            <div
                data-aos-once="true" data-aos='fade'
                key={index}
                className={` mb-4 md:mx-4 md:mb-0 ${(currentServ === index || currentServ + 1 === index) ? ' flex flex-col' : ' md:hidden'} transition-all ease-in-out duration-300 w-80 lg:w-96 `}>
                <div className={` ${color === 'y' ? 'bg-[rgba(255,255,0,0.8)] text-black' : 'bg-[rgba(97,61,210,0.8)] text-white'} rounded-t-xl px-6 pt-6 w-full text-center `}>
                    <img className={` max-h-48 h-full w-auto mx-auto`} src={icono} alt='' />
                    <h3 className={` font-RobotoCondensed font-bold text-xl text-center py-3 `}>{titulo}</h3>
                </div>
                <p className={` ${color === 'y' ? 'bg-[rgba(255,255,0,0.8)] text-black' : 'bg-[rgba(97,61,210,0.8)] text-white'} px-6 pb-6 w-full flex-grow font-normal text-base leading-snug indent-4 text-justify hyphens-auto font-Raleway flex items-center `}>{texto}</p>
                <a className={` block rounded-b-xl text-center py-3 font-bold text-opacity-30 hover:text-opacity-100 text-sm cursor-pointer ${color === 'y' ? 'bg-[rgba(203,203,77,0.8)] text-black' : 'bg-[rgba(18,13,36,0.8)] text-white'} transform-all ease-in-out duration-300 uppercase `} href={'#' + id} alt=''>Ver más</a>
            </div>
        );
    };

    const ServiciosData = [
        {
            id: 'ecommerce',
            icono: serviciosIconoC,
            color: 'y',
            titulo: 'E-Commerce',
            texto: 'Un e-commerce maximiza ventas, brinda acceso global las 24/7, mejora la experiencia del cliente y optimiza la gestión empresarial.'
        },
        {
            id: 'intranet',
            icono: serviciosIconoA,
            color: 'p',
            titulo: 'Intranet',
            texto: 'La intranet fortalece la comunicación interna, centraliza la información, facilita la colaboración y aumenta la eficiencia operativa interna de la empresa.'
        },
        {
            id: 'disegno',
            icono: serviciosIconoD,
            color: 'y',
            titulo: 'Diseño de páginas web',
            texto: 'Una página web amplía la visibilidad, establece credibilidad y facilita la interacción, impulsando la presencia y el éxito comercial.'
        },
        {
            id: 'appmoviles',
            icono: serviciosIconoB,
            color: 'p',
            titulo: 'Applicaciones móviles',
            texto: 'Una aplicación móvil potencia la conveniencia, personaliza la interacción, optimiza la movilidad y fortalece la conexión constante, mejorando la satisfacción del usuario.'
        },
        {
            id: 'ventasubscripcionsoftware',
            icono: serviciosIconoE,
            color: 'y',
            titulo: 'Venta y suscripción de software',
            texto: 'Puedes comprar o suscribir un software como tambien puedes vender o suscribir tu software si lo prefieres.'
        },
        {
            id: 'basededatos',
            icono: serviciosIconoF,
            color: 'p',
            titulo: 'Base de datos',
            texto: 'Potencia tu negocio con bases de datos precisas y actualizadas de Impulso de Ventas. Accede a información confiable y relevante para alcanzar tus objetivos comerciales. Amplía tu red de clientes y segmenta tus campañas de marketing con precisión y eficacia.'
        }
    ];


    const ServiciosCards = [
        {
            id: 'disegno',
            fondoCart: serviciosbgB,
            fondocolor: 'bg-[#FFFFFF]',
            titulo: 'Diseño web',
            precio: '$ 220.000 IVA incluido',
            cuotas: '(Hasta 3 cuotas)',
            imagen: imagenServicios01
        },
        {
            id: 'ecommerce',
            fondoCart: serviciosbgC,
            fondocolor: 'bg-[#FFFF00]',
            titulo: 'Tienda online',
            precio: '$ 220.000 IVA incluido',
            cuotas: '(Hasta 3 cuotas)',
            imagen: imagenServicios01
        },
        {
            id: 'intranet',
            fondoCart: serviciosbgC,
            fondocolor: 'bg-[#000000]',
            titulo: 'Intranet',
            imagen: imagenServicios01
        },
        {
            id: 'appmoviles',
            fondoCart: serviciosbgB,
            fondocolor: 'bg-[#613DD2]',
            titulo: 'Desarrollo de Apps',
            precio: '$3.500.000 IVA incluido',
            cuotas: '(Hasta 5 cuotas $700.000 (IVA incluido)',
            imagen: imagenServicios01
        },
        {
            id: 'ventasubscripcionsoftware',
            fondoCart: serviciosbgB,
            fondocolor: 'bg-[#FFFFFF]',
            titulo: 'Venta y suscripción de software',
            cuotas: 'Puedes comprar o suscribir un software como tambien puedes vender o suscribir tu software si lo prefieres.',
            imagen: imagenServicios01
        },
        {
            id: 'basededatos',
            fondoCart: serviciosbgB,
            fondocolor: 'bg-[#00FFFF]',
            titulo: 'Venta de base de datos',
            cuotas: 'Potencia tu negocio con bases de datos precisas y actualizadas de Impulso de Ventas. Accede a información confiable y relevante para alcanzar tus objetivos comerciales. Amplía tu red de clientes y segmenta tus campañas de marketing con precisión y eficacia.',
            imagen: imagenServicios01
        }
    ];


    // Handle left chevron click
    const handleLeftClick = () => {
        setCurrentServ((prev) => (prev === 0 ? ServiciosData.length - 2 : prev - 2));
    };

    // Handle right chevron click
    const handleRightClick = () => {
        setCurrentServ((prev) => (prev === ServiciosData.length - 2 ? 0 : prev + 2));
    };

    return (
        <main className={` relative flex-grow bg-white mt-16 `}>

            <section className={` relative pb-32 transition-all ease-in-out duration-300 `} >

                <div className={` absolute top-0 left-0 w-full h-full bg-white `} />
                <div className={` absolute top-0 left-0 w-full h-full bg-[rgb(97,61,210)] opacity-30 `} />
                <div className={` absolute top-0 left-0 w-full h-full bg-[url('/images/serviciosbg.jpg')] bg-center bg-cover opacity-30 `} />

                <div className={` relative uppercase text-white font-Roboto font-bold pt-8 mb-4 max-w-5xl mx-auto text-center text-2xl tracking-widest `}>
                    Nuestros Servicios</div>
                <div className={` relative bg-white bg-opacity-40 py-12 `} >
                    <div className={` relative flex max-w-5xl mx-auto overflow-hidden items-center justify-center transition-all ease-in-out duration-300 `}>
                        {!!ServiciosData?.length && (
                            <div className={` flex flex-col md:flex-row md:h-[32rem]`}>
                                {ServiciosData.map((item, index) => (
                                    <ServicioItem
                                        id={item.id}
                                        key={index}
                                        index={index}
                                        icono={item.icono.src}
                                        color={item.color}
                                        titulo={item.titulo}
                                        texto={item.texto} />
                                ))}
                            </div>
                        )}
                        <p onClick={handleLeftClick} className={` hidden md:block text-white text-[16rem] font-extrabold font-Economica absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer `}>{lChevron}</p>
                        <p onClick={handleRightClick} className={` hidden md:block text-white text-[16rem] font-extrabold font-Economica absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer `}>{rChevron}</p>
                    </div>
                </div>
            </section>

            {!!ServiciosCards?.length && (
                <>
                    {ServiciosCards.map((item, index) => (
                        <ServicioCard
                            id={item.id}
                            key={index}
                            fondoCart={item.fondoCart}
                            fondocolor={item.fondocolor}
                            titulo={item.titulo}
                            precio={item.precio}
                            cuotas={item.cuotas}
                            imagen={item.imagen} />
                    ))}
                </>
            )}


        </main>
    )

}

export default Servicios;