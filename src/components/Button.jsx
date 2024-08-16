import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({
    isDisabled,
    btnType, containerStyle, textStyle, title, rightIcon, handleClick
}) => {
    const nav=useNavigate();
    return (
        <button disabled={isDisabled ?? false}
            type={btnType || "button"}
            className={`custom-btn ${containerStyle}`}
            onClick={handleClick}
            style={{color:"white"}}
        >
            <span className='flex-1'>{title}</span>
            {rightIcon && <div className='relative w-6 h-6'>
                {rightIcon}
            </div>}
        </button>
    )
}

export default Button