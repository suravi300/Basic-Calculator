import React from 'react'

function Button(props) {
    let { label, value, handleCilck} = props
    
   
  return (
    <div className="bg-blue-500 text-center border-gray-500 rounded hover:bg-violet-600 text-white">
       <div onClick={() => handleCilck (value)} className="Button">
       <div>{label}</div>
        {/* {label === "="? <button className='h-72'> {label} </button> : <div>{label}</div>} */}
      </div>
    </div>
  )
}

export default Button