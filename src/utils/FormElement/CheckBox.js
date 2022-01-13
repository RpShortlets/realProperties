// import { Checkbox } from 'antd';
import "../../styles/checkbox.css"

const CheckBox = ({checked, ...props }) => {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            {/* <Checkbox name={label} onChange={handleCheckbox} value={label}>{label}</Checkbox> */}
            <label>
                {props.label}
            </label>
            <input type="checkbox"  {...props} />
        </div>
    )
}

export default CheckBox







