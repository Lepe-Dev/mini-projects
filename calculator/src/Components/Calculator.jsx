import { useState } from 'react';
import './calculator.css';

const Calculator = () => {
    const [ display, setDisplay ] = useState('')
    const appendToDisplay = (value) => {
        setDisplay(display + value);
    }

    const clearDisplay = () => {
        setDisplay('');
    }

    const calculateResult = () => {
        try {
            const result = eval(display);
            setDisplay(result.toString());
        } catch (err) {
            setDisplay('Syntax error');
        };
    }
    
    const deleteOneInput = () => {
        if (display.length > 1) {
            return setDisplay((prevDisplay) => prevDisplay.slice(0, -1))
        }
        if (display != 0 && display.length == 1) {
            setDisplay('')
        }
    }

    return (
        <div className='calculator'>
            <h1 className='title'>Calculator</h1>
            <input type='text' value={display} placeholder='0' className='result' />
            <br />
            <div className="buttons-container">
                <button onClick={() => appendToDisplay('7')}>7</button>
                <button onClick={() => appendToDisplay('8')}>8</button>
                <button onClick={() => appendToDisplay('9')}>9</button>
                <button onClick={() => deleteOneInput()}>«</button>
                <button onClick={() => appendToDisplay('4')}>4</button>
                <button onClick={() => appendToDisplay('5')}>5</button>
                <button onClick={() => appendToDisplay('6')}>6</button>
                <button onClick={() => appendToDisplay('-')}>-</button>
                <button onClick={() => appendToDisplay('1')}>1</button>
                <button onClick={() => appendToDisplay('2')}>2</button>
                <button onClick={() => appendToDisplay('3')}>3</button>
                <button onClick={() => appendToDisplay('+')}>+</button>
                <button onClick={() => appendToDisplay('0')}>0</button>
                <button onClick={() => appendToDisplay('*')}>x</button>
                <button onClick={() => appendToDisplay('/')}>÷</button>
                <button onClick={clearDisplay}>AC</button>
            </div>
                <button onClick={calculateResult} className='btn-result'>=</button>
        </div>
    );
};

export default Calculator;