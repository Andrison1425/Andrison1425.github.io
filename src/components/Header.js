import React, { useState } from 'react';

const Header = () => {

	const [state,setState]=useState(false);

	const toogle=()=>{
		const menu=document.querySelector(".cont-menu");
		const sombra=document.querySelector(".sombra");
		if(!state){
			menu.classList.add("menu-activo");
			sombra.style.display="block";
		}else{
			menu.classList.remove("menu-activo");
			sombra.style.display="none";
		}
		setState(!state);
	}

    return (
		<>
			<header className="header__header">
				<div className="cont-menu">
					<li id="seccion1">
						<a href="#sobreMiE">
							Sobre mí	
						</a>
					</li>
					<li id="seccion2">
						<a href="#portafolioE" >
							Portafolio
						</a>
					</li>

					<li id="seccion3">
						<a href="#extras" >
							Datos extras
						</a>
					</li>

					<li id="seccion4">
						<a href="#contactoE" >
							Contactame	
						</a>
					</li>
				</div>
				<i 
					className="fas fa-bars btn-menu"
					onClick={toogle}	
				></i>
			</header>
			<div 
				className="sombra"
				onClick={toogle}
			></div>
			<div className="reyeno"></div>
		</>
    )
}

export default Header
