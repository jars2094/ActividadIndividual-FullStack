import React from 'react';
import '../DropDownList/DropDownList.css'

function DropDownList({ texto, options, handleChange }) {
  return (
    <div>
        <div className='row m-0 pt-2'>
            <div className='col-md-12 mb-3'>
                <label><strong>{texto}</strong></label>
            </div>

            <div className='col-md-12 items-center dropDownCustom mb-3'>
                <select className='dropDownCustom__Size' onChange={handleChange}>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>            
        </div>
    </div>
  
  );
}

export default DropDownList;