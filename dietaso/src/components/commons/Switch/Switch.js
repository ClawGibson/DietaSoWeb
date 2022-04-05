import React from "react";
import './Switch.scss'
const Switch = ({rounded=false})=>{
    return (
    <label className="switch">
        <input type='checkbox'/>
            <span className="slider rounded"/>
    </label>
    );
};
export default Switch;