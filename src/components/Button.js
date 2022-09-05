import React from 'react'

const Button = ({labelName, content, buttonSize, handleClick}) => {
    // let buttonSize;
    // if (content === '0' ){
    //     buttonSize = "doubleWidth"
    // }
    // else if (content === '='){
    //     buttonSize = "doubleHeight"
    // }
    // else{
    //     buttonSize = "normalSize"
    // }
  return (
    <div className="Button">
        <label htmlFor={content}>{labelName}</label>
        <button 
            name={content}
            value = {content}
            type = 'text'
            className = {buttonSize}
            onClick = {(e) => handleClick({content})}
        >{content}</button>
    </div>
  );
}

export default Button