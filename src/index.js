import React, {
    useState,
} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Checkbox() {
    const [checked, setChecked] = useState(false);

    function toggle() {
      setChecked(checked => !checked)
    }

    return (
       <>
       <input 
       type="checkbox" 
       value={checked}
       onChange={toggle}
        />
       {checked ? "checked" : "not checked"}
       </>
    );
}

ReactDOM.render(
    <Checkbox />,
    document.getElementById('root')
);