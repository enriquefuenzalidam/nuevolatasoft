
export function Footer() {
    return (
        <footer className={' relative '}>
            <section className={` bg-gray-800 px-8 lg:px-0 `}>
                <div className={` max-w-5xl mx-auto flex flex-col md:flex-row font-Roboto py-12 md:py-8 gap-8 md:gap-16 `}>
                    <div className={` w-full md:w-2/3 opacity-90 flex flex-col justify-center`} >

                        <h2 className={` text-xl md:text-2xl font-bold mb-5 text-left `} >Desarrollamos eso que tienes en mente, <br className={` inline md:hidden `} />contáctanos.</h2>
                        <p className={` text-base md:text-lg font-normal indent-5 text-justify `}>En Latasoft, nos dedicamos apasionadamente a eso que tienes en mente. Nuestro compromiso es impulsar la innovación a través de soluciones tecnológicas excepcionales. Con un equipo de expertos en desarrollo, nos esforzamos por transformar ideas en realidades digitales. Descubre el poder de la programación con nosotros y lleva tu visión al siguiente nivel. Conecta con nosotros para construir el futuro juntos.</p>

                    </div>
                    <div className={` w-full md:w-1/3 flex-col justify-center `} >

                        <h2 className={` text-base md:text-lg font-bold mb-1 text-left opacity-90 `} >Casa Matriz - Oficina Comercial</h2>
                        <address className={` not-italic text-base md:text-lg font-normal opacity-90 `}>
                            Los Crisantemos 146, Santo Domingo.<br/>
                            Viña del Mar - Valparaíso
                        </address>
                        <h2 className={` text-base md:text-lg font-bold mt-8 mb-1 text-left opacity-90 `} >Teléfonos</h2>
                        <address className={` not-italic text-base md:text-lg font-normal opacity-90 `}>
                            <a href="tel:+56942978432">+569 4297 8432</a><br/>
                            <a href="tel:+56991275137">+569 9127 5137</a>
                        </address>
                        <h2 className={` text-base md:text-lg font-bold mt-8  mb-1 text-left opacity-90 `} >Correo</h2>
                        <address className={` not-italic text-base md:text-lg font-normal opacity-90 `}>
                            <a href="mailto:latasoftchile@gmail.com">latasoftchile@gmail.com</a>
                        </address>
                        <h2 className={` text-base md:text-lg font-bold mt-8 mb-1 text-left opacity-90 `} >Horario</h2>
                        <address className={` not-italic text-base md:text-lg font-normal opacity-90 `}>
                            Lunes a viernes de<br/>
                            9:00 a 18:00 horas.
                        </address>

                    </div>
                </div>
            </section>
            <section className={` bg-[#FFFF00] text-center px-8 lg:px-0 `}>
                <p className={` max-w-5xl mx-auto py-4 text-left text-black text-opacity-80 font-normal text-lg lg:text-xl font-Roboto `}>©2024 <span className={` uppercase font-bold `}>Latasoft</span> Chile</p>
            </section>
        </footer>
    );
};
