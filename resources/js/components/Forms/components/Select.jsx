import React, { useId } from 'react'
import PropTypes from 'prop-types'

function Select(props) {
    const {options, label, name } = props
    
    const selectId = useId()   

  return (
    <div className="form-group">
        <label htmlFor={selectId}>{label}</label>
        <select className="form-control mb-2" id={selectId} name={name} >
            <option key={`DepartmentOption`} value={``}></option>
            {options.map( (option,index) => (<option key={`DepartmentOption${index}`} value={option.name}>{option.name}</option>) )}
        </select>
    </div>
  )
}

Select.propTypes = {}

export default Select
