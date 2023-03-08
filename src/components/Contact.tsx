import React from 'react'

const Contact = ({reference}: {reference: React.RefObject<HTMLElement>}) => {
    return (
        <section 
            className="contacto__cont-contacto section" 
            data-id="seccion4"
            ref={reference}
        >
		<div className="cont">
			<h2 className="activo" id="contactoE">
				Contactame
			</h2>
			<div className="contacto__cont-formulario">
				<form action="https://formsubmit.co/d7f0c93cf1f508469847b25107141075" method="POST">
					<div className="mensaje">
						
					</div>
					<input 
                        required 
                        className="validar" 
                        type="text" 
                        id="nombre" 
                        name="name" 
                        minLength={2}
                        maxLength={30} 
                        placeholder="Ingrese su nombre"
                    />
					<input  
                        required 
                        className="validar" 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Ingrese su correo electrónico"
                    />
					<textarea  
                        required 
                        name="mensaje" 
                        className="validar" 
                        placeholder="Escriba un mensaje" 
                        minLength={20}
                        maxLength={500}
                        rows={6}
                    ></textarea>
					<input 
                        type = "hidden" 
                        name = "_subject" 
                        value = "¡Crear sitio web!"
                    />
					<input 
                        type = "hidden" 
                        name = "_next" 
                        value="https://andrison1425.github.io/enviado.html"
                    />
					<button className="boton" type="submit">Enviar</button> 

				</form>

				<img 
                    alt="Contact section" 
                    src="images/reyeno.svg" 
                    className="img-form"  
                />
			</div>
		</div>
	</section>
    )
}

export default Contact
