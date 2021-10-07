import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'


export default function Intro() {

    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Full Stack Web Developer', 'Mobile Developer', 'Competitive Programmer', 'ML enthusiast', 'Open Source Contributor' ] 
        })
    }, [])
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="./assets/intro-person.svg" alt="intro-person" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Ankit(codeantik)</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="./assets/down.png" alt="down" />
                </a>
            </div>
        </div>
    )
}
