import { useState, useEffect } from "react"


export default function useAddGuestTotal({adultcount, childrencount}) {

    const [guest, setGuest] = useState()

    useEffect(() => {
        setGuest(adultcount + childrencount)
    }, [adultcount, childrencount]);

    return guest
}
