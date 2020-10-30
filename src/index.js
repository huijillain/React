import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Checkbox() {
    const [checked, setChecked] = useState(false);

    alert(`checked: ${checked.toString()}`);
    return (
        <>
          <input type="checkbox" 
          value={checked} 
          onchange={ ()=> setChecked(checked => !checked)}/>
          {checked ? "checked" : "not checked"}
        </>
    );
}

ReactDOM.render(
    <Checkbox />,
    document.getElementById('root')
);