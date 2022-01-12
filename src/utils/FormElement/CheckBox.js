import { Checkbox } from 'antd';
import "../../styles/checkbox.css"

const CheckBox = ({label, handleCheckbox}) => {
    return (
        <>
            <Checkbox onChange={handleCheckbox}>{label}</Checkbox>
        </>
    )
}

export default CheckBox





