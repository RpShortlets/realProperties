import ClipLoader from "react-spinners/ClipLoader";
import PulseLoader from "react-spinners/PulseLoader";

export const Clip = ({type}) => {
    return (
        <>
            <ClipLoader
                color="rgba(33, 147, 176, 1)"
                loading="true" 
            />
        </>
    )
}


export const Pulse = () => {
    return (
        <>
            <PulseLoader
                color="rgba(33, 147, 176, 1)"
                loading="true" 
            />
        </>
    )
}


