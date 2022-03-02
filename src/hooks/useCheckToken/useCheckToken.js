import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { Logout } from "../function/Logout";


export const CheckToken = () => {
    const user = JSON.parse(localStorage.getItem('admin'))
    const [expired, setExpired] = useState(false);

    const token = user?.token;
    const decodedToken=  token && jwt_decode(token) ;

    useEffect(() => {
        const currentDate = new Date();
        if(decodedToken) {
            if (decodedToken.exp * 1000 < currentDate.getTime()) {
                setExpired(false)
                Logout()
        
            } else {
                setExpired(true)
            }
        }
            
        
    }, [ decodedToken]);

    return {expired};
}