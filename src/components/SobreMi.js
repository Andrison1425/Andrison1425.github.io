import React from 'react'
import Imagen from '../images/0.jpg';
import Typed from 'react-typed';

const SobreMi = ({referencia}) => {
    return (
        <section 
            className="sobreMi__sec-top section" 
            id="sobreMiE" 
            data-id="seccion1"
            ref={referencia}
        >
            <div className="flex">
                <div className="sobreMi__cont-texto ml" >
                    <h2>
                        Andrison Sánchez
                        <br />
                        <Typed
                            strings={[
                                "Desarrollador Web en ",
                                "HTML",
                                "CSS",
                                "Bootstrap",
                                "JavaScript",
                                "ReactJS",
                                "Laravel"
                            ]}
                            typeSpeed={75}
                            backSpeed={15}
                            startDelay={1000}
                            loop 
                            className="typed"
                        />
                    </h2>
                </div>

                <div className="sobreMi__cont-info">
                    <div className="encabezado">
                        <div className="cont-texto-info">
                            <h3 className="activo titulo">Sobre mí</h3>
                            <p>Andrison Sánchez De La Cruz</p>
                        </div>
                        <img src={Imagen} className="imagen"/>
                        <hr />
                    </div>

                    <div className="cuerpo">
                        <p>
                            ¡Hola!
                            Mi nombre es Andrison.
                            Soy un Desarrollador Web que vive en Santo Domingo.
                            Actualmente soy estudiante de Desarrollo de software en el ITLA pero llevo años aprendiendo a desarrollar páginas webs de manera autodidacta debido a que me apasiona. Me oriento más al front-end, aunque también hago back-end.
                        </p>
                    </div>
                </div>	
            </div>

            <div className="cont-conoc ml">
                <li id="html">
                    <i className="fab fa-html5" id="html"></i>
                    <h4>HTML</h4>
                </li>
                <li id="css">
                    <i className="fab fa-css3-alt" id="css"></i>
                    <h4>CSS</h4>
                </li>
                <li id="js">
                    <i className="fab fa-js-square" id="js"></i>
                    <h4>JavaScript</h4>
                </li>
                <li id="bootstrap">
                    <i className="fab fa-bootstrap" id="bootstrap"></i>
                    <h4>Bootstrap</h4>
                </li>
                <li id="sass">
                    <i className="fab fa-sass" id="sass"></i>
                    <h4>Sass</h4>
                </li>
                <li id="react">
                    <i className="fab fa-react" id="react"></i>
                    <h4>ReactJs</h4>
                </li>
                <li id="laravel">
                    <i className="fab fa-laravel" id="laravel"></i>
                    <h4>Laravel</h4>
                </li>
                <li id="php">
                    <i className="fab fa-php" id="php"></i>
                    <h4>PHP</h4>
                </li>
            </div>

        </section>
    )
}

export default SobreMi
