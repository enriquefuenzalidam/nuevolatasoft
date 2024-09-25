const Contacto = () => {
    return (
      <>
        <main className={`relative mt-16 p-16`}>
          {/* Fondo e imágenes */}
          <div className={`absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-[url('/images/contactofondo.jpg')]`} />
          <div className={`absolute top-0 left-0 w-full h-full bg-[#232323] bg-opacity-60`} />
          <div className={`absolute top-0 left-0 w-full h-full bg-[#ffffff] bg-opacity-30`} />
          <div className={`absolute top-0 left-0 w-full h-full backdrop-grayscale-60`} />
  
          {/* Contenido */}
          <div className={`relative mx-auto max-w-5xl text-center text-white`}>
            {/* Título y texto descriptivo */}
            <h1 className={`text-4xl font-bold mt-16 mb-8`}>CONTACTO</h1>
            <p className={`mt-4 max-w-3xl mx-auto mb-12`}>
              Potencie su operación con soluciones a medida: en Latasoft hacemos que su proyecto se adapte a las necesidades únicas de su negocio,
              llevándolo al siguiente nivel de eficiencia y productividad.
            </p>
  
            {/* Botón de contacto */}
            <div className={`mt-8 mb-16`}>
              <button className={`bg-[#5F3ED9] hover:bg-[#4C34B3] text-white py-2 px-8 rounded-lg text-lg`}>
                Contáctanos
              </button>
            </div>
  
            {/* Iconos de contacto directo */}
            <div className={`mt-16`}>
              <p className={`text-lg mb-4`}>Hablemos directamente</p>
              <div className={`flex justify-between items-center max-w-sm mx-auto`}>
                <div className={`w-12 h-12`}>
                  <img src="/images/wsp.png" alt="WhatsApp" className={`w-full h-full`} />
                </div>
                <div className={`w-12 h-12`}>
                  <img src="/images/mail.png" alt="Correo" className={`w-full h-full`} />
                </div>
                <div className={`w-12 h-12`}>
                  <img src="/images/instagram.png" alt="Instagram" className={`w-full h-full`} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  };
  
  export default Contacto;
  