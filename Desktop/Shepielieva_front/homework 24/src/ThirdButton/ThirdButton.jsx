import './ThirdButton.css'
import React from 'react'

export default function ThirdButton({ onReset, disabled }) {
    return (
      <button onClick={onReset} disabled={disabled} className='myBtnThird'>
        Reset
      </button>
    );
  }  

