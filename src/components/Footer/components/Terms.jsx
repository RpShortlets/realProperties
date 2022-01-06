import { useRef } from "react"
import { NavLink } from "react-router-dom"
import { FiSend } from "react-icons/fi"
import styled from "styled-components"
import { FlexStyle } from "../../../styles/globalStyles"
import { useSelector, useDispatch } from "react-redux"
import { sendNewsLetterEmail } from "../../../redux/actions/formState"


const NewsDiv = styled.div `
    margin: 5px 0 0 0 !important;

    h4 {
        color: var(--color-white);
        margin: 0;
    }

    label {
        color: var(-color-light-gray) !important;
        font-size: .5rem !important;
        margin-left: 5px !important;
    }

    div:first-of-type {
        ${FlexStyle}

        input[type="email"] {
            border: 0;
            outline: 0;
            background: #E0E4E8;
            border-radius: 1.56294px 0px 0px 1.56294px;
            height: 25px;
            padding: 6px 15px;
            font-size: var(--font-xtraLarge-small);
            color: var(--color-dark);
            
        }

        input[type="email"]::placeholder {
            color: #808080;
        }

        button {
            background: #2193B0;
            border-radius: 0px 1.6524px 1.6524px 0px;
            height: 25px;
            padding: 5px 8px;
            border: 0;
            outline: 0;
            cursor: pointer;
        }
    }

    div:last-child {
        ${FlexStyle}
    }

    @media screen and (max-width: 768px) {

        label {
            width: 70%;
        } 
    }


`

const Terms = () => {
    const dispatch = useDispatch();
    const { newsLetterEmail } = useSelector(state => state.formState)

    const emailRef = useRef(null)
    
    const handleNewsLetter = (e) => {
        e.preventDefault()
        const form = emailRef.current
        if(form['check'].checked ) {
            dispatch(sendNewsLetterEmail(form['email'].value))
            emailRef.current['email'].value = ''
            emailRef.current['check'].checked = false
        } else {
            alert('Please check the checkbox')
        }
    }



    console.log(newsLetterEmail)

    return (
        <div style={{position: 'relative'}}>
            <div>
                <h3>Terms and Policies</h3>
                <div>
                    <div>
                        <NavLink to="/">
                            Privacy policy
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/">
                            Terms and Condtions
                        </NavLink>
                    </div>
                    <NewsDiv>
                        <h4>Newsletter</h4>
                        <form ref={emailRef}>
                            <div>
                                <input type="email" name={'email'} placeholder="Enter Your Email Adrdesss"  />
                                <button onClick={handleNewsLetter}>
                                    <FiSend />
                                </button>
                            </div>
                            <div style={{margin: '5px 0 0 0'}}>
                                <input type="checkbox" name={"check"} id="check" />
                                <label htmlFor="check">Please tick if you would like to receive prompts on special offers and more from us.</label>
                            </div>
                        </form>
                    </NewsDiv>
                    
                </div>
            </div>
        </div>
    )
}

export default Terms
