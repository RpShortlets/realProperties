import ClipLoader from "react-spinners/ClipLoader";
import PulseLoader from "react-spinners/PulseLoader";
import styled from 'styled-components'

const Wait = styled.div `
    width: 100%;
    height: 100vh;

`

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


export const WaitLoading = () => {
    return (
        <Wait>
            <div>
                <div>
                    <ClipLoader />
                    <span>Please wait while this page is loading</span>
                </div>
            </div>
        </Wait>
    )
}


