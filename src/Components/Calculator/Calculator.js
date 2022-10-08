import {  useState } from 'react';
import "./calculator.css"

 function Calculator() {
  const [results,setResults] = useState("")
  const [AllResults,setAllResults] = useState("")


  function ResulHandler(val) {
    setResults(results + val)
  }

  function ShowResultsHandler() {
    const ShowResults = eval(results)
    setAllResults(ShowResults)
  }   


  return (
    <div className="container default-mode">
        <div className="calculator">
        <div className="numbers">
            <p id="input-digits" className="digits" >{results }</p>
            <p id="result" className="digits text-500" >{AllResults }</p>
        </div>
        <div className="btn-box">
            <div className="f-row">
            <button className="btn" onClick={()=> ResulHandler(1)} >1</button>
            <button className="btn" onClick={()=> ResulHandler(2)} >2</button>
            <button className="btn" onClick={()=> ResulHandler(3)} >3</button>
            <button className="btn green" onClick={()=> ResulHandler("+")}>+</button>
            </div>
            <div className="f-row">
            <button className="btn" onClick={()=> ResulHandler(4)}>4</button>
            <button className="btn" onClick={()=> ResulHandler(5)}>5</button>
            <button className="btn" onClick={()=> ResulHandler(6)}>6</button>
            <button className="btn green" onClick={()=> ResulHandler("-")}>-</button>
            </div>
            <div className="f-row">
            <button className="btn" onClick={()=> ResulHandler(7)}>7</button>
            <button className="btn" onClick={()=> ResulHandler(8)}>8</button>
            <button className="btn" onClick={()=> ResulHandler(9)}>9</button>
            <button className="btn green"onClick={()=> ResulHandler("*")}>x</button>
            </div>
            <div className="f-row">
            <button className="btn red" onClick={()=> {setResults("");setAllResults("")}}>C</button>
            <button className="btn" onClick={()=> ResulHandler(0)}>0</button>
            <button className="btn green"  onClick={ShowResultsHandler}>=</button>
            <button className="btn green" onClick={()=> ResulHandler("/")}>/</button>
            </div>
            <div className="f-row">  
            
            
            </div>
        </div>
        </div>
    </div>
  )
}

export default Calculator
