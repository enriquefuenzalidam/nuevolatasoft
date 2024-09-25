const Portafolio = () => {
    return (
        <>
        {/* Sección: Gracias por confiar */}
  <section className="relative bg-black text-yellow-400 py-16 mt-10">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold">Gracias por confiar en nosotros.</h2>
    </div>
  </section>

  {/* Sección: Slider con imagen de fondo */}
  <section className="relative py-16">
    <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/apretondemanos.png')" }} />
    <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-90" />
    <div className="relative z-10 container mx-auto text-center">
      <div className="swiper-container">
        {/* Aquí va tu componente de slider o carrusel */}
        <h3 className="text-3xl font-bold text-black">WOK PANDA</h3>
      </div>
    </div>
  </section>

  {/* Sección: Estadísticas con imagen de fondo */}
  <section className="relative py-16">
    <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/apretondemanos.png')" }} />
    <div className="absolute top-0 left-0 w-full h-full bg-purple-800 bg-opacity-90" />
    <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
      <div className="p-8">
        <h3 className="text-2xl font-bold">+5 Años de experiencia</h3>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold">+30 Webs creadas</h3>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold">+10 Apps creadas</h3>
      </div>
    </div>
  </section>

        </>
    );
};
export default Portafolio;