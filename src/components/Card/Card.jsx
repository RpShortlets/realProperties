import { useState, useEffect } from "react"
import  "../../styles/card.css"
import { Country } from "../../Data/Country"
import Modal  from "../Modal"
import Button from "../Button"
import Image from "../../Svg/pana.svg"
import Names from "./components/Names"
import Email from "./components/Email"
import Nationality from "./components/Nationality"
import Identification from "./components/Identification"
import Dates from "./components/Date"
import Numbers from "./components/Numbers"

const id = ['Internation Passport', 'Driver\'s License', 'Voter\'s Card', 'National ID', 'Others']
const number = ['1', '2', '3', '4', '5']
const rooms = ['A4', 'C4']

const Card = () => {
    const [formdata, setFormData] = useState({firstname: "", lastname: "", email: "", date: "", idnumber: "",  dateDeparture: ""})
    const [dropdown, setDropdown] = useState({identification: "", adultno: "", childno: "", roomno:"", nationality: ""})
    const [phn, setPhone] = useState("")
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [nationDate, setNationDate] = useState(new Date());
    const [show, setShow] = useState(false)
    const countryList = Country.map((x) => x.name)

    
    const handleSubmission = (e) => {
        e.preventDefault();

        console.log(formdata, phn)
        console.log(dropdown)

    }

    useEffect(() => {
        if(show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [show])
    return (
        <>
            <Modal  show={show} setShow={setShow}>
                <div className="Modal-content">
                    <div className="Modal-svg">
                        <img src={Image} alt="" />
                    </div>
                    <div className="Modal-header">
                        <h2>Your reservation has been booked</h2>
                    </div>
                    <div>
                        <Button  text="Continue" onClicks={() => setShow(false)} style={{width: '50%'}} styles={{display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}/>
                    </div>
                </div>
            </Modal>
            <div className="card-container">
                <div className="card">
                    <h1 className="card-h1">Make a Reservation</h1>
                    <form onSubmit={handleSubmission}>
                        <Names formdata={formdata} setFormData={setFormData} />
                        <Email  phn={phn} setPhone={setPhone} formdata={formdata} setFormData={setFormData}  />
                        <Nationality dropdown={dropdown} setDropdown={setDropdown} countryList={countryList} setNationDate={setNationDate} nationDate={nationDate} />
                        <Identification  dropdown={dropdown} setDropdown={setDropdown} id={id} formdata={formdata} setFormData={setFormData}/>
                        <Dates startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} />
                        <Numbers rooms={rooms} number={number} dropdown={dropdown} setDropdown={setDropdown} />
                        <Button  text="Book Reservation" onClicks={() => setShow(true)} styles={{margin: '2rem 0  1rem'}}/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Card
