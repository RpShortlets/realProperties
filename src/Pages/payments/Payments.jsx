import { useState } from "react"
import styled from "styled-components"
import { PaddingStyle } from "../../styles/globalStyles"
import { Envelop } from "../../Svg/svg"
import {Input } from "../../utils/FormElement/Input"


const Section = styled.section `
    width: 100%;
    height: 100%;
    background: var(--color-white);
`

const Main = styled.div `
    ${PaddingStyle}

    .paymentHeader {
        h1,p {
            margin: 0;
        }

        h1 {
            font-size: var(--font-small);
            font-weight: 600;
            margin-bottom: max(1vw, .4rem);
        }

        p {
            font-size: var(--font-small-screen);
        }
    }
`
const Information = styled.div `
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 5rem;
    margin: max(7vw, 3rem) 0;

    .paymentContact {
        grid-column: 1/5;
    }

    .paymentSummary {
        grid-column: 5/8;
    }

    .paymentInputContainer {
        margin-bottom: max(2.5vw, 1.2rem);
    }

`


const Payments = () => {
    const [formdata, setFormData] = useState({card: ''})

    console.log(formdata)
    
    var num = formdata?.card; 
    
    var newNum = num?.toString()?.match(/.{4}/g)?.join(' ');

    console.log(newNum)
    return (
        <Section>
            <Main paddingleft="true" paddingRight="true">
                <div className="paymentHeader">
                    <h1>Payment details</h1>
                    <p>Complete your reservation by providing your payment details</p>
                </div>
                <Information>
                    <div className="paymentContact">
                        <form>
                            <div className="paymentInputContainer">
                                <Input type="email" placeholder="Name@Example.com" label="Email" Icon={Envelop} />
                            </div>
                            <div className="paymentInputContainer">
                                <Input type="text" placeholder="John doe" label="Cardholder name"  />
                            </div>
                            <div className="paymentInputContainer">
                                <Input type="text" placeholder="5399 5399 5399 5399" label="Card detail" name="card"  value={newNum} handleChange={(e) => setFormData({...formdata, card: e.target.value })}/>
                            </div>
                            <div style={{display: 'flex'}} className="paymentInputContainer">
                                <div style={{marginRight: 'max(4vw, 1rem)'}}>
                                    <Input type="text" placeholder="MM/YY" label="Expiration" />
                                </div>
                                <div>
                                    <Input type="text" placeholder="666" label="CVV" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="paymentSummary">
                        summary
                    </div>
                </Information>
            </Main>
        </Section>
    )
}

export default Payments
