import { useState, useEffect } from "react"


export default function useAddGuestTotal({adultcount, childrencount}) {
    console.log(adultcount)
    const [guest, setGuest] = useState()

    useEffect(() => {
        setGuest(adultcount + childrencount)
    }, [adultcount, childrencount]);

    return guest
}
