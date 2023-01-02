import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlayerVsPlayer from './ui/playerVsPlayer'
import PlayerVsCpu from './ui/playerVsCpu'
import Landing from "./ui/landing";


import './app.css';


function App() {

    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Landing />}></Route>
                    <Route exact path="/playerVsPLayer" element={<PlayerVsPlayer />}></Route>
                    <Route exact path="/playerVsCpu" element={<PlayerVsCpu />}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App;
