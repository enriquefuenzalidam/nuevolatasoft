
import Link from 'next/link';
import Scrollhandling from 'components/Scrollhandling';

const navItems = [
  { linkText: 'Inicio', href: '/' },
  { linkText: 'Servicios', href: '/servicios' },
  { linkText: 'Portafolio', href: '/portafolio' },
  { linkText: 'Quienes somos', href: '/nosotros' },
  { linkText: 'Contacto', href: '/contacto' }
];

const NavigationBar = () => {
  return (
    <nav className={`  z-50 w-full fixed top-0 left-0 `}>
      
      <div className={` mx-auto px-8 w-full py-3 bg-[rgb(97,61,210)] bg-opacity-40 border-b-2 border-solid border-white border-opacity-30 backdrop-blur-md h-16 overflow-hidden hover:overflow-visible hover:h-auto hover:md:overflow-hidden hover:md:h-16 `}>

      {!!navItems?.length && (
        <ul className={` max-w-5xl w-full h-full mx-auto flex flex-col md:flex-row gap-x-8 items-start md:items-center justify-start  md:justify-center `}>
          <li className={` block md:inline-block mb-3 md:mb-0 mt-1 md:mt-0 `}>
            <h1 className={` cursor-default uppercase text-[rgba(255,255,0,1)] text-2xl md:text-3xl font-extrabold font-Raleway `}>
              Latasoft</h1>
          </li>
          {navItems.map((item, index) => (
            <li data-aos-once='true' data-aos='fade' key={index} className={` block w-full md:w-min md:inline-block my-3 md:my-0 border-b-[1px] border-solid border-opacity-0 hover:border-opacity-70 border-white `}>
              <Link href={item.href}
                className="block md:w-min text-nowrap font-Raleway text-white  text-lg md:text-base lg:text-lg opacity-80 font-medium no-underline transition-all ease-in-out duration-300">
                {item.linkText}
              </Link>
            </li>
          ))}
        </ul>
      )}
      </div>
    </nav>
  );
};

export default NavigationBar;