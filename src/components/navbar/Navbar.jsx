import './navbar.scss'
import {Person, Mail} from '@material-ui/icons';

export default function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">codeantik.</a>
                    {/* <div className="itemContainer">
                        <Person className='icon' />
                        <span>+91 93400 91267</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icon' />
                        <span>ankitsinankitsin888000@gmail.com</span>
                    </div> */}
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
