import { Link } from "react-router-dom";
import '../app.css';
import linkedin from '../pics/linkedin.png'
import github from '../pics/github.png'

export default function Landing() {

    return (
        
            <div className="conteiner-landing">
                <div>
                    <h1>Chose Game Mode</h1>
                </div>
                <div className="conteiner-choise">
                    <div className="divs-links">
                        <Link className="firstLink" style={{ textDecoration: 'none', color: 'black' }} to='/playerVsPLayer' >Player vs Player</Link>
                    </div>
                    <div className="divs-links">
                        <Link className="secondLink" style={{ textDecoration: 'none', color: 'black' }} to='/playerVsCpu' >Player vs CPU</Link>
                    </div>
                </div>
                <div className="last-part">
                    <h3>Developed by Maxi Cornalba</h3>
                    <a href="https://www.linkedin.com/in/enrique-maximiliano-cornalba-1a2429184/" target="_blank" rel="noreferrer" ><img src={linkedin} alt=''/></a>
                    <a href="https://github.com/maxiscor7" target="_blank" rel="noreferrer" ><img src={github} alt=''/></a>

                </div>
            </div>

    )
}