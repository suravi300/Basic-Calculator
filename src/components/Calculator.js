import React, { useState } from 'react'
import InputScreen from './InputScreen'
import DisplayScreen from './DisplayScreen'
import Button from './Button'
// import  from "mathjs";



function Calculator() {

  let [inputData, setInputData] = useState("")
  let [result, setResult] = useState("")

  const addText = (value) => {
    console.log("onClickHandler data", value)
    setInputData(inputData.concat(value))
  }

  const handleClearText = () => {
    setInputData("")
    setResult("")
  }

  const getResult = () => {
    console.log("inputData", inputData)
    // const input = inputData.join(",");

    setResult(eval(inputData));
  }

  return (
    <>
      <div className="container sm">
        <h2 className="text-3xl font-bold underline">Basic Calculator</h2>
        <InputScreen inputData={inputData} />
        <DisplayScreen result={result} />
        <div className="grid grid-cols-4 gap-4 ">
          <div><Button handleCilck={addText} label="1" value="1" /></div>
          <div><Button handleCilck={addText} label="2" value="2" /></div>
          <div><Button handleCilck={addText} label="3" value="3" /></div>
          <div><Button handleCilck={addText} label="+" value="+" /></div>

          <div><Button handleCilck={addText} label="4" value="4" /></div>
          <div><Button handleCilck={addText} label="5" value="5" /></div>
          <div><Button handleCilck={addText} label="6" value="6" /></div>
          <div><Button handleCilck={addText} label="-" value="-" /></div>

          <div><Button handleCilck={addText} label="7" value="7" /></div>
          <div><Button handleCilck={addText} label="8" value="8" /></div>
          <div><Button handleCilck={addText} label="9" value="9" /></div>
          <div><Button handleCilck={addText} label="*" value="*" /></div>

          <div><Button handleCilck={addText} label="0" value="0" /></div>
          <div><Button handleCilck={addText} label="." value="." /></div>
          <div><Button handleCilck={getResult} label="=" value="=" /></div>
          <div><Button handleCilck={addText} label="/" value="/" /></div>

          <div onClick={handleClearText} class="tile bg-yellow-500 col-span-full text-center rounded ">
            <h1 class="tile-marker text-Red ">Clear</h1>
          </div>
        </div>
      </div>

    </>

  )
}

export default Calculator