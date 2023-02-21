import React from 'react'
import { useState } from 'react'

const Cal = () => {
  const [calc, setCalc] = useState('')
  const [result, setResult] = useState('')

  const ops = ['+', '-', '*', '/', '.']

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === '') ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return
    }
    setCalc(calc + value)

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString())
    }
  }

  const calculate = () => {
    setCalc(eval(calc).toString())
  }

  const deleteLast = () => {
    if (calc == '') {
      return
    }
    const value = calc.slice(0, -1)
    setCalc(value)
  }

  const CreateDigits = () => {
    const Digits = []
    for (let i = 1; i < 10; i++) {
      Digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>,
      )
    }
    return Digits
  }
  return (
    <div className="calculator">
            <h1 align='center'>Calculator</h1>
      <div className="display">
        {result ? <span>({result})</span> : ''}&nbsp;
        {calc || '0'}
      </div>
      <div className="operators">
        <button onClick={() => updateCalc('+')}>+</button>
        <button onClick={() => updateCalc('-')}>-</button>
        <button onClick={() => updateCalc('*')}>*</button>
        <button onClick={() => updateCalc('/')}>/</button>
        <button onClick={deleteLast}>Del</button>
      </div>

      <div className="digits">
        {CreateDigits()}
        <button onClick={() => updateCalc('.')}>.</button>
        <button onClick={() => updateCalc('0')}>0</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  )
}
export default Cal
