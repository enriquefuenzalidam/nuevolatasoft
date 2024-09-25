const Inicio = () => {
    return (
      <>
        <section className={`relative w-full h-screen`}>
          {/* Fondo e imágenes */}
          <div className={`absolute top-0 left-0 w-full h-full`}>
            <div className={`absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-[url('/images/programando.jpg')]`} />
            
            {/* Div superior con 80% de altura y transparencia negra */}
            <div className={`absolute top-0 left-0 w-full h-[80%] bg-black bg-opacity-80`} />
            
            {/* Div inferior con 20% de altura y transparencia púrpura */}
            <div className={`absolute bottom-0 left-0 w-full h-[20%] bg-purple-600 bg-opacity-60`} />
          </div>
  
          {/* Contenido con margen para el menú */}
          <div className={`relative h-full mt-auto`}>
            {/* Contenido del 80% superior */}
            <div className={`flex flex-col justify-center items-center text-center text-white h-[80%]`}>
              <h2 className={`text-3xl lg:text-4xl mb-6 transition-all ease-in-out duration-200 font-bold font-RobotoCondensed text-[rgb(255,255,0)] `}>Latasoft - Desarrollo Web y Móvil</h2>
              <p className={`mt-5 max-w-3xl mx-auto mb-12 text-lg md:text-xl lg:text-2xl text-justify indent-5 hyphens-auto italic font-NotoSerif`}>"Tu idea es nuestro código fuente"</p>
              <button className={`bg-[#5F3ED9] hover:bg-[#4C34B3] text-white py-2 px-8 rounded-full text-lg`}>
                Saber más
              </button>
            </div>
  
            {/* Contenido del 20% inferior */}
            <div className={`flex items-center justify-center text-center text-white h-[20%] px-8`}>
              <p className={`mt-5 max-w-4xl mx-auto mb-12 text-lg md:text-xl lg:text-xl indent-5 hyphens-auto`}>
                Marcando huellas de progreso con oficinas y laboratorios desde la V Región hasta la VII Región y en Argentina, Uruguay y Brasil.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Inicio;
  