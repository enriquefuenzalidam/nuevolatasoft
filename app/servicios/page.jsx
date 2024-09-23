import serviciosIconoA from 'public/images/serviciosIconoA.png';
import serviciosIconoB from 'public/images/serviciosIconoB.png';
import serviciosIconoC from 'public/images/serviciosIconoC.png';
import serviciosIconoD from 'public/images/serviciosIconoD.png';


const Servicios = () => {

    const lChevron = '<';
    const rChevron = '>';

    const ServicioItem = ({ enable, color, titulo, texto }) => {
        return (

            <div className={` mx-4 flex flex-col ${!enable && ' opacity-30 pointer-events-none'} `}>
                <div className={` flex-grow ${color === 'y' ? 'bg-[rgba(255,255,0,0.8)] text-black' : 'bg-[rgba(97,61,210,0.8)] text-white'} p-6 rounded-t-xl w-64 text-center `}>
                    <img className={` max-h-32 h-full w-auto mx-auto`} src={serviciosIconoB.src} alt='' />
                    <h3 className={` font-RobotoCondensed font-bold text-xl text-center my-3 `}>{titulo}</h3>
                    <p className={` font-normal text-base leading-snug indent-4 text-justify hyphens-auto font-Raleway `}>{texto}</p>
                </div>
                <p className={` block rounded-b-xl text-center p-2 font-normal text-xl cursor-pointer  ${color === 'y' ? 'bg-[rgba(203,203,77,0.8)] text-black' : 'bg-[rgba(18,13,36,0.8)] text-white'} transform-all ease-in-out duration-300 `} href='' alt=''>Ver más</p>
            </div>

        )
    }

    const Servicios = [

        {
            color: 'p',
            titulo: 'E-Commerce',
            texto: 'Un e-commerce maximiza ventas, brinda acceso global las 24/7, mejora la experiencia del cliente y optimiza la gestión empresarial.'
        },

        {
            color: 'y',
            titulo: 'Intranet',
            texto: 'La intranet fortalece la comunicación interna, centraliza la información, facilita la colaboración y aumenta la eficiencia operativa interna de la empresa.'
        },

        {
            color: 'p',
            titulo: 'Diseño de páginas web',
            texto: 'Una página web amplía la visibilidad, establece credibilidad y facilita la interacción, impulsando la presencia y el éxito comercial.'
        },

        {
            color: 'y',
            titulo: 'Applicaciones móviles',
            texto: 'Una aplicación móvil potencia la conveniencia, personaliza la interacción, optimiza la movilidad y fortalece la conexión constante, mejorando la satisfacción del usuario.'
        }

    ]


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

            <section className={` relative lg:px-0 px-4 pb-8`}>
                <div className={` absolute top-0 left-0 w-full h-full bg-white  `} />
                <div className={` absolute top-0 left-0 w-full h-full bg-[rgba(97,61,210,0.3)] `} />
                <div className={` absolute top-0 left-0 w-full h-full bg-[url('/images/serviciosbg.jpg')] bg-center bg-cover opacity-10 `} />
                <div className={` relative uppercase text-white font-Raleway font-bold pt-8 mb-4 max-w-5xl mx-auto text-center text-2xl`}>
                    Nuestros Servicios</div>

                <div className={` relative bg-white bg-opacity-20 py-12 w-full `}>

                    {/* chevrons block */}
                    <div className={` relative flex max-w-5xl mx-auto overflow-hidden items-center justify-center `}>
                        {!!Servicios?.length && (
                            <div className={` flex flex-row `}>
                                {Servicios.map((item, index) => (
                                    <ServicioItem
                                        enable
                                        key={index}
                                        color={item.color}
                                        titulo={item.titulo}
                                        texto={item.texto} />
                                ))}
                            </div>
                        )}
                        <p className={` text-white text-9xl font-light font-Economica absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer `}>{lChevron}</p>
                        <p className={` text-white text-9xl font-light font-Economica absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer `}>{rChevron}</p>
                    </div>
                    {/* chevrons block end */}

                </div>

            </section>

        </main>
    )

}

export default Servicios;