'use client';
import { useState } from 'react';
import serviciosIconoA from 'public/images/serviciosIconoA.png';
import serviciosIconoB from 'public/images/serviciosIconoB.png';
import serviciosIconoC from 'public/images/serviciosIconoC.png';
import serviciosIconoD from 'public/images/serviciosIconoD.png';

import imagenServicios01 from 'public/images/imagenservicios01.jpg';

import serviciosbgB from 'public/images/serviciosbgB.jpg'


const Servicios = () => {

    const lChevron = '<';
    const rChevron = '>';

    const [currentServ, setCurrentServ] = useState(0);

    const ServicioItem = ({ index, color, titulo, texto, icono }) => {
        return (
            <div
                data-aos-once="true" data-aos='fade'
                key={index}
                className={` mb-4 md:mx-4 md:mb-0 ${(currentServ === index || currentServ + 1 === index) ? ' flex flex-col' : ' md:hidden'} transition-all ease-in-out duration-300 w-80 `}>
                <div className={` flex-grow ${color === 'y' ? 'bg-[rgba(255,255,0,0.8)] text-black' : 'bg-[rgba(97,61,210,0.8)] text-white'} p-6 rounded-t-xl w-full text-center `}>
                    <img className={` max-h-32 h-full w-auto mx-auto`} src={icono} alt='' />
                    <h3 className={` font-RobotoCondensed font-bold text-xl text-center my-3 `}>{titulo}</h3>
                    <p className={` font-normal text-base leading-snug indent-4 text-justify hyphens-auto font-Raleway `}>{texto}</p>
                </div>
                <p className={` block rounded-b-xl text-center py-3 font-bold text-opacity-30 hover:text-opacity-100 text-sm cursor-pointer ${color === 'y' ? 'bg-[rgba(203,203,77,0.8)] text-black' : 'bg-[rgba(18,13,36,0.8)] text-white'} transform-all ease-in-out duration-300 uppercase `} href='' alt=''>Ver más</p>
            </div>
        )
    }

    const ServiciosData = [
        {
            icono: serviciosIconoC,
            color: 'y',
            titulo: 'E-Commerce',
            texto: 'Un e-commerce maximiza ventas, brinda acceso global las 24/7, mejora la experiencia del cliente y optimiza la gestión empresarial.'
        },
        {
            icono: serviciosIconoA,
            color: 'p',
            titulo: 'Intranet',
            texto: 'La intranet fortalece la comunicación interna, centraliza la información, facilita la colaboración y aumenta la eficiencia operativa interna de la empresa.'
        },
        {
            icono: serviciosIconoD,
            color: 'y',
            titulo: 'Diseño de páginas web',
            texto: 'Una página web amplía la visibilidad, establece credibilidad y facilita la interacción, impulsando la presencia y el éxito comercial.'
        },
        {
            icono: serviciosIconoB,
            color: 'p',
            titulo: 'Applicaciones móviles',
            texto: 'Una aplicación móvil potencia la conveniencia, personaliza la interacción, optimiza la movilidad y fortalece la conexión constante, mejorando la satisfacción del usuario.'
        }
    ];


    const ServicioCard = ({ index, titulo, precio, cuotas, imagen, fondocolor, fondoCart }) => {
        return (<>

            <DiagonalSeparador />
            <section key={index} className={` -mt-48 relative transition-all ease-in-out duration-300 `} >

                <div className={`  bg-cover bg-no-repeat absolute top-0 left-0 w-full h-full `} style={{ backgroundImage: `url('${fondoCart.src}')` }}  />
                <div className={` ${fondocolor} bg-opacity-70 absolute top-0 left-0 w-full h-full `} />
                <div className={` backdrop-grayscale-60 absolute top-0 left-0 w-full h-full `} />

                <div className={` relative pb-32 pt-40 w-full  `} >
                    <div className={` relative flex max-w-5xl mx-auto overflow-hidden items-center justify-center transition-all ease-in-out duration-300 `}>
                        <div data-aos-once="true" data-aos='fade' className={` border-solid border-2 border-[#a098b9] border-opacity-30 rounded-2xl font-Raleway p-5 w-80 md:w-[42rem] transition-all ease-in-out duration-300 bg-white bg-opacity-80`} >

                            <div className={` flex flex-col-reverse md:flex-row transition-all ease-in-out duration-300 justify-center items-center px-0 pt-0 md:px-3 md:pt-3 `}>
                                <div className={` w-full md:w-7/12  transition-all ease-in-out duration-300`}>
                                    <h3 className={` block text-2xl md:text-3xl font-medium text-black pr-5 text-left `}>{titulo}</h3>
                                    <div className={` mt-3 pr-6 `}>
                                    { precio && (<p className={` font-bold text-xl md:text-2xl text-[#613DD2] text-left `}>{precio}</p>) }
                                    { cuotas && (<p className={` font-normal text-base md:text-lg text-black text-justify hyphens-auto `}>{cuotas}</p>) }
                                    </div>
                                </div>
                                <p className={` relative w-full md:w-5/12 rounded-lg overflow-hidden mb-6 md:mb-0 transition-all ease-in-out duration-300 aspect-[16/9] `}>
                                    <img className={` absolute top-1/2 left-1/2 w-full h-full object-center object-cover transform -translate-x-1/2 -translate-y-1/2 `} src={imagen.src} alt='' />
                                    <span className={` block w-full h-full absolute top-0 left-0  shadow-inner shadow-black `} /></p>
                            </div>
                            <div className={` block mt-7 transition-all ease-in-out duration-300 `}>
                                <p className={` block `}>
                                    <a className={` block font-medium text-base md:text-lg text-center py-1 bg-[#613DD2] border-solid border-2 border-[#613DD2] rounded-full text-white`} href='' alt=''>Cotizar</a></p>

                                <div className={` block mt-3 font-medium text-base md:text-lg text-center py-1 bg-[#EDE8FB] border-solid border-2 border-[#613DD2] border-opacity-10 rounded-full text-[#613DD2]  `} href='' alt=''>
                                    <p>Ver lo que incluye <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className={` inline w-4 h-auto ml-1 align-baseline rotate-0 transition-all ease-in-out duration-300 `}> <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg></p>
                                    <p></p></div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            </>);
    };

    const ServiciosCards = [
        {
                fondoCart: serviciosbgB,
                fondocolor: 'bg-[#FFFFFF]',
                titulo: 'Diseño web',
                precio: '$ 220.000 IVA incluido',
                cuotas: '(Hasta 3 cuotas)',
                imagen: imagenServicios01 },
            { 
                fondoCart: serviciosbgB,
                fondocolor: 'bg-[#FFFF00]',
                titulo: 'Tienda online',
                precio: '$ 220.000 IVA incluido',
                cuotas: '(Hasta 3 cuotas)',
                imagen: imagenServicios01 },
            { 
                fondoCart: serviciosbgB,
                fondocolor: 'bg-[#000000]',
                titulo: 'Proovedor para agencias de marketing',
                imagen: imagenServicios01 },
            { 
                fondoCart: serviciosbgB,
                fondocolor: 'bg-[#613DD2]',
                titulo: 'Desarrollo de Apps',
                precio: '$3.500.000 IVA incluido',
                cuotas: '(Hasta 5 cuotas $700.000 (IVA incluido)',
                imagen: imagenServicios01 },
            { 
                fondoCart: serviciosbgB,
                fondocolor: 'bg-[#FFFFFF]',
                titulo: 'Venta y suscripción de software',
                cuotas: 'Puedes comprar o suscribir un software como tambien puedes vender o suscribir tu software si lo prefieres.',
                imagen: imagenServicios01 },
            {
                fondoCart: serviciosbgB,
                fondocolor: 'bg-[#FFFF00]',
                titulo: 'Venta de base de datos',
                cuotas: 'Potencia tu negocio con bases de datos precisas y actualizadas de Impulso de Ventas. Accede a información confiable y relevante para alcanzar tus objetivos comerciales. Amplía tu red de clientes y segmenta tus campañas de marketing con precisión y eficacia.',
                imagen: imagenServicios01 }
    ];

    const DiagonalSeparador = ({ }) => {
        return (

            <section className={` relative z-50 -translate-y-20 drop-shadow-[0 4px 4px 4px 8px rgb(0,0,0,0.7)]`} style={{ filter: 'drop-shadow(0 1rem 0.2rem rgb(0,0,0,0.2))' }}>
                <div className={`transition-all ease-in-out duration-300 w-full h-48 bg-[#292929] `} style={{ clipPath: 'polygon(0 0, 100% 40%, 100% 100%, 0 60%)' }} />
            </section>

        );
    };

    // Handle left chevron click
    const handleLeftClick = () => {
        setCurrentServ((prev) => (prev === 0 ? ServiciosData.length - 2 : prev - 2));
    };

    // Handle right chevron click
    const handleRightClick = () => {
        setCurrentServ((prev) => (prev === ServiciosData.length - 2 ? 0 : prev + 2));
    };



    return (
        <main className={` relative flex-grow bg-white `}>

            <section className={` relative bg-[hsla(0,0%,16%,1)] lg:px-0 px-4`}>
                <div className={` py-4 max-w-5xl mx-auto `}>
                    <span className={` inline-block `}>Instagram</span>
                    <span className={` inline-block ml-4 `}>LinkedIn</span>
                    <span className={` inline-block ml-4 `}>YouTube</span>
                    <span className={` inline-block ml-4 `}>FaceBook</span>
                </div>
            </section>

            <section className={` relative bg-[rgba(97,61,210,1)] lg:px-0 px-4 `}>
                <div className={` py-2 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center`}>
                    <h1 className={` inline-flex flex-grow uppercase text-[rgba(255,255,0,1)] text-3xl font-extrabold font-Raleway`}>
                        Latasoft</h1>
                    <div className={` inline-block font-Raleway text-lg mt-2 md:mt-0 `}>
                        <span className={` inline-block `}>Inicio</span>
                        <span className={` inline-block ml-4 `}>Quiénes somos</span>
                        <span className={` inline-block ml-4 `}>Servicios</span>
                        <span className={` inline-block ml-4 `}>Portafolio</span>
                        <span className={` inline-block ml-4 `}>Contacto</span>
                    </div>
                </div>
            </section>

            <section className={` relative pb-32     transition-all ease-in-out duration-300 `} >
                <div className={` absolute top-0 left-0 w-full h-full bg-white  `} />
                <div className={` absolute top-0 left-0 w-full h-full bg-[rgba(97,61,210,0.3)] `} />
                <div className={` absolute top-0 left-0 w-full h-full bg-[url('/images/serviciosbg.jpg')] bg-center bg-cover opacity-30 `} />
                <div className={` relative uppercase text-white font-Roboto font-bold pt-8 mb-4 max-w-5xl mx-auto text-center text-2xl tracking-widest `}>
                    Nuestros Servicios</div>
                <div className={` relative bg-white bg-opacity-40 py-12 `} >
                    <div className={` relative flex max-w-5xl mx-auto overflow-hidden items-center justify-center transition-all ease-in-out duration-300 `}>
                        {!!ServiciosData?.length && (
                            <div className={` flex flex-col md:flex-row md:h-96`}>
                                {ServiciosData.map((item, index) => (
                                    <ServicioItem
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