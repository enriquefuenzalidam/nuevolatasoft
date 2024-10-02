import '../styles/globals.css';
import { Footer } from '../components/footer';
import AOSInitializer from 'components/AOSInitializer';

export const metadata = {
    title: 'Latasoft'
};

const RootLayout = ({children}) => { 
    return (
        <html lang="es" className={`scroll-smooth`}>
            <head>
                <meta name="description" content="Proovedores. Desarrollo de aplicaciones móviles. Diseño de páginas web. Base de datos. Venta y suscripción de software. E-commerce." />
                <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
            </head>
            <body className="antialiased text-white min-w-full min-h-screen bg-black flex flex-col ">
                <AOSInitializer />
                {children}
                <Footer/>
            </body>
        </html>
    );
};

export default RootLayout;
