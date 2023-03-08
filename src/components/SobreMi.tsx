import React from 'react';
import TypingEffects from "react-typing-writer-effect";
const Imagen = require("../images/0.jpg");

const SobreMi = ({ reference }: { reference: React.RefObject<HTMLElement> }) => {
    return (
        <section
            className="sobreMi__sec-top section"
            id="sobreMiE"
            data-id="seccion1"
            ref={reference}
        >
            <svg className="icons" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 50 50">
                <symbol id="ico-firebase" xmlns="http://www.w3.org/2000/svg">
                    <title>Firebase icon</title>
                    <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z" />
                </symbol>
                <symbol id="ico-ionic" xmlns="http://www.w3.org/2000/svg"><title>Ionic icon</title><path d="M22.922 7.027l-.103-.23-.169.188c-.408.464-.928.82-1.505 1.036l-.159.061.066.155a9.745 9.745 0 0 1 .75 3.759c0 5.405-4.397 9.806-9.806 9.806-5.409 0-9.802-4.397-9.802-9.802 0-5.405 4.402-9.806 9.806-9.806 1.467 0 2.883.319 4.2.947l.155.075.066-.155a3.767 3.767 0 0 1 1.106-1.453l.197-.159-.225-.117A11.905 11.905 0 0 0 12.001.001c-6.619 0-12 5.381-12 12s5.381 12 12 12 12-5.381 12-12c0-1.73-.361-3.403-1.078-4.973zM12 6.53A5.476 5.476 0 0 0 6.53 12 5.476 5.476 0 0 0 12 17.47 5.476 5.476 0 0 0 17.47 12 5.479 5.479 0 0 0 12 6.53zm10.345-2.007a2.494 2.494 0 1 1-4.988 0 2.494 2.494 0 0 1 4.988 0z" /></symbol>
                <symbol id="ico-typescript" xmlns="http://www.w3.org/2000/svg"><title>TypeScript icon</title><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" /></symbol>
            </svg>

            <div className="flex">
                <div className="sobreMi__cont-texto ml" >
                    <h2>
                        Andrison Sánchez
                        <br />
                        <TypingEffects
                            textArray={[
                                "Desarrollador Web en   ",
                                "HTML   ",
                                "CSS   ",
                                "Bootstrap   ",
                                "JavaScript   ",
                                "ReactJS   ",
                                "Laravel   "
                            ] as any as [string]}
                            speed={100}
                            size={50}

                        />
                    </h2>
                </div>

                <div className="sobreMi__cont-info">
                    <div className="encabezado">
                        <div className="cont-texto-info">
                            <h3 className="activo titulo">Sobre mí</h3>
                            <p>Andrison Sánchez De La Cruz</p>
                        </div>
                        <img src={Imagen} className="imagen" alt="Foto de perfil" />
                        <hr />
                    </div>

                    <div className="cuerpo">
                        <p>
                            ¡Hola!
                            Mi nombre es Andrison.
                            Soy un Desarrollador de software que vive en Santo Domingo.
                            Actualmente soy desarrollador de software en Kleio technology. La mayor parte de mis conocimientos están enfocados en el desarrollo Frontend y Backend as a service, y blockchain en menor medida.
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
                <li id="git">
                    <i className="fab fa-git-alt" id="git"></i>
                    <h4>Git/GitHub</h4>
                </li>
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
                <li id="solidity">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 322.71 500.79">
                        <title>solidity</title>
                        <path className="a" d="M241.4,0,160.89,143.09H0L80.45,0h161" opacity="0.45" style={{ isolation: "isolate" }} />
                        <path className="b" d="M160.89,143.09h161L241.4,0H80.45Z" opacity="0.6" style={{ isolation: "isolate" }} />
                        <path className="c" d="M80.45,286.12l80.44-143L80.45,0,0,143.09Z" opacity="0.8" style={{ isolation: "isolate" }} />
                        <path className="a" d="M81.25,500.79,161.76,357.7h161L242.2,500.79H81.25" opacity="0.45" style={{ isolation: "isolate" }} />
                        <path className="b" d="M161.76,357.7H.8L81.25,500.79h161Z" opacity="0.6" style={{ isolation: "isolate" }} />
                        <path className="c" d="M242.2,214.67l-80.44,143L242.2,500.79,322.71,357.7Z" opacity="0.8" style={{ isolation: "isolate" }} />
                    </svg>
                    <h4>Solidity</h4>
                </li>
                <li id="gatsby">
                <svg enable-background="new 0 0 2500 2500" viewBox="0 0 2500 2500" xmlns="http://www.w3.org/2000/svg"><path d="m1250 0c-690.4 0-1250 559.6-1250 1250s559.6 1250 1250 1250 1250-559.6 1250-1250-559.6-1250-1250-1250zm-981.4 1263 968.4 968.4c-531.8-6.9-961.5-436.6-968.4-968.4zm1201.1 943.9-1176.6-1176.6c99.8-436.3 490.3-761.9 956.9-761.9 326.1 0 615.1 159.1 793.6 403.9l-135.9 119.9c-144.8-207.6-385.4-343.5-657.7-343.5-346.7 0-642 220.2-753.6 528.4l1026.5 1026.4c249.3-90.3 441-300.7 505.2-561.3h-425.4v-192.2h629c-.1 466.6-325.7 857.1-762 956.9z" fill="#744c9e"/></svg>
                    <h4>Gatsby</h4>
                </li>
            </div>
        </section>
    )
}

export default SobreMi
