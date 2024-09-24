import '../styles/globals.css';
import NavigationBar from 'components/NavigationBar';
import { Footer } from '../components/footer';
import AOSInitializer from 'components/AOSInitializer';

export const metadata = {
    title: 'Latasoft'
};

const RootLayout = ({children}) => { 
    return (
        <html lang="es" className={`scroll-smooth`}>
            <head>
            </head>
            <body className="antialiased text-white min-w-full min-h-screen bg-black flex flex-col ">
                <AOSInitializer />
                <NavigationBar />
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
