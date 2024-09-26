"use client"; // Marcar el componente como Client Component
import { useEffect, useState } from 'react';

const Portafolio = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { image: "/images/cliente0.png" },
        { image: "/images/cliente1.jpg" },
        { image: "/images/cliente2.png" },
        { image: "/images/cliente3.png" },
        { image: "/images/cliente4.webp" },
        { image: "/images/cliente5.png" },
        { image: "/images/cliente6.png" },
        { image: "/images/cliente7.png" },
        { image: "/images/cliente8.jpg" },
        { image: "/images/cliente9.png" },
        { image: "/images/cliente10.png" },
        { image: "/images/cliente11.jpg" },
        { image: "/images/cliente12.png" },
        { image: "/images/cliente13.png" },
        { image: "/images/cliente14.png" },
        { image: "/images/cliente15.jpg" },
        { image: "/images/cliente16.jpeg" },
        { image: "/images/cliente17.jpeg" },
        { image: "/images/cliente18.jpeg" },
        { image: "/images/cliente19.jpeg" },
        { image: "/images/cliente20.jpeg" },
        { image: "/images/cliente21.jpeg" }
    ];

    // Nueva constante para el segundo slider
    const projectSlides = [
        { title: "Salud Ya", description: "Salud ya es una aplicación móvil...(ejemplo de función del slider)", image: "/images/Saludya-ejemplo.webp" },
        { title: "Salud Ya2", description: "Salud ya es una aplicación móvil...", image: "/images/Saludya-ejemplo.webp" },
        { title: "Salud Ya3", description: "Salud ya es una aplicación móvil...", image: "/images/Saludya-ejemplo.webp" }
        // Agrega más proyectos según sea necesario
    ];

    // Nueva constante para las tarjetas
    const portafolioCards = [
        { image: "/images/link1.png", description: "Autodraft", link: "https://autodraft.netlify.app" },
        { image: "/images/link2.png", description: "Masisa", link: "https://masisa.com" },
        { image: "/images/link3.png", description: "Soap ayuda", link: "https://soapayuda.cl" },
        { image: "/images/link4.png", description: "Seguro obligatorio", link: "https://Seguroobligatorio.cl" },
        { image: "/images/link5.png", description: "WokPanda", link: "https://Wokpanda.netlify.app" },
        { image: "/images/link6.png", description: "Identity Campus", link: "https://Identitycampus.com" },
        { image: "/images/link7.png", description: "Proyecta", link: "https://www.proyecta.cl/" },
        { image: "/images/link8.png", description: "Sur model", link: "https://Surmodel.cl" },
        { image: "/images/link9.png", description: "Fuerza de ventas", link: "https://fuerzadeventas.netlify.app" },
        { image: "/images/link10.png", description: "Interagro", link: "https://Interagro.cl" },
        { image: "/images/link11.png", description: "Frivasa", link: "https://Frivasa.com.br" },
        { image: "/images/link12.png", description: "Pontofrio", link: "https://Pontofrio.com" },
        { image: "/images/link13.png", description: "Cepcon", link: "https://Cepcon.cl" },
        { image: "/images/link14.png", description: "Impulso 360", link: "https://Impulso-360.cl" },
        { image: "/images/link15.png", description: "Total medios Chile", link: "https://Totalmedioschile.cl" },
        { image: "/images/link16.png", description: "SoftwareYa", link: "https://Softwareya.cl" },
        { image: "/images/link17.png", description: "Impulso Venta", link: "https://Impulsoventa.netlify.app" },
        { image: "/images/link18.png", description: "Tus negocios al día", link: "https://www.tusnegociosaldia.online" },
        { image: "/images/link19.png", description: "Invierte en terrenos", link: "https://invierteenterrenos.onrender.com/" },
        { image: "/images/link20.png", description: "Vimerzion", link: "https://Vimerzion.com" },
        { image: "/images/link21.png", description: "Nobletime", link: "https://nobletime.com" },
        { image: "/images/link22.png", description: "Publicityads", link: "https://publicityads--google-partner--meta-ads--linkedin-1.webnode.cl/" },
        { image: "/images/link23.png", description: "Desarrollatcs", link: "https://www.desarrollatcs.es/" },
        { image: "/images/link24.png", description: "Gruas Rodrigo Rios", link: "https://gruasrodrigorios.netlify.app/" },
        { image: "/images/link25.png", description: "Invchincol", link: "https://invchincol-com.webnode.cl/" },
        { image: "/images/link26.png", description: "Dominion", link: "https://dominion-cs.com/es" },
        { image: "/images/link27.png", description: "Vision Trade Forex", link: "https://visiontradeforex.com/" },
        { image: "/images/link28.png", description: "Ton ORG", link: "https://ton.org/es/toncoin" },
        { image: "/images/link29.png", description: "Estating", link: "https://Estating.es" },
    
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % projectSlides.length); // Cambia el slide del segundo slider
        }, 3000); // Cambia el slide cada 3 segundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, [projectSlides.length]);

    return (
        <>
            {/* Sección "Gracias por confiar en nosotros" */}
            <section className={`flex items-center justify-center h-60 bg-[#292929]`}>
                <h2 className={`text-3xl mt-10 lg:text-4xl transition-all ease-in-out duration-200 font-bold font-RobotoCondensed text-[rgb(255,255,0)]`}>
                    Gracias por confiar en nosotros.
                </h2>
            </section>

            {/* Sección del Slider */}
            <section className={`relative h-56`}>
                <div className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/images/apretondemanos.png')]`} />
                <div className={`absolute top-0 left-0 w-full h-full bg-white bg-opacity-80`} />
                <div className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-20`} />

                {!!slides?.length && (
                    <div className={`relative max-w-4xl mx-auto block w-full h-full`}>
                        {slides.map((item, index) => (
                            <div
                                key={index}
                                className={`absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-auto h-auto ${
                                    currentSlide === index ? 'opacity-100' : 'opacity-0'
                                } transition-opacity ease-in-out duration-700`}
                            >
                                <img
                                    src={item.image}
                                    alt={`Slide ${index + 1}`}
                                    className={`mx-auto w-36 h-auto object-contain`}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* Nueva Sección con los tres textos */}
            <section className={`bg-purple-700 text-white py-12`}>
                <div className={`container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center`}>
                    {/* Texto 1 */}
                    <div className={`flex justify-center items-center`}>
                        <h3 className={`text-2xl lg:text-5xl font-light font-RobotoCondensed`}>
                            +5 Años de experiencia
                        </h3>
                    </div>
                    {/* Texto 2 */}
                    <div className={`flex justify-center items-center`}>
                        <h3 className={`text-2xl lg:text-5xl font-light font-RobotoCondensed`}>
                            +30 Webs creadas
                        </h3>
                    </div>
                    {/* Texto 3 */}
                    <div className={`flex justify-center items-center`}>
                        <h3 className={`text-2xl lg:text-5xl font-light font-RobotoCondensed`}>
                            +10 Apps creadas
                        </h3>
                    </div>
                </div>
            </section>

            <section className={`bg-gray-800 py-12`}>
                <div className={`container mx-auto text-center`}>
                    <h2 className={`text-3xl lg:text-4xl font-bold text-[rgb(255,255,0)] font-RobotoCondensed`}>
                        Proyectos Destacados
                    </h2>
                </div>
            </section>

            {/* Nueva Sección Slider con texto e imagen */}
            <section className={`relative py-40 text-white`}>
                <div className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/images/proyecto-fondo.jpg')]`} />
                <div className={`absolute top-0 left-0 w-full h-full bg-white bg-opacity-20`} />
                <div className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-80`} />

                <div className={`relative max-w-5xl container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}>
                    {/* Columna Izquierda: Título y descripción */}
                    <div className={`flex flex-col items-center md:items-start text-center md:text-left p-4 md:p-0`}>
                        {!!projectSlides?.length && (
                            projectSlides.map((item, index) => (
                                <div key={index} className={`${currentSlide === index ? 'block' : 'hidden'} transition-all ease-in-out duration-700`}>
                                    <h3 className={`text-3xl lg:text-4xl font-bold mb-4 text-yellow-500 font-RobotoCondensed`}>
                                        {item.title}
                                    </h3>
                                    <p className={`text-lg lg:text-xl font-light text-white mb-8`}> {/* Añadir margen inferior para separación */}
                                        {item.description}
                                    </p>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Columna Derecha: Imagen */}
                    <div className={`relative`}>
                        {!!projectSlides?.length && (
                            projectSlides.map((item, index) => (
                                <div
                                    key={index}
                                    className={`absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-auto h-auto ${
                                        currentSlide === index ? 'opacity-100' : 'opacity-0'
                                    } transition-opacity ease-in-out duration-700`}
                                >
                                    <img
                                        src={item.image}
                                        alt={`Imagen del Proyecto ${index + 1}`}
                                        className={`mx-auto w-64 h-auto object-contain`} // Ajustar tamaño de la imagen
                                    />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* Nueva Sección de Tarjetas */}
            <section className={`py-12 bg-slate-50`}>
                <div className={`container mx-auto text-center max-w-7xl`}>
                    <h2 className={`text-3xl lg:text-4xl font-bold text-[rgb(29,29,29)] font-RobotoCondensed mb-8`}>
                        Portafolio
                    </h2>
                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}>
                        {portafolioCards.map((card, index) => (
                            <div key={index} className={`bg-[#292929] rounded-lg shadow-lg overflow-hidden`}>
                                <img src={card.image} alt={`Tarjeta ${index + 1}`} className={`w-full h-96 object-cover`} />
                                <div className={`p-2`}>
                                    <p className={`text-[rgb(255,255,0)] mb-2`}>{card.description}</p>
                                    <a href={card.link} target="_blank" rel="noopener noreferrer" className={`text-white hover:underline`}>
                                        Ver página
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portafolio;
