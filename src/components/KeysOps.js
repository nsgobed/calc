import React from 'react';
import Button from './Button';

const KeysOps = ({handleClick, handleClear, handleSign}) => {
  return (
    <div className='Keysops'>
      <Button labelName={'Clear'} content={'C'} buttonSize={'normalSize'} handleClick={handleClear}/>
      <Button labelName={'Sign'} content={'+/-'} buttonSize={'normalSize'} handleClick={handleSign}/>
      <Button labelName={'Divide'} content={'/'} buttonSize={'normalSize'} handleClick={handleClick}/>
      <Button labelName={'Multiply'} content={'*'} buttonSize={'normalSize'} handleClick={handleClick}/>
      <Button labelName={'Seven'} content={'7'} buttonSize={'normalSize'}handleClick={handleClick}/>
      <Button labelName={'Eight'} content={'8'} buttonSize={'normalSize'} handleClick={handleClick}/>
      <Button labelName={'Nine'} content={'9'} buttonSize={'normalSize'} handleClick={handleClick}/>
      <Button labelName={'Subract'} content={'-'} buttonSize={'normalSize'} handleClick={handleClick}/>
      <Button labelName={'Four'} content={'4'} buttonSize={'normalSize'} handleClick={handleClick}/>
      <Button labelName={'Five'} content={'5'} buttonSize={'normalSize'} handleClick={handleClick}/>
      <Button labelName={'Six'} content={'6'} buttonSize={'normalSize'} handleClick={handleClick}/>
      <Button labelName={'Add'} content={'+'} buttonSize={'normalSize'} handleClick={handleClick}/>
      <Button labelName={'One'} content={'1'} buttonSize={'normalSize'} handleClick={handleClick}/>
      <Button labelName={'Two'} content={'2'} buttonSize={'normalSize'} handleClick={handleClick}/>
      <Button labelName={'Three'} content={'3'} buttonSize={'normalSize'} handleClick={handleClick}/>
      <Button labelName={'Equals'} content={'='} buttonSize={'doubleHeight'} handleClick={handleClick}/>      
      <Button labelName={'DoubleZero'} content={'00'} buttonSize={'normalSize moveButton moveLeft'} handleClick={handleClick}/>
      <Button labelName={'Zero'} content={'0'} buttonSize={'normalSize moveButton move3Left' } handleClick={handleClick}/>
      <Button labelName={'Decimal'} content={'.'} buttonSize={'normalSize moveButton move5Left'} handleClick={handleClick}/>
    </div>
  )
}

export default KeysOps