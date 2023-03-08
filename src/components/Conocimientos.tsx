import React from 'react'

const Conocimientos = () => {

    return (
        <section className="cont-conoc">
            <section id="slider">
                <input type="radio" name="slider" id="s1" checked />
                <input type="radio" name="slider" id="s2" />
                <input type="radio" name="slider" id="s3"  />
                <input type="radio" name="slider" id="s4" />
                <input type="radio" name="slider" id="s5" />
                <input type="radio" name="slider" id="s6" />
                <input type="radio" name="slider" id="s7" />
                <input type="radio" name="slider" id="s8" />

                <label htmlFor="s1" id="slide1">
                    <div className="card">
                        <div className="img-card">
                            <i className="fab fa-html5" id="html"></i>
                            <h4>HTML 5</h4>
                        </div>

                        <ul>
                            <span>
                                <li>Uso de las etiquetas correspondientes</li>
                                <li>Conocimientos de atributos</li>
                            </span>
                        </ul>
                        <i className="fab fa-html5 icono2" id="html"></i>
                    </div>
                </label>

                <label htmlFor="s2" id="slide2">
                    <div className="card">
                        <div className="img-card">
                            <i className="fab fa-css3-alt" id="css"></i>
                            <h4>CSS 3</h4>
                        </div>

                        <ul>
                            <span>
                                <li>Diseño responsivo</li>
                                <li>Flexbox</li>
                                <li>Grid</li>
                            </span>
                        </ul>
                        <i className="fab fa-css3-alt icono2" id="css"></i>
                    </div>
                </label>

                <label htmlFor="s3" id="slide3">
                    <div className="card">
                        <div className="img-card">
                            <i className="fab fa-bootstrap" id="bootstrap"></i>
                            <h4>Bootstrap 4</h4>
                        </div>

                        <ul>
                            <span>
                                <li>Grid</li>
                                <li>Uso de componentes</li>
                                <li>Diseño responsivo</li>
                            </span>
                        </ul>
                        <i className="fab fa-bootstrap icono2" id="bootstrap"></i>
                    </div>
                </label>

                <label htmlFor="s4" id="slide4">
                    <div className="card">
                        <div className="img-card">
                            <i className="fab fa-js-square" id="js"></i>
                            <h4>JavaScript</h4>
                        </div>

                        <ul>
                            <span>
                                <li>Consumo de APIs</li>
                                <li>POO</li>
                                <li>DOM</li>
                                <li>ES6</li>
                            </span>	
                        </ul>
                        <i className="fab fa-js-square icono2" id="js"></i>
                    </div>
                </label>

                <label htmlFor="s5" id="slide5">
                    <div className="card">
                        <div className="img-card">
                            <i className="fab fa-react" id="react"></i>
                            <h4>React</h4>
                        </div>

                        <ul>
                            <span>
                                <li>Hooks</li>
                                <li>Redux</li>
                                <li>Router</li>
                            </span>
                        </ul>
                        <i className="fab fa-react icono2" id="react"></i>
                    </div>
                </label>

                <label htmlFor="s6" id="slide6">
                    <div className="card">
                        <div className="img-card">
                            <i className="fab fa-laravel" id="laravel"></i>
                            <h4>Laravel</h4>
                        </div>

                        <ul>
                            <span>
                                <li>CRUD</li>
                                <li>MVC</li>
                                <li>Creación de Api</li>
                            </span>
                        </ul>
                        <i className="fab fa-laravel icono2" id="laravel"></i>
                    </div>
                </label>

                <label htmlFor="s7" id="slide7">
                    <div className="card">
                        <div className="img-card">
                            <i className="fab fa-php" id="php"></i>
                            <h4>PHP</h4>
                        </div>

                        <ul>
                            <span>
                                <li>POO</li>
                                <li>CRUD</li>
                                <li>Modularidad</li>
                            </span>
                        </ul>
                        <i className="fab fa-php icono2" id="php"></i>
                    </div>
                </label>

                <label htmlFor="s8" id="slide8">
                    <div className="card">
                        <div className="img-card">
                            <i className="fab fa-sass" id="sass"></i>
                            <h4>SASS</h4>
                        </div>

                        <ul>
                            <span>
                                <li>Importaciones</li>
                                <li>Extructura de carpetas</li>
                                <li>Mixin</li>
                            </span>
                        </ul>
                        <i className="fab fa-sass icono2" id="sass"></i>
                    </div>				
                </label>

            </section>			
	    </section>
    )
}

export default Conocimientos
