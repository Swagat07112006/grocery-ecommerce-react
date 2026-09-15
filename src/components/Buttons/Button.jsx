import React from 'react'

const Button = ({ content, onClick, className, ...props }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`bg-orange-500 text-center text-white p-3 pl-6 pr-6 rounded-lg hover:bg-orange-400 cursor-pointer transition-all duration-200 hover:scale-105 ${className || ''}`}
      {...props}
    >
      {content}
    </button>
  )
}

export default Button