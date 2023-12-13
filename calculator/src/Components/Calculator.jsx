import { useState } from 'react';
import './calculator.css'

const Calculator = () => {
    const [ result, setResult ] = useState(0)
    let text = ''
    const displaySimbols = (simbol) => {
        text += simbol
    }

    const numOne = () => {
        setResult(result + 1)
    }

    return (
        <div className='calculator'>
            <h1 className='title'>Calculator</h1>
            <h2 className='result'>{text}</h2>
            <br />
            <div className="buttons-container">
                <button onClick={displaySimbols('1')}>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>-</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>*</button>
                <button>0</button>
                <button>/</button>
                <button>=</button>
                <button>AC</button>
            </div>
        </div>
    );
};

export default Calculator;