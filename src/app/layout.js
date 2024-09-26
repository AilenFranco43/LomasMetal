import '../styles/globals.css';
import Header from '../components/header/Header.jsx';

export const metadata = {
  title: 'Lomas Metal',
  description: 'Bienvenido a Lomas Metal, tu catálogo en línea de ferretería multirubro en Argentina. Aquí encontrarás una amplia variedad de productos, desde herramientas de jardinería hasta artículos de electricidad.',
  keywords: 'ferretería, herramientas, materiales de construcción, artículos de jardinería',
  robots: 'index, follow',

}


export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

         {/* Favicons and icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/img/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/icons/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/img/icons/safari-pinned-tab.svg" color="#e64b35" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

         {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin ="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      </head>

      <body>
        <Header/>
        {children}</body>
    </html>
  )
}
