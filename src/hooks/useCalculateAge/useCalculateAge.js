import {useState, useEffect} from 'react';


export const useCalculateAge = (birthday) => { 
    const [age, setAge] = useState();

    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        setAge(age);
    }
    useEffect(() => {
        if(birthday) { 
            getAge(birthday);
        }
    },[birthday])

    return age;
}
