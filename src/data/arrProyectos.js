const html={ruta:"fab fa-html5",id:"html"};
const css={ruta:"fab fa-css3-alt",id:"css"};
const bootstrap={ruta:"fab fa-bootstrap",id:"bootstrap"};
const react={ruta:"fab fa-react", id:"react"};
const laravel={ruta:"fab fa-laravel", id:"laravel"};
const sass={ruta:"fab fa-sass", id:"sass"};
const js={ruta:"fab fa-js-square", id:"js"};

const arrProyectos=[
    {
        titulo:"Empresa de construcciones",
        descripcion:"Sitio web moderno para un empresa de construcciones de casas.",
        esApp:false,
        iconos:[html,css,bootstrap],
        ruta:"https://festive-jones-b6407f.netlify.app/",
        rutaImg:"1.png"
    },
    {
        titulo:"App de tareas",
        descripcion:"SPA para gestionar tareas con uso de styled component y Router .",
        esApp:true,
        iconos:[css,react],
        ruta:"https://andrisonapp2.netlify.app",
        rutaImg:"7.png"
    },
    {
        titulo:"ToDownloadIt",
        descripcion:"WebApp para descargar videojuegos y consultar su información .",
        esApp:true,
        iconos:[laravel,sass,js],
        ruta:"https://serene-mountain-89565.herokuapp.com/",
        rutaImg:"8.png"
    },
    {
        titulo:"Escuela de cocina",
        descripcion:"Página web con un diseño agradable.",
        esApp:false,
        iconos:[html,css,bootstrap],
        ruta:"https://practical-neumann-09db9f.netlify.app/",
        rutaImg:"2.png"
    },
    {
        titulo:"CRUD en React",
        descripcion:"SPA para el registro de productos que maneja su estado con Redux y usando Axios para las peticiones.",
        esApp:true,
        iconos:[css,react],
        ruta:"https://andrison1425.github.io/CRUD-REACT/",
        rutaImg:"9.png"
    },
    {
        titulo:"Heroes App",
        descripcion:"SPA para ver información de algunos héroes de Marvel y DC .",
        esApp:true,
        iconos:[css,react],
        ruta:"https://andrisonapp1.netlify.app",
        rutaImg:"6.png"
    },
    {
        titulo:"Empresa de bienes raíces",
        descripcion:"Página moderna y con un carousel para una empresa de bienes raíces.",
        esApp:false,
        iconos:[html,css,bootstrap],
        ruta:"https://bootstrapandrison1.netlify.app/",
        rutaImg:"3.png"
    },/*
    {
        titulo:"Insure landing page",
        descripcion:"Una landing page, responsiva y con grilla de css.",
        esApp:false,
        iconos:[html,css],
        ruta:"https://insurelandingpage1.netlify.app/",
        rutaImg:"4.png"
    },*/
    {
        titulo:"Piedra, papel o tijeras",
        descripcion:"Juego simple de piedra, papel o tijeras .",
        esApp:false,
        iconos:[html,css,js],
        ruta:"proyectos/juego/",
        rutaImg:"5.png"
    }
];

export default arrProyectos;