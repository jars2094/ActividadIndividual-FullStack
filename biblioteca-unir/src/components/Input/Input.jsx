import React from 'react';
import '../Input/Input.css'

function Input(obj) {
  return (
    <div>
        <div className='row m-0 pt-2'>
            <div className='col-md-12 mb-3'>
                <label><strong>{obj.textLabel}</strong></label>
            </div>

            <div className='col-md-12 items-center inputCustom mb-3'>
                <input className='inputCustom__Size'/>
            </div>            
        </div>
    </div>
  );
}

export default Input;