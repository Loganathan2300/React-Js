import './Calculator.css';
import React, { useState } from 'react';

function Calculator() {
    const [displayValue, setDisplayValue] = useState(''); //useeffect 
  
    const displayNumber = (num) => {
      setDisplayValue((prevValue) => prevValue + num);
    };
  
    const clearAll = () => {
      setDisplayValue('');
    };
  
    const del = () => {
      setDisplayValue((prevValue) => prevValue.slice(0, -1));
    };
  
    const calculateResult = () => {
      try {
        const result = new Function('return ' + displayValue)();    // Use the Function constructor to safely evaluate mathematical expressions
        setDisplayValue(result.toString());    // Update the display value with the result
      } catch (error) {
        alert('Invalid');
      }
    };
  
    return (
  
      <div className='container-fluid'>
        <h1 className='mx-5'>Calculator Task</h1>
        <div className='text-center mx-5'>
        <div className="p">
          <div>
            <input type="text"  className="p1 text-end" placeholder="" value={displayValue} readOnly />
          </div>
          <div>
            <button className="p2" onClick={() => displayNumber('1')}>1</button>
            <button className="p2" onClick={() => displayNumber('2')}>2</button>
            <button className="p2" onClick={() => displayNumber('3')}>3</button>
            <button className="p2" onClick={() => displayNumber('+')}>+</button>
          </div>
          <div>
            <button className="p2" onClick={() => displayNumber('4')}>4</button>
            <button className="p2" onClick={() => displayNumber('5')}>5</button>
            <button className="p2" onClick={() => displayNumber('6')}>6</button>
            <button className="p2" onClick={() => displayNumber('-')}>-</button>
          </div>
          <div>
            <button className="p2" onClick={() => displayNumber('7')}>7</button>
            <button className="p2" onClick={() => displayNumber('8')}>8</button>
            <button className="p2" onClick={() => displayNumber('9')}>9</button>
            <button className="p2" onClick={() => displayNumber('*')}>×</button>
          </div>
          <div>
            <button className="p2" onClick={() => displayNumber('/')}>÷</button>
            <button className="p2" onClick={() => displayNumber('0')}>0</button>
            <button className="p2" onClick={() => displayNumber('.')}>.</button>
            <button className="p2" onClick={calculateResult}>=</button>
          </div>
          <div className="p3">
            <button className="p4" onClick={clearAll}>CLEAR ALL</button>&nbsp;&nbsp;
            <button className="p5" onClick={del}>DEL</button>
          </div>
        </div>
        </div>
      </div>
    );
  }
  
export default Calculator

// import { useState } from 'react';
// import '../CSS/calculator.css';
// import * as math from 'mathjs';

// const Calculator = () => {
//     // const [result, setResult] = useState('');

//     // function calculate() {

//     //     try {
//     //         const evaluatedResult = math.evaluate(result);
//     //         setResult(evaluatedResult.toString());
//     //     } catch (error) {
//     //         setResult('Error');
//     //     }
//     // }
//     // function display(val) {
//     //     if (val === 'sqrt') {

//     //         try {
//     //             const number = math.evaluate(result);
//     //             const sqrtResult = Math.sqrt(number).toFixed(5);
//     //             setResult(`${sqrtResult}`);
//     //         } catch (error) {
//     //             setResult('Error');
//     //         }
//     //     } else if (val === 'cbrt') {

//     //         try {
//     //             const number = math.evaluate(result);
//     //             const cbrtResult = Math.cbrt(number).toFixed(5);
//     //             setResult(`${cbrtResult}`);
//     //         } catch (error) {
//     //             setResult('Error');
//     //         }
//     //     } 
//     //     else if (val === 'sin' || val === 'cos' || val === 'tan') {
//     //         // Handle trigonometric functions separately
//     //         try {
//     //             const number = math.evaluate(result);
//     //             const trigResult = math[val](number * (Math.PI / 180)).toFixed(5);
//     //             setResult(` ${trigResult}`);
//     //         } catch (error) {
//     //             setResult('Error');
//     //         }
//     //     } else if (val === '%') {
            
//     //         try {
//     //             const number = math.evaluate(result);
//     //             const percentResult = (number / 100).toFixed(5);
//     //             setResult(` ${percentResult}`);
//     //         } catch (error) {
//     //             setResult('Error');
//     //         }
//     //     }else {
//     //         setResult((prevResult) => prevResult + val);
//     //     }
//     // }
//     // function clearResult() {
//     //     setResult('');
//     // }

//     return (
//         <>
//             <div className="main-body">
//                 <div className="calc-body m-auto">

//                     <div className="calc-screen">

//                         <input type="text" id="calc-typed" value={result} />
//                     </div>

//                     <div className="calc-button-row" >

//                         <button className="ac" value="clr" onClick={clearResult}>AC</button>
//                         <button className="opt" value="sqrt" onClick={() => display('sqrt')}>√</button>
//                         <button className="opt" value="cbrt" onClick={() => display('cbrt')}>∛</button>
//                         <button className="opt" value="/" onClick={() => display('/')}>÷</button>

//                         <button className="opt" value="sin" onClick={() => display('sin')}>Sin</button>
//                         <button className="opt" value="cos" onClick={() => display('cos')}>Cos</button>
//                         <button className="opt" value="tan" onClick={() => display('tan')}>Tan</button>
//                         <button className="opt" value="%" onClick={() => display('%')}>%</button>


//                         <button value="7" onClick={() => display('7')}>7</button>
//                         <button value="8" onClick={() => display('8')}>8</button>
//                         <button value="9" onClick={() => display('9')}>9</button>
//                         <button className="opt" value="*" onClick={() => display('*')}>×</button>
//                         <button value="4" onClick={() => display('4')}>4</button>
//                         <button value="5" onClick={() => display('5')}>5</button>
//                         <button value="6" onClick={() => display('6')}>6</button>
//                         <button className="opt" value="-" onClick={() => display('-')}>-</button>
//                         <button value="1" onClick={() => display('1')}>1</button>
//                         <button value="2" onClick={() => display('2')}>2</button>
//                         <button value="3" onClick={() => display('3')}>3</button>
//                         <button className="opt" value="+" onClick={() => display('+')}>+</button>
//                         <button value="0" onClick={() => display('0')}>0</button>
//                         <button value="00" onClick={() => display('00')}>00</button>
//                         <button value="." onClick={() => display('.')}>.</button>
//                         <button className="opt" onClick={calculate}>=</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
// export default Calculator;


