import  "../../../styles/card.css"
import { InputSelect } from "../../Input"

const Numbers = ({number, dropdown, setDropdown, rooms}) => {
    return (
        <div className="form-container-3">
            <div>
                <InputSelect  style={{paddingLeft: '10px'}} name="adultno"  value={dropdown.adultno} dropdown={dropdown} setDropdown={setDropdown} options={number} label="No. of Adult" />
            </div>
            <div>
                <InputSelect name="childno" style={{paddingLeft: '10px'}} value={dropdown.childno} dropdown={dropdown} setDropdown={setDropdown} options={number} label="No. of Children" />
            </div>
            <div>
                <InputSelect name="roomno" style={{paddingLeft: '10px'}} value={dropdown.roomno} dropdown={dropdown} setDropdown={setDropdown} options={rooms} label="Room No." />
            </div>
        </div>
    )
}

export default Numbers

