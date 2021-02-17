import React, { useState } from 'react'
import arrProyectos from '../data/arrProyectos'

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
