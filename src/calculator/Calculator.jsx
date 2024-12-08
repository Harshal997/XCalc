import React, { useState } from 'react'
import styles from './calculator.module.css'

export const Calculator = () => {
    const [value, setValue] = useState("");
    const [evaluatedVal, setEvaluatedVal] = useState("");

    const handleEvaluation = (e) => {
        if(!value) {
            setEvaluatedVal("Error");
            return;
        }
        setEvaluatedVal(eval(value));
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh'}}>
            <h1>React Calculator</h1>
            <input type="text" value={value} style={{marginBottom: 1}} onChange={(e) => setValue(e.target.value)} />
            <p>{evaluatedVal}</p>
            <div className={styles.container}>
                <button onClick={(e) => setValue((prevValue) => prevValue+e.target.innerText)}>7</button>
                <button onClick={(e) => setValue((prevValue) => prevValue+e.target.innerText)}>8</button>
                <button onClick={(e) => setValue((prevValue) => prevValue+e.target.innerText)}>9</button>
                <button onClick={(e) => setValue((prevValue) => prevValue+e.target.innerText)}>+</button>
                <button onClick={(e) => setValue((prevValue) => prevValue+e.target.innerText)}>4</button>
                <button onClick={(e) => setValue((prevValue) => prevValue+e.target.innerText)}>5</button>
                <button onClick={(e) => setValue((prevValue) => prevValue+e.target.innerText)}>6</button>
                <button onClick={(e) => setValue((prevValue) => prevValue+e.target.innerText)}>-</button>
                <button onClick={(e) => setValue((prevValue) => prevValue+e.target.innerText)}>1</button>
                <button onClick={(e) => setValue((prevValue) => prevValue+e.target.innerText)}>2</button>
                <button onClick={(e) => setValue((prevValue) => prevValue+e.target.innerText)}>3</button>
                <button onClick={(e) => setValue((prevValue) => prevValue+e.target.innerText)}>*</button>
                <button onClick={(e) => {setValue(""); setEvaluatedVal("")}}>c</button>
                <button onClick={(e) => setValue((prevValue) => prevValue+e.target.innerText)}>0</button>
                <button onClick={(e) => handleEvaluation(e)}>=</button>
                <button onClick={(e) => setValue((prevValue) => prevValue+e.target.innerText)}>/</button>
            </div>
        </div>
    )
}
