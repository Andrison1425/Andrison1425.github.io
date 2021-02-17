import React from 'react'

const Extras = ({referencia}) => {
    return (
        <section 
            className="extras__datos-extras section" 
            id="extras" 
            data-id="seccion3"
            ref={referencia}
        >			
            <section className="extras__cont-aprendizaje ">
                <div className="cont">
                    <h2>Ruta de aprendizaje planeada</h2>
                    <ul>
                        <li className="raya">HTML</li>
                        <li className="raya">CSS</li>
                        <li className="raya">JavaScript</li>
                        <li className="raya">Bootstrap</li>
                        <li className="raya">SASS</li>
                        <li className="raya">React</li>
                        <li className="raya">PHP/Laravel</li>
                        <li>Angular/TypeScript ◄</li>
                        <li>C#/.NET CORE</li>
                        <li>React Native</li>
                        <li>NodeJs</li>
                    </ul>
                </div>
            </section>
        
            <section className="cont-proyectos-sec">
                <div className="cont">
                    <h2>Proyecto/s en desarrollo</h2><br /><br />
                    <div className="proyectos__cont-card fondo2">
                        <article>
                            <div className="img">
                                <img src="images/10.png" />
                            </div>
                            <div className="article-body">
                                <h3>FlagApp</h3>
                                <p>Aplicación para visualizar la información de todos los paises con sus banderas consumiendo una Rest Api.</p>
                                <a href="https://modest-rosalind-51d46c.netlify.app/" target="b" className="boton">Ver aplicación web </a>
                                <span className="cont-icons">
                                    <i className="fab fa-html5" id="html"></i>
                                    <i className="fab fa-css3-alt" id="css"></i>
                                    <i className="fab fa-react" id="react"></i>
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
