const html = { url: "fab fa-html5", id: "html" };
const css = { url: "fab fa-css3-alt", id: "css" };
const bootstrap = { url: "fab fa-bootstrap", id: "bootstrap" };
const react = { url: "fab fa-react", id: "react" };
const laravel = { url: "fab fa-laravel", id: "laravel" };
const sass = { url: "fab fa-sass", id: "sass" };
const js = { url: "fab fa-js-square", id: "js" };
const angular = { url: "fab fa-angular", id: "angular" };
const typescript = { url: "fab fa-tumblr-square", id: "typescript" };

const projectsData = [
    {
        title: "Countries App",
        description: "Aplicación para visualizar la información de todos los paises consumiendo una Rest Api y manejando el estado con Redux.",
        isApp: true,
        icons: [html, sass, react],
        url: "https://modest-rosalind-51d46c.netlify.app/",
        urlImg: "10.png"
    },
    {
        title: "WeatherApp",
        description: "App para obtener datos sobre el clima de un lugar.",
        isApp: true,
        icons: [typescript, angular],
        url: "https://hardcore-euclid-97fe64.netlify.app/",
        urlImg: "13.png"
    },
    {
        title: "ToDownloadIt",
        description: "WebApp para descargar videojuegos y consultar su información .",
        isApp: true,
        icons: [laravel, sass, js],
        url: "https://serene-mountain-89565.herokuapp.com/",
        urlImg: "8.png"
    }
];

export default projectsData;