import { useEffect } from "react"
import  "../../styles/card.css"
import { VerifyPayStack } from "../../redux/actionCreators/actionCreators"
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from "react-router"
import styled from "styled-components"
import { BsFillCheckCircleFill,  } from "react-icons/bs"
// import { MdCancel } from 'react-icons/md'
import Button from "../../components/Button/Button"
import { SkeletonLoader } from "../../components/Loader/Skeleton"
import { useDecrypt } from "../../hooks/useEncryption/useEncryption"

const Section = styled.section `
    width: 100%;
    height: 100%;
    background: var(--color-white);
`

const Main = styled.div `
    padding: 2rem max(22vw, 1rem);

    .paymentHeader {
        text-align: center;

        svg {
            font-size: 4rem;
            color: rgba(96, 214, 106, 1);
        }

        h2 {
            margin: 0;
            font-size: var(--font-medium);
            color: rgba(0, 0, 0, 0.53);
            margin-top: max(1vw, 1rem);
        }
    }

    .paymentBody {
        text-align: center;
        margin: 1rem 0;

        p {
            color: rgba(0, 0, 0, 0.53);
            font-size: var(--font-xtra-small);
        }

        span {
            color: rgba(28, 123, 147, 1);
        }
    }

    .cardContainer {
        margin-top: max(2vw, 1.2rem);
    }

    .cardButton {
        margin: max(5vw, 2rem) 0;
        text-align: center;
    }

`

const Card = styled.div `
    
    background: #FFFFFF;
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px 10px 0px 0px;

    .cardBody {
        background: var(--color-primary);
        color: #fff;
        padding: max(1.5vw, 1rem);

        p {
            margin: 0;
            font-size: var(--font-small);
        }
    }

    .cardText {
        padding: max(1.5vw, 1rem);

        p {
            color: rgba(0, 0, 0, 0.53);
            margin: 0;
        }

        p:last-child {
            margin: 0.6rem 0;
        }

        h3 {
            color: var(--color-dark);
            font-size: var(--font-xtra-small);
            font-weight: 600;
        }
    }

`

const Verify = () => {
    const key = "@@TechnoRealProperty" 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const ref = localStorage.getItem('payref')
    
    const {decrypted} = useDecrypt(ref, key)

    console.log(decrypted)

    const {verify, status} = useSelector(state => state.paymentState)


    const GoBack = () => {
        navigate('/')
    }

    useEffect(() => {
        dispatch(VerifyPayStack(decrypted))
    }, [dispatch, decrypted])

    
    return <Section>
        {/* {verify?.message === "PaymentSuccessful" ? ( */}
            <Main>
                <div className="paymentHeader">
                    {status === 'loading' ? <SkeletonLoader width='80px' height="80px" circle={true} /> : (<BsFillCheckCircleFill />)}
                    <h2>{status === 'loading' ? <SkeletonLoader width='50%' height='25px' /> : ('Payment Received')}</h2>
                </div>
                <div className="paymentBody">
                    {status === 'loading' ? (
                        <>
                            <SkeletonLoader width='100%' height='10px' /> 
                            <SkeletonLoader width='100%' height='10px' /> 
                        </>
                    ): (
                    
                        <p>Thank you, your payment was successful. We have sent your payment details to  
                            <span> {verify?.email} </span>
                        </p>
                    
                    )}
                </div>
                <div className="cardContainer">
                    {status === 'loading' ? (
                        <SkeletonLoader width='100%' height='200px' /> 
                    ): (
                        <Card>
                            <div className="cardBody">
                                <p> Payment Details</p>
                            </div>
                            <div className="cardText">
                                <p>{verify?.email}</p>
                                <p>Billing Agreement ID:</p>
                                <h3>{verify?.payment_id}</h3>
                            </div>
                        </Card>
                    )}
                    
                </div>
                <div className="cardButton">
                    {status === 'loading' ? (
                        <>
                            <SkeletonLoader width='100%' height='50px' /> 
                        </>
                    ):(
                        <Button width='100%'  onClicks={GoBack} title="Proceed to home page" border='0' padding='1rem' background="var(--linear-primary)"  color="var(--color-white)"/>
                    )}
                </div>
            </Main>
        {/* // ): (
        //     <Main>
        //         <div className="paymentHeader">
        //             <MdCancel />
        //             <h2>Payment Unsuccessful</h2>
        //         </div>
        //         <div className="paymentBody">
        //             <p>
        //                 Oops your payment could not be completed dues to insufficient balance  
        //             </p>
        //         </div>
        //         <div className="cardButton">
        //             <Button width='100%' title="Proceed to home page" border='0' padding='1rem' background="var(--linear-primary)"  color="var(--color-white)"/>
        //         </div>
        //     </Main>
        // )} */}

    </Section>;
};

export default Verify;
