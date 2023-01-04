import { useState } from "react";
import { Link } from "react-router-dom";

import '../app.css';


export default function PlayerVsCpu() {

    const [array1, setArray1] = useState('')
    const [array2, setArray2] = useState('')
    const [array3, setArray3] = useState('')
    const [array4, setArray4] = useState('')
    const [array5, setArray5] = useState('')
    const [array6, setArray6] = useState('')
    const [array7, setArray7] = useState('')
    const [count, setCount] = useState(0)
    const [scorePl1, setScorePl1] = useState(0)
    const [scorePl2, setScorePl2] = useState(0)

    let activeOrNot = 'active'
    let winner = ''

    let prueba = [[...array1], [...array2], [...array3], [...array4], [...array5], [...array6], [...array7]]
    for (let i = 0; i < prueba.length; i++) {
        for (let j = 0; j < prueba[i].length; j++) {
            // yellow 
            if (prueba[i][j] === 'amarillo' && prueba[i][j + 1] === 'amarillo' && prueba[i][j + 2] === 'amarillo' && prueba[i][j + 3] === 'amarillo') {

                activeOrNot = 'desactive'
                prueba[i][j] = 'amarillos'
                prueba[i][j + 1] = 'amarillos'
                prueba[i][j + 2] = 'amarillos'
                prueba[i][j + 3] = 'amarillos'
                winner = 'yellow'
            }
            // red
            if (prueba[i][j] === 'rojo' && prueba[i][j + 1] === 'rojo' && prueba[i][j + 2] === 'rojo' && prueba[i][j + 3] === 'rojo') {

                activeOrNot = 'desactive'
                prueba[i][j] = 'rojos'
                prueba[i][j + 1] = 'rojos'
                prueba[i][j + 2] = 'rojos'
                prueba[i][j + 3] = 'rojos'
                winner = 'red'
            }
            if (prueba[i + 3]) {
                //yellow
                if (prueba[i][j] === 'amarillo' && prueba[i + 1][j] === 'amarillo' && prueba[i + 2][j] === 'amarillo' && prueba[i + 3][j] === 'amarillo') {

                    activeOrNot = 'desactive'
                    prueba[i][j] = 'amarillos'
                    prueba[i + 1][j] = 'amarillos'
                    prueba[i + 2][j] = 'amarillos'
                    prueba[i + 3][j] = 'amarillos'
                    winner = 'yellow'
                }
                //red
                if (prueba[i][j] === 'rojo' && prueba[i + 1][j] === 'rojo' && prueba[i + 2][j] === 'rojo' && prueba[i + 3][j] === 'rojo') {

                    activeOrNot = 'desactive'
                    prueba[i][j] = 'rojos'
                    prueba[i + 1][j] = 'rojos'
                    prueba[i + 2][j] = 'rojos'
                    prueba[i + 3][j] = 'rojos'
                    winner = 'red'
                }
                //yellow
                if (prueba[i][j] === 'amarillo' && prueba[i + 1][j + 1] === 'amarillo' && prueba[i + 2][j + 2] === 'amarillo' && prueba[i + 3][j + 3] === 'amarillo') {

                    activeOrNot = 'desactive'
                    prueba[i][j] = 'amarillos'
                    prueba[i + 1][j + 1] = 'amarillos'
                    prueba[i + 2][j + 2] = 'amarillos'
                    prueba[i + 3][j + 3] = 'amarillos'
                    winner = 'yellow'
                }

                if (prueba[i][prueba[i].length - 1] === 'amarillo' && prueba[i + 1][prueba[i].length - 2] === 'amarillo' && prueba[i + 2][prueba[i].length - 3] === 'amarillo' &&
                    prueba[i + 3][prueba[i].length - 4] === 'amarillo') {

                    activeOrNot = 'desactive'
                    prueba[i][prueba[i].length - 1] = 'amarillos'
                    prueba[i + 1][prueba[i].length - 2] = 'amarillos'
                    prueba[i + 2][prueba[i].length - 3] = 'amarillos'
                    prueba[i + 3][prueba[i].length - 4] = 'amarillos'
                    winner = 'yellow'
                }
                if (prueba[i][prueba[i].length - 1] === 'rojo' && prueba[i + 1][prueba[i].length - 2] === 'rojo' && prueba[i + 2][prueba[i].length - 3] === 'rojo' &&
                    prueba[i + 3][prueba[i].length - 4] === 'rojo') {

                    activeOrNot = 'desactive'
                    prueba[i][prueba[i].length - 1] = 'rojos'
                    prueba[i + 1][prueba[i].length - 2] = 'rojos'
                    prueba[i + 2][prueba[i].length - 3] = 'rojos'
                    prueba[i + 3][prueba[i].length - 4] = 'rojos'
                    winner = 'red'
                }

                //red
                if (prueba[i][j] === 'rojo' && prueba[i + 1][j + 1] === 'rojo' && prueba[i + 2][j + 2] === 'rojo' && prueba[i + 3][j + 3] === 'rojo') {

                    activeOrNot = 'desactive'
                    prueba[i][j] = 'rojos'
                    prueba[i + 1][j + 1] = 'rojos'
                    prueba[i + 2][j + 2] = 'rojos'
                    prueba[i + 3][j + 3] = 'rojos'
                    winner = 'red'
                }

            }


        }

    }

    let amarillo = "amarillo"
    let rojo = "rojo"

    function llenar(color, num) {
        if (num === 1) {
            if (array1.length < 6) {
                setCount(count + 1)
                setArray1([...array1, color])
            }
        }
        if (num === 2) {
            if (array2.length < 6) {
                setCount(count + 1)
                setArray2([...array2, color])
            }
        }
        if (num === 3) {
            if (array3.length < 6) {
                setCount(count + 1)
                setArray3([...array3, color])
            }
        }
        if (num === 4) {
            if (array4.length < 6) {
                setCount(count + 1)
                setArray4([...array4, color])
            }
        }
        if (num === 5) {
            if (array5.length < 6) {
                setCount(count + 1)
                setArray5([...array5, color])
            }
        }
        if (num === 6) {
            if (array6.length < 6) {
                setCount(count + 1)
                setArray6([...array6, color])
            }
        }
        if (num === 7) {
            if (array7.length < 6) {
                setCount(count + 1)
                setArray7([...array7, color])
            }
        }
    }

    function resetScore() {

        setArray1('')
        setArray2('')
        setArray3('')
        setArray4('')
        setArray5('')
        setArray6('')
        setArray7('')
        setCount(0)
        setScorePl1(0)
        setScorePl2(0)
        activeOrNot = 'active'

    }

    function playAgain() {
        if (winner === 'yellow') {
            setScorePl1(scorePl1 + 1)
        }
        if (winner === 'red') {
            setScorePl2(scorePl2 + 1)
        }
        setArray1('')
        setArray2('')
        setArray3('')
        setArray4('')
        setArray5('')
        setArray6('')
        setArray7('')
        setCount(0)
        activeOrNot = 'active'

    }

    function comparing(compare) {
        if (compare === 'amarillo') {
            return <div className="amarillo"></div>
        }
        else if (compare === 'rojo') {
            return <div className="rojo"></div>
        }
        else if (compare === 'amarillos') {
            return <div className="amarillo turnYellow"></div>
        }
        else if (compare === 'rojos') {
            return <div className="rojo turnRed"></div>
        }
    }

    function cpuChoise() {
        let x = Math.floor(Math.random() * 7);

        if (prueba[x].length < 5) {
            llenar('rojo', x + 1)

        } else {
            let found = prueba.findIndex(buscar)
            llenar('rojo', found + 1)


        }
    }

    function buscar(array) {
        return array.length < 6
    }

    if ((count % 2) === 1) {
        if (count < 42 && winner !== 'yellow' && winner === '') {
            setTimeout(cpuChoise, 800)
        }
    }


    return (
        <div>
            <div className="conteiner-findFour">

                <div className="">
                    <Link className="buton-back" style={{ textDecoration: 'none', color: 'black' }} to='/' >Back</Link>
                </div>
                <div className="find-four">
                    <div className="conteiner-butons-score">
                        <div className="conteiner-win-turn-play">
                            <div>
                                {winner === 'yellow' ? <div className="winnerYellow"><h1>Winner player 1</h1></div> : ''}
                                {winner === 'red' ? <div className="winnerRed"><h1>Winner CPU</h1></div> : ''}
                                {winner === '' && count > 41 ? <div className="draw"><h1>Draw</h1></div> : ''}
                            </div>
                            <div>
                                {(count % 2) === 0 ? <div className="turnsPlayer1"><h1>Player 1 Turn</h1></div> : <div className="turnsPlayer2"><h1>Cpu Turn</h1></div>}
                            </div>

                            <div className="butons-below">
                                <button onClick={playAgain}>Play Again</button>
                            </div>
                        </div>
                        <div className="conteiner-score-reset">
                            <div className="conteiner-score">
                                <div className="score1">
                                    <h3>Player 1</h3>

                                    <h2>{scorePl1}</h2>
                                </div>
                                <div className="score2">
                                    <h3>CPU</h3>

                                    <h2>{scorePl2}</h2>
                                </div>
                            </div>
                            <div className="butons-below">
                                <button onClick={resetScore}>Reset Score</button>
                            </div>
                        </div>

                    </div>
                    <div className="conteiner-butons">
                        <div className='filas fila1'>
                            <button className={activeOrNot} onClick={() => { llenar((count % 2) === 0 ? amarillo : rojo, 1) }}>▼</button>
                            <div className="conteiner-columna">
                                <div className="columna">{!prueba[0] ? '' : prueba[0].map((e, index) => {
                                    return <div className={`position${index}`} key={index}>{comparing(e)}</div>
                                })}</div>
                            </div>
                            <div className="hole hole1"></div>
                            <div className="hole hole2"></div>
                            <div className="hole hole3"></div>
                            <div className="hole hole4"></div>
                            <div className="hole hole5"></div>
                            <div className="hole hole6"></div>

                        </div>
                        <div className='filas fila2'>
                            <button className={activeOrNot} onClick={() => { llenar((count % 2) === 0 ? amarillo : rojo, 2) }}>▼</button>
                            <div className="conteiner-columna">
                                <div className="columna">{!prueba[1] ? '' : prueba[1].map((e, index) => {
                                    return <div className={`position${index}`} key={index}>{comparing(e)}</div>
                                })}</div>
                            </div>
                            <div className="hole hole1"></div>
                            <div className="hole hole2"></div>
                            <div className="hole hole3"></div>
                            <div className="hole hole4"></div>
                            <div className="hole hole5"></div>
                            <div className="hole hole6"></div>
                        </div>
                        <div className='filas fila3'>
                            <button className={activeOrNot} onClick={() => { llenar((count % 2) === 0 ? amarillo : rojo, 3) }}>▼</button>
                            <div className="conteiner-columna">
                                <div className="columna">{!prueba[2] ? '' : prueba[2].map((e, index) => {
                                    return <div className={`position${index}`} key={index}>{comparing(e)}</div>
                                })}</div>
                            </div>
                            <div className="hole hole1"></div>
                            <div className="hole hole2"></div>
                            <div className="hole hole3"></div>
                            <div className="hole hole4"></div>
                            <div className="hole hole5"></div>
                            <div className="hole hole6"></div>
                        </div>
                        <div className='filas fila4'>
                            <button className={activeOrNot} onClick={() => { llenar((count % 2) === 0 ? amarillo : rojo, 4) }}>▼</button>
                            <div className="conteiner-columna">
                                <div className="columna">{!prueba[3] ? '' : prueba[3].map((e, index) => {
                                    return <div className={`position${index}`} key={index}>{comparing(e)}</div>
                                })}</div>
                            </div>
                            <div className="hole hole1"></div>
                            <div className="hole hole2"></div>
                            <div className="hole hole3"></div>
                            <div className="hole hole4"></div>
                            <div className="hole hole5"></div>
                            <div className="hole hole6"></div>
                        </div>
                        <div className='filas fila5'>
                            <button className={activeOrNot} onClick={() => { llenar((count % 2) === 0 ? amarillo : rojo, 5) }}>▼</button>
                            <div className="conteiner-columna">
                                <div className="columna">{!prueba[4] ? '' : prueba[4].map((e, index) => {
                                    return <div className={`position${index}`} key={index}>{comparing(e)}</div>
                                })}</div>
                            </div>
                            <div className="hole hole1"></div>
                            <div className="hole hole2"></div>
                            <div className="hole hole3"></div>
                            <div className="hole hole4"></div>
                            <div className="hole hole5"></div>
                            <div className="hole hole6"></div>
                        </div>
                        <div className='filas fila6'>
                            <button className={activeOrNot} onClick={() => { llenar((count % 2) === 0 ? amarillo : rojo, 6) }}>▼</button>
                            <div className="conteiner-columna">
                                <div className="columna">{!prueba[5] ? '' : prueba[5].map((e, index) => {
                                    return <div className={`position${index}`} key={index}>{comparing(e)}</div>
                                })}</div>
                            </div>
                            <div className="hole hole1"></div>
                            <div className="hole hole2"></div>
                            <div className="hole hole3"></div>
                            <div className="hole hole4"></div>
                            <div className="hole hole5"></div>
                            <div className="hole hole6"></div>
                        </div>
                        <div className='filas fila7'>
                            <button className={activeOrNot} onClick={() => { llenar((count % 2) === 0 ? amarillo : rojo, 7) }}>▼</button>
                            <div className="conteiner-columna">
                                <div className="columna">{!prueba[6] ? '' : prueba[6].map((e, index) => {
                                    return <div className={`position${index}`} key={index}>{comparing(e)}</div>
                                })}</div>
                            </div>
                            <div className="hole hole1"></div>
                            <div className="hole hole2"></div>
                            <div className="hole hole3"></div>
                            <div className="hole hole4"></div>
                            <div className="hole hole5"></div>
                            <div className="hole hole6"></div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}