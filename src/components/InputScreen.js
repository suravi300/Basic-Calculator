import React from 'react'

function InputScreen(props) {
  let { inputData } = props
  return (
    <div>
        <input className="w-96 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg m-0.5" type='text' value = { inputData }/>
    </div>
  )
}

export default InputScreen