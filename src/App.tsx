import React, { useRef } from 'react'
import Header from './components/Header'
import SobreMi from './components/SobreMi'
import Proyectos from './components/Proyectos'
import Extras from './components/Extras'
import Contact from './components/Contact'
import useOnScreen from './hooks/useOnScreen'

const App = () => {

    const references = {
        ref1: useRef<HTMLElement>(null),
        ref2: useRef<HTMLElement>(null),
        ref3: useRef<HTMLElement>(null),
        ref4: useRef<HTMLElement>(null),
    }

    useOnScreen(Object.values(references));

    return <>
        <div className="cont-ws">
            <a target="a" href="https://api.whatsapp.com/send?phone=18097717766&text=Hola%20Andrison!">
                <img src="images/ws.webp" alt='ws' />
            </a>
        </div>
        <Header />
        <SobreMi reference={references.ref1} />
        <Proyectos reference={references.ref2} />
        <Extras reference={references.ref3} />
        <Contact reference={references.ref4} />
    </>
}

export default App
