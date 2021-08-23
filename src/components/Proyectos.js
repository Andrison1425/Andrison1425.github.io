import React, { useState } from 'react'
import arrProyectos from '../data/arrProyectos'
import Imagen from '../images/screen.jpg';
import Imagen2 from '../images/screen2.jpg';
import Imagen3 from '../images/screen3.jpg';
import Imagen4 from '../images/screen4.jpg';

const Proyectos = ({referencia}) => {

    const [state,setState]=useState(3);
    return (
        <section 
            className="proyectos__cont-proyectos section" 
            id="portafolioE" 
            data-id="seccion2"
            ref={referencia}
        >
            <div className="cont">
			
                <h2 className="activo" >
                    Portafolio
                </h2>

                <div className="proyectos__cont-prin-app">
                    <div className="cont-app-img">
                        <img src={Imagen} alt="Puzeos Screen" id="img-sec" />
                        <img src={Imagen2} alt="Puzeos Screen" />
                        <img src={Imagen3} alt="Puzeos Screen" id="img-ter"/>
                        {/* <img src={Imagen4} alt="Puzeos Screen" /> */}
                    </div>
                    <div className="cont-info">
                        <h2>Puzeos</h2><br />
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
                            <li id="angular">
                                <i className="fab fa-angular" id="angular"></i>
                                <h4>Angular</h4>
                            </li>
                            <li id="typescript">
                                <svg><use href="#ico-typescript"></use></svg>
                                <h4>TypeScript</h4>
                            </li>
                            <li id="ionic">
                                <svg><use href="#ico-ionic"></use></svg>
                                <h4>Ionic</h4>
                            </li>
                            <li id="firebase">
                                <svg><use href="#ico-firebase"></use></svg>
                                <h4>Firebase</h4>
                            </li>
                        </div>

                        <a 
                            href="https://play.google.com/store/apps/details?id=com.puzeos.puzeos" 
                            target="puzeos" 
                            className="boton"
                        >
                            Ver aplicación móvil (Android)
                        </a>
                    </div>
                </div>

			    <div className="proyectos__cont-card fondo2">
                    {arrProyectos.map((proyecto,index)=>{
                        if(index<state){
                            return (
                                <article key={index}>
                                    <div className="img">
                                        <img 
                                            src={`images/${proyecto.rutaImg}`}
                                            alt="Imagen"    
                                        />
                                    </div>
                                    <div className="article-body">
                                        <h3>{proyecto.titulo}</h3>
                                        <p>{proyecto.descripcion}</p>
                                        <a href={proyecto.ruta} target={index} className="boton">
                                            {proyecto.esApp?"Ver aplicación web":"Ver sitio web"} 
                                        </a>
                                        <span className="cont-icons">
                                        {proyecto.iconos.map((icono,index)=><i key={index} className={icono.ruta} id={icono.id}></i>)}
                                        </span>
                                    </div>
                                </article>
                            )
                        }else{
                            return null;
                        }
                    })}
                </div>
                <button
                    className="btn-mas"
                    onClick={()=>setState(state+3)}
                    disabled={state>=arrProyectos.length?true:false}
                >Ver Más</button>
            </div>
        </section>
    )
}

export default Proyectos
