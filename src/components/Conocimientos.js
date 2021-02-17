import React from 'react'

const Conocimientos = () => {
    const arrConoc=[
        {
            name:"HTML 5",
            content:"<li>Uso de las etiquetas correspondientes</li><li>Conocimientos de atributos</li>",
            iconClass:"fab fa-html5"
        },
        {
            name:"CSS 3",
            content:"<li>Diseño responsivo</li><li>Flexbox</li><li>Grid</li>",
            iconCLass:"fab fa-css3-alt"
        },
        {
            name:"Bootstrap 4",
            content:"<li>Grid</li><li>Uso de componentes</li><li>Diseño responsivo</li>",
            iconCLass:"fab fa-bootstrap",
            id:"bootstrap"
        },
        {
            name:"JavaScript",
            content:"<li>Consumo de APIs</li><li>POO</li><li>DOM</li><li>ES6</li>",
            iconCLass:"fab fa-js-square",
            id:"js"
        },
        {
            name:"React",
            content:"<li>Hooks</li><li>Redux</li><li>Router</li>",
            iconCLass:"fab fa-react",
            id:"react"
        },
        {
            name:"Laravel",
            content:"<li>CRUD</li><li>MVC</li><li>Creación de Api</li>",
            iconCLass:"fab fa-laravel",
            id:"laravel"
        },
        {
            name:"PHP",
            content:"<li>POO</li><li>CRUD</li><li>Modularidad</li>",
            iconCLass:"fab fa-php",
            id:"php"
        },
        {
            name:"",
            content:"",
            iconCLass:""
        },
    ];
    return (
        <section class="cont-conoc">
            <section id="slider">
                <input type="radio" name="slider" id="s1" checked />
                <input type="radio" name="slider" id="s2" />
                <input type="radio" name="slider" id="s3"  />
                <input type="radio" name="slider" id="s4" />
                <input type="radio" name="slider" id="s5" />
                <input type="radio" name="slider" id="s6" />
                <input type="radio" name="slider" id="s7" />
                <input type="radio" name="slider" id="s8" />

                <label for="s1" id="slide1">
                    <div class="card">
                        <div class="img-card">
                            <i class="fab fa-html5" id="html"></i>
                            <h4>HTML 5</h4>
                        </div>

                        <ul>
                            <span>
                                <li>Uso de las etiquetas correspondientes</li>
                                <li>Conocimientos de atributos</li>
                            </span>
                        </ul>
                        <i class="fab fa-html5 icono2" id="html"></i>
                    </div>
                </label>

                <label for="s2" id="slide2">
                    <div class="card">
                        <div class="img-card">
                            <i class="fab fa-css3-alt" id="css"></i>
                            <h4>CSS 3</h4>
                        </div>

                        <ul>
                            <span>
                                <li>Diseño responsivo</li>
                                <li>Flexbox</li>
                                <li>Grid</li>
                            </span>
                        </ul>
                        <i class="fab fa-css3-alt icono2" id="css"></i>
                    </div>
                </label>

                <label for="s3" id="slide3">
                    <div class="card">
                        <div class="img-card">
                            <i class="fab fa-bootstrap" id="bootstrap"></i>
                            <h4>Bootstrap 4</h4>
                        </div>

                        <ul>
                            <span>
                                <li>Grid</li>
                                <li>Uso de componentes</li>
                                <li>Diseño responsivo</li>
                            </span>
                        </ul>
                        <i class="fab fa-bootstrap icono2" id="bootstrap"></i>
                    </div>
                </label>

                <label for="s4" id="slide4">
                    <div class="card">
                        <div class="img-card">
                            <i class="fab fa-js-square" id="js"></i>
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
                        <i class="fab fa-js-square icono2" id="js"></i>
                    </div>
                </label>

                <label for="s5" id="slide5">
                    <div class="card">
                        <div class="img-card">
                            <i class="fab fa-react" id="react"></i>
                            <h4>React</h4>
                        </div>

                        <ul>
                            <span>
                                <li>Hooks</li>
                                <li>Redux</li>
                                <li>Router</li>
                            </span>
                        </ul>
                        <i class="fab fa-react icono2" id="react"></i>
                    </div>
                </label>

                <label for="s6" id="slide6">
                    <div class="card">
                        <div class="img-card">
                            <i class="fab fa-laravel" id="laravel"></i>
                            <h4>Laravel</h4>
                        </div>

                        <ul>
                            <span>
                                <li>CRUD</li>
                                <li>MVC</li>
                                <li>Creación de Api</li>
                            </span>
                        </ul>
                        <i class="fab fa-laravel icono2" id="laravel"></i>
                    </div>
                </label>

                <label for="s7" id="slide7">
                    <div class="card">
                        <div class="img-card">
                            <i class="fab fa-php" id="php"></i>
                            <h4>PHP</h4>
                        </div>

                        <ul>
                            <span>
                                <li>POO</li>
                                <li>CRUD</li>
                                <li>Modularidad</li>
                            </span>
                        </ul>
                        <i class="fab fa-php icono2" id="php"></i>
                    </div>
                </label>

                <label for="s8" id="slide8">
                    <div class="card">
                        <div class="img-card">
                            <i class="fab fa-sass" id="sass"></i>
                            <h4>SASS</h4>
                        </div>

                        <ul>
                            <span>
                                <li>Importaciones</li>
                                <li>Extructura de carpetas</li>
                                <li>Mixin</li>
                            </span>
                        </ul>
                        <i class="fab fa-sass icono2" id="sass"></i>
                    </div>				
                </label>

            </section>			
	    </section>
    )
}

export default Conocimientos
