import React, { useRef } from 'react'
import Header from './components/Header'
import SobreMi from './components/SobreMi'
import Proyectos from './components/Proyectos'
import Extras from './components/Extras'
import Contacto from './components/Contacto'
import useOnScreen from './hooks/useOnScreen'

const App = () => {

    const ref1=useRef();
    const ref2=useRef();
    const ref3=useRef();
    const ref4=useRef();

	const onScreen=useOnScreen([ref1,ref2,ref3,ref4]);

    return (
        <>  
            <div class="cont-ws">
                <a target="a" href="https://api.whatsapp.com/send?phone=18097717766&text=Hola%20Andrison!">
                    <img src="images/ws.webp" />
                </a>
            </div>
            <Header />
            <SobreMi referencia={ref1}/>
            <Proyectos referencia={ref2}/>
            <Extras referencia={ref3}/>
            <Contacto referencia={ref4}/>
        </>
    )
}

export default App
