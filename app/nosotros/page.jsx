"use client"; // Marcar el componente como Client Component

import { useEffect, useState } from 'react';
const Nosotros = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            text: "Cuando Nicolas se contactó con nosotros para ofrecernos servicios, la verdad vi su motivation y carisma por ayudarnos a mejorar como empresa, le dimos la oportunidad de mostrarnos que podía hacer él por Latasoft, hoy estoy a gusto con los servicios ofrecidos, sigan así y mejor chicos",
            author: "Mauricio",
            company: "Pampa Energía",
            location: "Argentina",
        },
        {
            text: "Latasoft ha sido un socio invaluable en nuestro crecimiento. Su dedicación y atención al detalle han hecho la diferencia en nuestros proyectos.",
            author: "Laura",
            company: "Tech Innovators",
            location: "Chile",
        },
        {
            text: "Gracias a Latasoft, hemos logrado implementar soluciones tecnológicas que nos han permitido optimizar nuestros procesos y mejorar la experiencia del cliente.",
            author: "Javier",
            company: "Soluciones Avanzadas",
            location: "Perú",
        },
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Cambia el slide cada 5 segundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, []);

    return (
        <>
            <main className={`relative mt-16`}>

                {/* Sección ¿Quiénes somos? */}
                <section className={`bg-gray-800 text-white py-16 px-6`}>
                    <h2 className={`text-yellow-400 text-center text-4xl font-bold mb-4`}>¿Quiénes somos?</h2>
                    <p className={`text-center max-w-3xl mx-auto text-lg leading-relaxed`}>
                        Somos una empresa de software factory y de aplicaciones centrada en y para los clientes,
                        fundada en el 2021 en la ciudad de Viña Del Mar. Latasoft se creó para facultar a las empresas 
                        a que trabajen con mayor agilidad, mejor y con una tecnología más responsiva y cercana al usuario.
                    </p>
                </section>

                {/* Sección ¿Por qué nosotros? */}
                <section className={`relative py-16 px-6`}>

                    {/* Imagen de fondo */}
                    <div
                        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat`}
                        style={{
                            backgroundImage: `url('/images/equipodetrabajo.jpg')`,
                        }}
                    />
                    {/* Capa de color con opacidad */}
                    <div className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-70`} />
                    <div className={`absolute top-0 left-0 w-full h-full bg-white bg-opacity-40`} />

                    {/* Contenido superpuesto */}
                    <div className={`relative z-10 mx-auto max-w-5xl text-white`}>
                        <h2 className={`text-white text-center text-4xl font-bold mb-8`}>¿Por qué nosotros?</h2>
                        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 text-center`}>
                            <div>
                                <img src="/images/icono1.png" alt="Escalabilidad" className={`mx-auto mb-4`} style={{ width: '50px' }} />
                                <h3 className={`font-semibold`}>Mayor Escalabilidad y Flexibilidad</h3>
                                <p>Para tu negocio.</p>
                            </div>
                            <div>
                                <img src="/images/icono2.png" alt="Equipo de desarrollo" className={`mx-auto mb-4`} style={{ width: '50px' }} />
                                <h3 className={`font-semibold`}>Equipo de desarrollo especializado</h3>
                                <p>Siempre a tu servicio.</p>
                            </div>
                            <div>
                                <img src="/images/icono6.png" alt="Ciberseguridad" className={`mx-auto mb-4`} style={{ width: '50px' }} />
                                <h3 className={`font-semibold`}>Mayor Tranquilidad en Ciberseguridad</h3>
                                <p>Protegiendo tus datos.</p>
                            </div>
                            <div>
                                <img src="/images/icono3.png" alt="Calidad y control" className={`mx-auto mb-4`} style={{ width: '50px' }} />
                                <h3 className={`font-semibold`}>Servicios de Calidad y control</h3>
                                <p>De calidad garantizada.</p>
                            </div>
                            <div>
                                <img src="/images/icono7.png" alt="Gestión de proyectos" className={`mx-auto mb-4`} style={{ width: '50px' }} />
                                <h3 className={`font-semibold`}>Una mejor gestión de proyectos</h3>
                                <p>Adaptándonos a tus necesidades.</p>
                            </div>
                            <div>
                                <img src="/images/icono9.png" alt="Soporte postventa" className={`mx-auto mb-4`} style={{ width: '50px' }} />
                                <h3 className={`font-semibold`}>Soporte y Mantenimiento</h3>
                                <p>Postventa garantizada.</p>
                            </div>
                            <div>
                                <img src="/images/icono4.png" alt="Eficiencia y productividad" className={`mx-auto mb-4`} style={{ width: '50px' }} />
                                <h3 className={`font-semibold`}>Mayor Eficiencia y Productividad</h3>
                                <p>Para tu empresa.</p>
                            </div>
                            <div>
                                <img src="/images/iconoC.png" alt="Reducción de riesgos" className={`mx-auto mb-4`} style={{ width: '50px' }} />
                                <h3 className={`font-semibold`}>Reducción de Riesgos y Costos</h3>
                            </div>
                            <div>
                                <img src="/images/icono5.png" alt="Enfoque en solución" className={`mx-auto mb-4`} style={{ width: '50px' }} />
                                <h3 className={`font-semibold`}>Nos enfocamos en tu solución</h3>
                            </div>
                            <div>
                                <img src="/images/icono10.png" alt="Enfoque en el negocio" className={`mx-auto mb-4`} style={{ width: '50px' }} />
                                <h3 className={`font-semibold`}>Enfócate en tu negocio principal</h3>
                            </div>
                            <div>
                                <img src="/images/icono11.png" alt="Ahorrar tiempo" className={`mx-auto mb-4`} style={{ width: '50px' }} />
                                <h3 className={`font-semibold`}>Te Ahorramos tiempo y dolores de cabeza</h3>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={`bg-gray-800 text-white py-16 px-6`}>
                    <h2 className={`text-yellow-400 text-center text-4xl font-bold mb-4`}>Innovación y Expansión para un Futuro Conocido</h2>
                    <p className={`text-center max-w-3xl mx-auto text-lg leading-relaxed`}>
                    La vision del equipo de Latasoft es creer que cuando la tecnología se centra en las personas, maximiza el impacto de la organización en su industria, y en la sociedad en general. Nuestras flechas apuntan a ser siempre un referente de nuestra industria y con mirada de expansion, por lo que siempre trabajamos para que nuestros clientes logren sus objetivos, ya que sus objetivos se vuelven nuestros objetivos tambien. Como dice nuestra frase "Por el mundo que no conocemos, pero conoceremos, Latasoft".
                    </p>
                </section>

                {/* Sección del Slider */}
                <section className={`relative py-16`}>
                    {/* Imagen de fondo del slider */}
                    <div
                        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat`}
                        style={{
                            backgroundImage: `url('/images/apretondemanos.png')`,
                        }}
                    />
                    {/* Capas de color con opacidad */}
                    <div className={`absolute top-0 left-0 w-full h-full bg-purple-500 bg-opacity-80`} />
                    <div className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-50`} />

                    {/* Contenido del slider */}
                    <div className={`relative z-10 mx-auto max-w-5xl text-white text-center py-16`}>
                        <p className={`text-lg mb-4`}>{slides[currentSlide].text}</p>
                        <h3 className={`font-bold`}>{slides[currentSlide].author}</h3>
                        <p>{slides[currentSlide].company}</p>
                        <p>{slides[currentSlide].location}</p>
                    </div>
                </section>

                
            </main>
        </>
    );
};

export default Nosotros;
