"use client"; // Marcar el componente como Client Component
import { useEffect, useState } from 'react';


import icono1 from 'public/images/des-intranet.png';
import icono2 from 'public/images/app.png';
import icono3 from 'public/images/web.png';
import icono4 from 'public/images/dbicon.png';
import icono5 from 'public/images/tienda.png';
import icono6 from 'public/images/e-commerceapp.png';

const Inicio = () => {
  const porquenosotros = [
    { icono: icono1, titulo: 'Intranet' },
    { icono: icono2, titulo: 'Desarrollo de aplicaciones móviles' },
    { icono: icono3, titulo: 'Diseño de páginas web' },
    { icono: icono4, titulo: 'Base de datos' },
    { icono: icono5, titulo: 'Venta y suscripción de software' },
    { icono: icono6, titulo: 'E-commerce' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            text: "Cuando Nicolas se contactó con nosotros para ofrecernos servicios, la verdad vi su motivation y carisma por ayudarnos a mejorar como empresa, le dimos la oportunidad de mostrarnos que podía hacer él por Latasoft, hoy estoy a gusto con los servicios ofrecidos, sigan así y mejor chicos",
            author: "Mauricio",
            company: "Pampa Energía",
            location: "Argentina" },
        {
            text: "Al haber sido uno de sus primeros clientes, no sabía como iban a trabajar, pero después de varios meses trabajando juntos, debo decir que son superprofesionales y nunca fallan con la calidad de sus servicios ",
            author: "Felipe",
            company: "ProyectaCorp",
            location: "Chile" },
        {
            text: "Latasoft y su CEO se han movido siempre en el momento de la creación de startups y captar inversión para los MVP's que desarrollan, eso lo valoramos como institución financiera ",
            author: "Max",
            company: "Merrill Lynch",
            location: "Chile" },
        {
            text: "Es agradable trabajar en conjunto con latasoft en el desarrollo de apps Android/IOS, nos han simplificado nuestro trabajo, 100% recomendados",
            author: "Frederick",
            company: "Mobitech Digital",
            location: "EE.UU"},
        {
            text: "Una de las pocas empresas de Latinoamérica que conocemos, la verdad es grato trabajar con ellos, siempre son claros y transparentes para los procesos de apps y excelentes en calidad/precio en sus servicios",
            author: "Sammuel",
            company: "BuzzCast",
            location: "EE.UU"}    
            
            
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Cambia el slide cada 5 segundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, [slides.length]);

  return (
    <>
      {/* Primera sección con imagen de fondo y contenido */}
      <section className={`relative w-full h-screen`}>
        <div className={`absolute top-0 left-0 w-full h-full`}>
          <div className={`absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-[url('/images/programando.jpg')]`} />
          <div className={`absolute top-0 left-0 w-full h-[80%] bg-black bg-opacity-80`} />
          <div className={`absolute bottom-0 left-0 w-full h-[20%] bg-purple-600 bg-opacity-60`} />
        </div>

        <div className={`relative h-full mt-auto`}>
          <div className={`flex flex-col justify-center items-center text-center text-white h-[80%]`}>
            <h2 className={`text-3xl lg:text-4xl mb-6 transition-all ease-in-out duration-200 font-bold font-RobotoCondensed text-[rgb(255,255,0)]`}>
              Latasoft - Desarrollo Web y Móvil
            </h2>
            <p className={`mt-5 max-w-3xl mx-auto mb-12 text-lg md:text-xl lg:text-2xl text-justify indent-5 hyphens-auto italic font-NotoSerif`}>
              "Tu idea es nuestro código fuente"
            </p>
            <button className={`bg-[#5F3ED9] hover:bg-[#4C34B3] text-white py-2 px-8 rounded-full text-lg`}>
              Saber más
            </button>
          </div>

          <div className={`flex items-center justify-center text-center text-white h-[20%] px-8`}>
            <p className={`mt-5 max-w-4xl mx-auto mb-12 text-lg md:text-xl lg:text-xl indent-5 hyphens-auto`}>
              Marcando huellas de progreso con oficinas y laboratorios desde la V Región hasta la VII Región y en Argentina, Uruguay y Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de servicios */}
      <section className={`relative py-16 px-6`}>
        <div className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/images/equipodetrabajo.jpg')]`} />
        <div className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-30`} />
        <div className={`absolute top-0 left-0 w-full h-full bg-white bg-opacity-65`} />

        <div className={`relative z-10 mx-auto max-w-5xl text-[rgb(55,55,55)]`}>
          <h2 className={`text-[rgb(46,46,46)] text-center text-3xl lg:text-4xl mb-16 transition-all ease-in-out duration-200 font-bold font-RobotoCondensed`}>
            Nuestros servicios
          </h2>

          {!!porquenosotros?.length && (
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center text-lg lg:text-xl font-Roboto`}>
              {porquenosotros.map((item, index) => (
                <div key={index} className={`p-4 bg-slate-50 bg-opacity-20 rounded-lg shadow-md`}>
                  <img src={item.icono.src} alt={item.titulo} className={`mx-auto mb-4 w-14 h-14`} />
                  <h3 className={`font-medium mb-5`}>{item.titulo}</h3>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Nueva sección de "Sobre Nosotros" y "Testimonios" */}
<section className={`relative py-16 px-6`}>
  <div className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/images/empresa-fondo.jpg')]`} />
  <div className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-90`} />
  
  <div className={`relative z-10 mx-auto max-w-5xl text-white`}>
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 text-center text-lg lg:text-xl font-Roboto`}>
      {/* Sobre Nosotros */}
      <div>
        <h3 className={`font-bold text-2xl mb-7 text-[rgb(255,255,0)]`}>Sobre Nosotros</h3>
        <p className={`text-lg`}>
          Latasoft, empresa de desarrollo web y móvil dedicada a ofrecer soluciones tecnológicas innovadoras. 
          Diseñamos sitios web y apps móviles a medida para alcanzar sus objetivos digitales.
        </p>
      </div>

      {/* Testimonios */}
      <div>
        <h3 className={`font-bold mb-7 text-2xl text-[rgb(255,255,0)]`}>Testimonios</h3>
        <p className={`text-lg italic font-NotoSerif`}>
          "Dejando una huella con cada cliente"
        </p>
      </div>
    </div>
  </div>
</section>


{/* Sección del Slider */}
<section className={`relative h-96 `}>

{/* Imagen de fondo del slider */}
<div className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/images/apretondemanos.png')] `} />
{/* Capas de color con opacidad */}
<div className={`absolute top-0 left-0 w-full h-full bg-purple-500 bg-opacity-80`} />
<div className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-50`} />

{/* Contenido del slider */}
{!!slides?.length && (
    <div className={` relative max-w-5xl mx-auto block w-full h-full `}>
        {slides.map((item, index) => (
            <div key={index} className={` absolute top-48 left-0 -translate-y-1/2 text-white text-center font-Roboto text-xl lg:text-2xl ${currentSlide===index ? 'opacity-80': 'opacity-0'} transition-all ease-in-out duration-700 `}>
                <div className={`  w-full h-full  flex flex-col justify-center items-center `}>
                <p className={` mb-6 italic font-NotoSerif px-6 `} style={{ lineHeight: `1.62` }}>&quot;{item.text}&quot;</p>
                <h3 className={` font-bold px-6 `}>{item.author}</h3>
                <p className={` text-base lg:text-lg px-6 `} ><span className={` text-[rgb(255,255,0)] `} >{item.company}</span>, {item.location}.</p>
                </div>
            </div>
        ))}
    </div>
)}
</section>

    </>
  );
};

export default Inicio;
