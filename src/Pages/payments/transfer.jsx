import React from 'react';
import styled from "styled-components"
import { FlexStyle, PaddingStyle } from '../../styles/globalStyles';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { CopyIcon } from '../../Svg/svg';
import { BankDetails } from './data/Bank';
import Button from '../../components/Button/Button';
import Countdown from '../../components/Countdown/Countdown';

const Section = styled.section ` 
    height: 100%;
    width: 100%;
    ${PaddingStyle}
    padding-top: 3rem;
    padding-bottom: 3rem;
` 
const Main = styled.div `
    
    .transferContainer {
        display: flex;
        justify-content: space-between;

        div {
            flex: 1;
        }

        .transferPaymentCard {
            background: #DCEFF4;
            border: 3px solid #2193B0;
            border-radius: 10px;
            padding: max(2vw, 1rem);

            h1 {
                margin: 0;
                color: var(--color-primary);
                font-weight: 600;
                font-size: var(--font-big);
            }

            p {
                margin: 0;
                font-size: var( --font-small-screen);
                color: var(--color-dark);
                margin: max(1.4vw, .8rem) 0;
            }

            .transferBody {
                ${FlexStyle}
                justify-content: space-between;
                margin: max(.8vw, .4rem) 0;

                p {
                    margin: 0;
                    font-size: var(--font-small-screen);
                }

                span {
                    font-weight: 600;
                    margin-left: max(.7vw, .5rem);
                    font-size: var( --font-xtra-small-screen);
                }

                div {
                    ${FlexStyle}
                    justify-content: end;
                }
            }

            .transferCopyIcon {
                span:last-child {
                    opacity: 0.6;
                    cursor: pointer;
                    font-size: var(--font-small);
                }

                span:last-child:hover {
                    opacity: 1;
                }
            }
        }

        .transferDesc {
            ${FlexStyle}
            justify-content: center;
            p { 
                margin: 0;
                color: var(--color-primary-dark);
                font-size: var( --font-xtra-small-screen);
            }
        }

        .transferCounter {
            ${FlexStyle}
            flex-direction: column;
            justify-content: center;
            margin-left: 3rem;

            p {
                margin: 0;
                font-size: var(--font-xtra-small-screen);
                text-align: center;
                width: 60%;
            }
        }
    }

    
`

const Transfer = () => {
    return (
        <Section paddingleft="true" paddingRight="true">
            <Main>
                <div className='transferContainer'>
                    <div className='transferPaymentCard'>
                        <h1>Pending payment</h1>
                        <p>Please transfer to the following account by using your own payment method</p>
                        <div>
                            <div >
                                {BankDetails.map((data) => (
                                    <div className='transferBody' key={data.id}>
                                        <p>{data.title}</p>
                                        <div className='transferCopyIcon'>
                                            <span>{data.value}</span>
                                            <CopyToClipboard 
                                                text={data.value}
                                                onCopy={() => alert('Copy')}
                                            >
                                                <span>{CopyIcon}</span>
                                            </CopyToClipboard>
                                        </div>
                                    </div>
                                ))}
                                
                            </div>
                            <div className='transferDesc'>
                                <p>Please include your reference code on your transfer description</p>
                            </div>
                        </div>
                    </div>
                    <div className='transferCounter'>
                        <div>
                            <Countdown />
                        </div>
                        <div style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>
                            <p>You have 30 minutes window to make payment, otherwise, the order will be canceled</p>
                        </div>
                        <div style={{display: 'contents'}}>
                            <Button title="Cancel transaction"  color="var(--color-primary)" padding=".9rem" background='transparent' border="3px solid #2193B0"/>
                        </div>
                    </div>
                </div>
            </Main>
        </Section>
    )
};

export default Transfer;
