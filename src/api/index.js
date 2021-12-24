import axios from "axios";


const BaseURL = 'https://tranquil-tundra-47751.herokuapp.com/reservation';

export const Reservation = async(formdata, dropdown, phn, dateofbirth, arrivalDeparture) => {
    let formData = {
        firstname: formdata.firstname,
        lastname: formdata.lastname, 
        email: formdata.email, 
        dob: dateofbirth,
        doa: arrivalDeparture[0],
        dod: arrivalDeparture[1],
        phone_no: phn,  
        nationality: dropdown.nationality, 
        mode_of_id: dropdown.identification, 
        id_number: formdata.idnumber, 
        no_of_adult: dropdown.adultno, 
        room: dropdown.roomno,
        no_of_children: dropdown.childno,
    
    }

    console.log(dropdown)
    try {
        const {data} = await axios.post(BaseURL, formData);
        return data
    } catch (error) {
        return error.message
    }
}