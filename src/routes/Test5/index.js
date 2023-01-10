
import { cssWrapper } from './style';

import Comp1 from "./Comp1";
import Comp3 from "./Comp3";
import { InputContextProvider } from './context'
import { useEffect, useState } from 'react';

const question = (
  <ul>
    <li>primarily, user can input the value from <code>#mynumber</code></li>
    <li>
      please add or reduce the value by 1 when user click{' '}
      <code>#numbermin</code> and <code>#numberplus</code> button
    </li>
    <li>Show <b>ODD</b> or <b>EVEN</b> in first render section</li>
    <li>
      only show <code>#mynumber1</code> input when <code>#overwrite</code> checkbox is checked in <code>Comp1</code>
    </li>
    <li>
      user can input in <code>#mynumber1</code> and render the latest source of input in <code>Comp1</code> and it's value in{' '}<code>Comp2</code>
    </li>
    <li><code>Comp2</code> will display latest inputted from <code>#mynumber</code> &amp; <code>#mynumber1</code></li>
    <li><code>Comp3</code> will display <code>#mynumber</code></li>
    <li>show <code>Comp4</code> modal when user click <b>Show Modal</b> button in <code>Comp3</code></li>
    <li>update whole <code>input</code> and value render when user input <code>#mynumber2</code></li>
  </ul>
);

// Context


const Test5 = () => {
  const [number, setNumber] = useState("")
  const [number1, setNumber1] = useState("")
  const [number2, setNumber2] = useState("")

  useEffect(() => {
    setNumber(number2)
    setNumber1(number2)
  }, [number2])

  const handleActionButton = (value) => {
    setNumber((currentNumber) => parseInt(currentNumber) + value)
  }

  const handleSetNumber = (e, cb) => {
    const value = e.target.value
    if (!e.target.validity.valid) {
      return
    }

    cb(value)
  }

  const numberProvider = {
    number, setNumber,
    number1, setNumber1,
    number2, setNumber2,
    handleSetNumber
  }

  return (
    <div>
      {question}
      <button id="numbermin" type="button" onClick={e => handleActionButton(-1)}>-</button>
      <input
        id="mynumber"
        type="text"
        pattern="[0-9]*"
        placeholder="input mynumber"
        value={number}
        onChange={(e) => handleSetNumber(e, setNumber)}
      />
      <button id="numberplus" type="button" onClick={e => handleActionButton(1)}>+</button>
      <br />
      <br />
      <div className={cssWrapper}>
        The inputted value is [{number === "" ? "ODD/EVEN" : number % 2 === 0 ? "EVEN" : "ODD"}]*
      </div>
      <InputContextProvider value={numberProvider}>
        <Comp1 />
        <Comp3 />
      </InputContextProvider>
    </div>
  )
}

export default Test5;