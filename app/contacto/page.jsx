import instagramIcon from 'public/images/instagram.png'; 
import whatsappIcon from 'public/images/wsp.png';
import mailIcon from 'public/images/mail.png';
import contactoFondo from 'public/images/contactofondo.jpg';

const Contacto = () => {
    return (
      <>
        <main className={`relative mt-16 overflow-hidden`}>
          {/* Fondo e imágenes */}
          <div className={`absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center bg-[url('/images/contactofondo.jpg')]`} />
          <div className={`absolute top-0 left-0 w-full h-full bg-[#232323] bg-opacity-60`} />
          <div className={`absolute top-0 left-0 w-full h-full bg-[#ffffff] bg-opacity-30`} />
          <div className={`absolute top-0 left-0 w-full h-full backdrop-grayscale-60`} />

          {/* Contenido */}
          <section className={`relative mx-auto max-w-5xl py-24 text-center text-white`}>
            {/* Título y texto descriptivo */}
            <h2 className={`text-3xl lg:text-4xl font-bold font-RobotoCondensed`}>Contacto</h2>
            <p className={`mt-4 max-w-3xl mx-auto mb-12 text-lg md:text-xl lg:text-2xl text-justify indent-5 hyphens-auto`} style={{ lineHeight: 1.86 }}>
              Potencie su operación con soluciones a medida: en Latasoft hacemos que su proyecto se adapte a las necesidades únicas de su negocio, llevándolo al siguiente nivel de eficiencia y productividad.
            </p>
            {/* Botón de contacto */}
            <div className={`mt-8 mb-16`}>
              <button className={`bg-[#5F3ED9] hover:bg-[#4C34B3] text-white py-2 px-8 rounded-full text-lg transition-all ease-in-out duration-300`}>
                Contáctanos
              </button>
            </div>

            {/* Iconos de contacto directo */}
            <div className={`mt-16`}>
              <h3 className={`text-3xl lg:text-4xl font-bold mt-16 mb-8 font-RobotoCondensed`}>Hablemos directamente</h3>
              <div className={`flex justify-between items-center max-w-3xl mx-auto`}>
                <div>
                  <img src={whatsappIcon.src} alt="WhatsApp" className={`w-auto h-16`} />
                </div>
                <div className={`text-white`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`w-auto h-16`} viewBox="0 0 512 512">
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                  </svg>
                </div>
                <div>
                  <img src={instagramIcon.src} alt="Instagram" className={`w-auto h-16`} />
                </div>
              </div>
            </div>
          </section>

          {/* Nueva sección de contacto */}
          <section className={`relative bg-[#292929] py-16`}>
            <div className={`max-w-5xl mx-auto flex flex-wrap`}>
              {/* Columna izquierda - Imagen y textos de contacto */}
              <div className={`w-full md:w-1/2 p-4`}>
                <img src="/images/mapa-mientras.jpg" alt="Imagen de contacto" className={`w-full h-auto`} />
              </div>
              <div className={`w-full md:w-1/2 p-4 text-white`}>
                <div className={`flex items-center mb-4`}>
                  <img src="/images/location.png" alt="Localización" className={`w-8 h-8 mr-2`} />
                  <span>
                    Casa Matriz - 12 Nte 785 of 406, Viña del Mar, Chile.<br />
                    Oficina Santiago: Los Jesuitas 881, Providencia, Chile.<br />
                    Oficina Sto Domingo: Los Crisamentos 146, Sto. Domingo, Chile.
                  </span>
                </div>
                <div className={`flex items-center mb-4`}>
                  <img src={whatsappIcon.src} alt="WhatsApp" className={`w-8 h-8 mr-2`} />
                  <span>+56 9 4297 8432<br />+56 9 9127 5137</span>
                </div>
                <div className={`flex items-center`}>
                  <img src={mailIcon.src} alt="Email" className={`w-8 h-8 mr-2`} />
                  <span>latasoftchile@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Fila de banderas */}
            <div className={`flex justify-center mt-8`}>
              <div className={`mx-auto w-24 h-auto bg-[url('/images/b-ch.webp')] bg-cover bg-center`} alt="Bandera 1"></div>
              <div className={`mx-auto w-24 h-auto bg-[url('/images/b-pe.png')] bg-cover bg-center`} alt="Bandera 2"></div>
              <div className={`mx-auto w-24 h-auto bg-[url('/images/b-mx.png')] bg-cover bg-center`} alt="Bandera 3"></div>
              <div className={`mx-auto w-24 h-auto bg-[url('/images/b-br.webp')] bg-cover bg-center`} alt="Bandera 4"></div>
              <div className={`mx-auto w-24 h-16 bg-[url('/images/b-es.png')] bg-cover bg-center`} alt="Bandera 5"></div>
            </div>
          </section>
        </main>
      </>
    );
};

export default Contacto;
