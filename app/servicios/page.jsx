'use client';
import { useState } from 'react';
import serviciosIconoA from 'public/images/serviciosIconoA.png';
import serviciosIconoB from 'public/images/serviciosIconoB.png';
import serviciosIconoC from 'public/images/serviciosIconoC.png';
import serviciosIconoD from 'public/images/serviciosIconoD.png';


const Servicios = () => {

    const lChevron = '<';
    const rChevron = '>';

    const [currentServ, setCurrentServ] = useState(0);

    const ServicioItem = ({ index, color, titulo, texto, icono }) => {
        return (
            <div
                data-aos-once="true" data-aos='fade'
                key={index}
                className={` mb-4 md:mx-4 md:mb-0 ${ (currentServ===index || currentServ+1 ===index) ? ' flex flex-col': ' md:hidden' } transition-all ease-in-out duration-300 `}>
                <div className={` flex-grow ${color === 'y' ? 'bg-[rgba(255,255,0,0.8)] text-black' : 'bg-[rgba(97,61,210,0.8)] text-white'} p-6 rounded-t-xl w-80 text-center `}>
                    <img className={` max-h-32 h-full w-auto mx-auto`} src={icono} alt='' />
                    <h3 className={` font-RobotoCondensed font-bold text-xl text-center my-3 `}>{titulo}</h3>
                    <p className={` font-normal text-base leading-snug indent-4 text-justify hyphens-auto font-Raleway `}>{texto}</p>
                </div>
                <p className={` block rounded-b-xl text-center py-3 font-bold text-opacity-30 hover:text-opacity-100 text-sm cursor-pointer ${color === 'y' ? 'bg-[rgba(203,203,77,0.8)] text-black' : 'bg-[rgba(18,13,36,0.8)] text-white'} transform-all ease-in-out duration-300 uppercase `} href='' alt=''>Ver más</p>
            </div>
        )
    }

    const ServiciosData = [
        {   icono: serviciosIconoC,
            color: 'p',
            titulo: 'E-Commerce',
            texto: 'Un e-commerce maximiza ventas, brinda acceso global las 24/7, mejora la experiencia del cliente y optimiza la gestión empresarial.'
        },
        {   icono: serviciosIconoA,
            color: 'y',
            titulo: 'Intranet',
            texto: 'La intranet fortalece la comunicación interna, centraliza la información, facilita la colaboración y aumenta la eficiencia operativa interna de la empresa.'
        },
        {   icono: serviciosIconoD,
            color: 'p',
            titulo: 'Diseño de páginas web',
            texto: 'Una página web amplía la visibilidad, establece credibilidad y facilita la interacción, impulsando la presencia y el éxito comercial.'
        },
        {   icono: serviciosIconoB,
            color: 'y',
            titulo: 'Applicaciones móviles',
            texto: 'Una aplicación móvil potencia la conveniencia, personaliza la interacción, optimiza la movilidad y fortalece la conexión constante, mejorando la satisfacción del usuario.'
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
        <main className={` flex-grow `}>

            <section className={` bg-[hsla(0,0%,16%,1)] lg:px-0 px-4`}>
                <div className={` py-4 max-w-5xl mx-auto `}>
                    <span className={` inline-block `}>Instagram</span>
                    <span className={` inline-block ml-4 `}>LinkedIn</span>
                    <span className={` inline-block ml-4 `}>YouTube</span>
                    <span className={` inline-block ml-4 `}>FaceBook</span>
                </div>
            </section>

            <section className={` bg-[rgba(97,61,210,1)] lg:px-0 px-4 `}>
                <div className={` py-2 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center`}>
                    <div className={` inline-flex flex-grow uppercase text-[rgba(255,255,0,1)] text-3xl font-bold font-Raleway`}>
                        Latasoft</div>
                    <div className={` inline-block font-Raleway text-lg mt-2 md:mt-0 `}>
                        <span className={` inline-block `}>Inicio</span>
                        <span className={` inline-block ml-4 `}>Quiénes somos</span>
                        <span className={` inline-block ml-4 `}>Servicios</span>
                        <span className={` inline-block ml-4 `}>Portafolio</span>
                        <span className={` inline-block ml-4 `}>Contacto</span>
                    </div>
                </div>
            </section>

            <section className={` relative pb-28 transition-all ease-in-out duration-300`} style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 95%)' }}>
                <div className={` absolute top-0 left-0 w-full h-full bg-white  `} style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 95%)' }} />
                <div className={` absolute top-0 left-0 w-full h-full bg-[rgba(97,61,210,0.3)] `} style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 95%)' }} />
                <div className={` absolute top-0 left-0 w-full h-full bg-[url('/images/serviciosbg.jpg')] bg-center bg-cover opacity-10 `} style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 95%)' }} />
                <div className={` relative uppercase text-white font-RobotoCondensed font-bold pt-8 mb-4 max-w-5xl mx-auto text-center text-2xl tracking-widest `}>
                    Nuestros Servicios</div>

                <div className={` relative bg-white bg-opacity-20 py-12 w-full `}>

                    {/* servicios block */}
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
                        
                        {/* left chevrons */} <p onClick={handleLeftClick} className={` hidden md:block text-white text-9xl font-extrabold font-Economica absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer `}>{lChevron}</p>
                        {/* right chevrons */} <p onClick={handleRightClick}  className={` hidden md:block text-white text-9xl font-extrabold font-Economica absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer `}>{rChevron}</p>
                        
                    </div>
                    {/* servicios block end */}

                </div>

            </section>

        </main>
    )

}

export default Servicios;