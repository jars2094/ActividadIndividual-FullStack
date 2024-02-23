import React from 'react';
import '../DropDownList/DropDownList.css'

function DropDownList({ texto, options, handleChange, mapping, name, id}) {
  return (
    <div>
        <div className='row m-0 pt-2'>
            <div className='col-md-12 mb-3'>
                <label htmlFor={id === "" || id === null ? undefined : id}><strong>{texto}</strong></label>
            </div>

            <div className='col-md-12 items-center dropDownCustom mb-3'>
                <select id={id === "" || id === null ? undefined : id}  name={name === "" || name === null ? undefined : name} className='dropDownCustom__Size' onChange={handleChange}>
                    <option value="">Seleccione una opción...</option>
                    {options.map((option, index) => (
                        <option key={index} value={option[mapping.value]}>
                            {option[mapping.label]}
                        </option>
                    ))}
                </select>
            </div>            
        </div>
    </div>
  
  );
}

export default DropDownList;