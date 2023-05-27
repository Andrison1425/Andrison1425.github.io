import React from 'react'

const Extras = ({ reference }: { reference: React.RefObject<HTMLElement> }) => {
    return (
        <section 
            className="extras__datos-extras section" 
            id="extras" 
            data-id="seccion3"
            ref={reference}
        >			
            <section className="extras__cont-aprendizaje ">
                <div className="cont">
                    <h2>Ruta de aprendizaje planeada</h2>
                    <ul>
                        <li className="raya">HTML y CSS</li>
                        <li className="raya">JavaScript</li>
                        <li className="raya">Bootstrap</li>
                        <li className="raya">SASS</li>
                        <li className="raya">React</li>
                        <li className="raya">Angular/TypeScript</li>
                        <li className="raya">Firebase</li>
                        <li className="raya">Ionic</li>
                        <li className="raya">React Native/Expo</li>
                        <li>NodeJs ◄</li>
                        <li>C#/.NET CORE</li>
                    </ul>
                </div>
            </section>
        
            <section className="cont-proyectos-sec">
                <div className="cont">
                    <h2>Proyecto/s en desarrollo</h2><br /><br />
                    <div className="proyectos__cont-card fondo2">
                        <article>
                            <div className="img">
                                <img src="images/11.png" alt="" />
                            </div>
                            <div className="article-body">
                                <h3>Clon de Facebook</h3>
                                <p>Clon de Facebook usando useContext/useReducer.</p>
                                <a href="https://focused-galileo-8c0b4e.netlify.app/" target="b" className="boton">Ver aplicación web </a>
                                <span className="cont-icons">
                                    <i className="fab fa-react" id="react"></i>
                                    <i className="fab fa-sass" id="sass"></i>
                                    <i className="fab fa-laravel" id="laravel"></i>
                                </span>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
	    </section>
    )
}

export default Extras
