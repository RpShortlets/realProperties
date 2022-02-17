import { useState, useEffect } from "react"


export default function useAddGuestTotal({adultcount, childrencount, AdultMinuss}) {

    const [guest, setGuest] = useState()
    const CheckChild = AdultMinuss ?  adultcount === AdultMinuss ? 0 :  childrencount : childrencount;
    useEffect(() => {
        setGuest(adultcount + CheckChild)
    }, [adultcount, CheckChild]);

    return guest
}
