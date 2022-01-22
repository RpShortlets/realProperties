import ClipLoader from "react-spinners/ClipLoader";
import PulseLoader from "react-spinners/PulseLoader";
import DotLoader from "react-spinners/PulseLoader";
import styled from 'styled-components'

const Wait = styled.div `
    width: 100%;
    height: 100vh;
    position: relative;

    > div:first-child {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .3);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        div {
            background: #fff;
            box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 3rem;
        }
    }

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


export const Pulse = ({color, size}) => {
    return (
        <>
            <PulseLoader
                color={color ? color : "rgba(33, 147, 176, 1)"}
                loading="true" 
                size={size && size }
            />
        </>
    )
}


export const WaitLoading = () => {
    return (
        <Wait>
            <div>
                <div>
                    <DotLoader  color="rgba(33, 147, 176, 1)"/>
                    <span>Please wait while this page is loading</span>
                </div>
            </div>
        </Wait>
    )
}


