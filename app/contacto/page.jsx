
import serviciosbgB from 'public/images/serviciosbgB.jpg';

const Contacto = () => {
return (<>
        <main className={` relative mt-16 p-16 `}>
            <div className={` absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-[url('/images/serviciosbgB.jpg')] `} />
            <div className={` absolute top-0 left-0 w-full h-full bg-[#00FFFF] bg-opacity-70 `} />
            <div className={` absolute top-0 left-0 w-full h-full backdrop-grayscale-60 `} />
        </main>
    </>)
}
export default Contacto;