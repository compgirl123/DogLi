import React from 'react';
import '../styles/app.css'

const { selectedOption, handleOptionChange, options, defaultLabel } = props

const Filters = ({props}) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
            <select
                value={selectedOption}
                onChange={handleOptionChange}
                className = "filters"
                >
                <option value=''>{defaultLabel}</option>
                {options.map((option, index) => <option key={index} value={option}>{option}</option>)}
            </select>
        </div>
    );
};

export default Filters;
