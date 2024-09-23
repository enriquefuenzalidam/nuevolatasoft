

const Servicios = () => {

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

        </main>
    )

}

export default Servicios;