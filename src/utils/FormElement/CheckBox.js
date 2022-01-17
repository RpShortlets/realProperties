import React from "react"
import './checkbox.css'


const Checkbox = ({ checked, ...props }) => {
    return (
        <>
            <input type="checkbox" id="_checkbox" />
                <label for="_checkbox">
                    <div id="tick_mark"></div>
                </label>
        </>
    
    )
}

export default Checkbox;