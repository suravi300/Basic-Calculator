import React from 'react'
import Button from './Button'

function ButtonPannel(props) {
  
 let { handleCilck } = props

  return (
    <>
    <div className="h-64 grid grid-rows-3 grid-flow-col gap-4">
      <Button handleCilck = {handleCilck} label="1" value="1"/>
      <Button handleCilck = {handleCilck} label="5" value="5"/>
      <Button handleCilck = {handleCilck} label="9" value="9"/>
      <Button label="2" value="2"/>
      <Button label="6" value="6"/>
      <Button label="0" value="0"/>
      <Button label="3" value="3"/>
      <Button label="7" value="7"/>
      <Button label="." value="."/>
      <Button label="4" value="4"/>
      <Button label="8" value="8"/>
      <Button label="(" value="("/>
      <Button label="+" value="+"/>
      <Button label="x" value="*"/>
      <Button label=")" value=")"/>
      <Button label="__" value="-"/>
      <Button label="/" value="/"/>
      <Button label="C" value="c"/>
      <Button label="=" value="="/>
    </div>
   
    </>
  )
}

export default ButtonPannel