import React, { useState } from 'react'
import projectsData from '../data/projectsData'
const Imagen = require("../images/screen.jpeg");
const Imagen2 = require("../images/screen2.jpeg");
const Imagen3 = require("../images/screen3.jpeg");
const Imagen4 = require("../images/screen4.jpeg");
const Imagen5 = require("../images/screen5.png");
const Imagen6 = require("../images/screen6.png");

const Projects = ({ reference }: { reference: React.RefObject<HTMLElement> }) => {

    return (
        <section
            className="proyectos__cont-proyectos section"
            id="portafolioE"
            data-id="seccion2"
            ref={reference}
        >
            <div className="cont">

                <h2 className="activo" >
                    Portafolio
                </h2>

                <div className="proyectos__cont-prin-app">
                    <div className="cont-app-img">
                        <img src={Imagen} alt="Puzeos Screen" id="img-sec" />
                        <img src={Imagen2} alt="Puzeos Screen" />
                    </div>
                    <div className="cont-info">
                        <h2>Chanime</h2><br />
                        <h4>Características</h4>
                        <ul>
                            <li>Envío de mensajes de texto, voz, imágenes, audio, videos y documentos.</li>
                            <li>Datos y archivos se guardan de manera local para el uso sin conexión.</li>
                            <li>Sistema de registro e inicio de sesión.</li>
                            <li>Notificaciones push.</li>
                            <li>Perfiles de usuario.</li>
                            <li>Modo oscuro y multidiomas.</li>
                            <li>Permite bloquear usuarios o eliminar chats.</li>
                            <li>Buscador de mensajes.</li>
                        </ul>
                        <h4>Tecnologías</h4>
                        <div className="cont-tec">
                            <li id="ionic">
                                <svg><use href="#ico-ionic"></use></svg>
                                <h4>Ionic</h4>
                            </li>
                            <li id="angular">
                                <i className="fab fa-angular" id="angular"></i>
                                <h4>Angular</h4>
                            </li>
                            <li id="typescript">
                                <svg><use href="#ico-typescript"></use></svg>
                                <h4>TypeScript</h4>
                            </li>
                            <li id="firebase">
                                <svg><use href="#ico-firebase"></use></svg>
                                <h4>Firebase</h4>
                            </li>
                        </div>

                        <a
                            href="http://localhost:3000/chanime.apk"
                            target="puzeos"
                            className="boton"
                        >
                            Descargar aplicación móvil (Android)
                        </a>
                    </div>
                </div>

                <div className="proyectos__cont-prin-app">
                    <div className="cont-app-img">
                        <img src={Imagen3} alt="Musicalia Screen" id="img-sec" />
                        <img src={Imagen4} alt="Musicalia Screen" />
                    </div>
                    <div className="cont-info">
                        <h2>Musicalia</h2><br />
                        <h4>Características</h4>
                        <ul>
                            <li>Crea listas de reproducción y compartelas.</li>
                            <li>Reproduce listas de canciones online y en segundo plano.</li>
                            <li>Guarda tus listas favoritas.</li>
                            <li>Notificaciones push.</li>
                            <li>Perfiles de usuario.</li>
                            <li>Explora las listas de los demás usuarios.</li>
                        </ul>
                        <h4>Tecnologías</h4>
                        <div className="cont-tec">
                            <li id="ionic">
                                <svg><use href="#ico-ionic"></use></svg>
                                <h4>Ionic</h4>
                            </li>
                            <li id="angular">
                                <i className="fab fa-angular" id="angular"></i>
                                <h4>Angular</h4>
                            </li>
                            <li id="typescript">
                                <svg><use href="#ico-typescript"></use></svg>
                                <h4>TypeScript</h4>
                            </li>
                            <li id="firebase">
                                <svg><use href="#ico-firebase"></use></svg>
                                <h4>Firebase</h4>
                            </li>
                        </div>

                        <a
                            href="https://play.google.com/store/apps/details?id=com.puzeos.track_list"
                            target="musicalia"
                            className="boton"
                        >
                            Ver aplicación móvil (Android)
                        </a>
                    </div>
                </div>

                <div className="proyectos__cont-prin-app">
                    <div className="cont-app-img">
                        <img src={Imagen5} alt="Musicalia Screen" id="img-sec" />
                        <img src={Imagen6} alt="Musicalia Screen" />
                    </div>
                    <div className="cont-info">
                        <h2>Comprafacil (En desarrollo)</h2><br />
                        <h4>Características</h4>
                        <ul>
                            <li>Crear una cuenta con email/contraseña y teléfono.</li>
                            <li>Uso de Firebase Functions.</li>
                            <li>Obtener ubicación del usuario.</li>
                        </ul>
                        <h4>Tecnologías</h4>
                        <div className="cont-tec">
                            <li id="expo">
                                <svg><use href="#ico-expo"></use></svg>
                                <h4>Expo</h4>
                            </li>
                            <li id="react">
                                <i className="fab fa-react" id="react" />
                                <h4>React Native</h4>
                            </li>
                            <li id="typescript">
                                <svg><use href="#ico-typescript"></use></svg>
                                <h4>TypeScript</h4>
                            </li>
                            <li id="firebase">
                                <svg><use href="#ico-firebase"></use></svg>
                                <h4>Firebase</h4>
                            </li>
                        </div>

                        {/* <a
                            href="https://play.google.com/store/apps/details?id=com.puzeos.track_list"
                            target="musicalia"
                            className="boton"
                        >
                            Ver aplicación móvil (Android)
                        </a> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
