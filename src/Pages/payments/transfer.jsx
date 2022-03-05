import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { FlexStyle, PaddingStyle } from '../../styles/globalStyles';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { CopyIcon, CheckedIcon } from '../../Svg/svg';
import Error from "../../components/Error/Error";
import Button from '../../components/Button/Button';
import Countdown from '../../components/Countdown/Countdown';
import { useSelector, useDispatch } from 'react-redux';
import { ManualCancel, ExpiredBooking } from '../../redux/actionCreators/actionCreators';
import {OpenNotificationWithIcon} from "../../components/Notification/Notification";
import {SkeletonLoader} from "../../components/Loader/Skeleton"
import Dialog from "../../components/Dialog/Dialog"


const Section = styled.section ` 
    height: 100%;
    width: 100%;
    ${PaddingStyle}
    padding-top: 3rem;
    padding-bottom: 3rem;
` 
const Main = styled.div `
    
    .transferContainer {
        display: block;
        

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
            margin-top: 2rem;

            p {
                margin: 0;
                font-size: var(--font-xtra-small-screen);
                text-align: center;
                width: 60%;
            }
        }
    }

    @media screen and (min-width: 769px) { 
        .transferContainer { 
            ${FlexStyle}
            justify-content: space-between;

            
        .transferCounter {
            margin-left: 3rem;
            margin-top: 0;
        }

        }
    }

    
`

const Transfer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {manualTransfer: {payment_details, pending_id, transaction_info, time }, status, manualTransfer, expiredBookings} = useSelector(state => state.paymentState);
    const pendingId = status === 'succeeded' && pending_id[0]?.max_id;
    const expiredTime =  status === 'succeeded' && time[0]?.expired_time;

    const [copied, setCopied] = useState("")
    const [showDialog, setShowDialog] = useState(false)
    
    var distance = new Date(expiredTime)?.getTime() - new Date().getTime();
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const [countDown, setCountDown] = useState(minutes)

    React.useEffect(() => {
        let timerId;
            if(minutes === 0 ) {
                dispatch(ExpiredBooking({pendingId}))
                navigate('/');
            } else {
                timerId = setInterval(() => {
                    setCountDown((countDown) => countDown - 1);
                }, 1000);
                return () => clearInterval(timerId)
            };
        }, [countDown, minutes, pendingId, dispatch, navigate]);




    const handleCancelModal = () => {
        setShowDialog(false)
    }

    const handleProceed = () => {
        dispatch(ManualCancel({pendingId}));
        navigate('/');
        setShowDialog(false)
    }


    const handleCancel = () => {
        if(parseInt(pendingId) === Number(pendingId)) {
            setShowDialog(true)
        } else {
            OpenNotificationWithIcon({
                message: 'No pending transaction',
                description: 'You have no pending transaction to cancel',
                type: 'error',
            })
        }
        
    }


    if(status === 'failed') {
        return (
            <Error  title="Something went wrong in confirming your booking"/>
        )
    }

    
    return (
        <>
            <Dialog 
                showDialog={showDialog} 
                setShowDialog={setShowDialog} 
                title="You are about to cancel your booking. Are you sure? " 
                disagree="No"
                agree="Yes"
                handleCancel={handleCancelModal}
                handleProceed={handleProceed}
            />
            <Section paddingleft="true" paddingRight="true">
                <Main>
                    {manualTransfer  ? (
                        <div className='transferContainer'>
                            <div className='transferPaymentCard'>
                                <h1>{status === 'loading' ? <SkeletonLoader width="100%" /> :  status === 'succeeded' && transaction_info[0]?.amount ? 'Pending payment' : 'No pending payment'}</h1>
                                <p>{status === 'loading' ? <SkeletonLoader width="100%" /> :  status === 'succeeded' && transaction_info[0]?.amount ? 'Please transfer to the following account by using your own payment method' : ''}</p>
                                <div>
                                    <div >
                                        
                                        <div className='transferBody' >
                                            {status === 'loading' ? <SkeletonLoader width="100%" /> : 
                                                status === 'succeeded' &&
                                                (<>
                                                    <p>Amount</p>
                                                    <div className='transferCopyIcon'>
                                                        <span>&#8358;{transaction_info[0]?.amount?.toLocaleString()}</span>
                                                            <CopyToClipboard 
                                                                text={transaction_info[0]?.amount}
                                                                onCopy={() => setCopied('amount')}
                                                            >
                                                                <span>{copied === 'amount' ? CheckedIcon : CopyIcon}</span>
                                                            </CopyToClipboard>
                                                    </div>
                                                </>)
                                            }
                                        </div>
                                        <div className='transferBody'>
                                            {status === 'loading' ? <SkeletonLoader width="100%" />  : 
                                                status === 'succeeded' &&
                                                (<>
                                                    <p>Bank Name</p>
                                                    <div className='transferCopyIcon'>
                                                        <span>{payment_details[0]?.bankname}</span>
                                                        <CopyToClipboard 
                                                            text={payment_details[0]?.bankname}
                                                            onCopy={() => setCopied('bankname')}
                                                        >
                                                            <span>{copied === 'bankname' ? CheckedIcon : CopyIcon}</span>
                                                        </CopyToClipboard>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        <div className='transferBody'>
                                            {status === 'loading' ? <SkeletonLoader width="100%" /> :
                                                status === 'succeeded' &&
                                                (<>
                                                    <p>Account Name</p>
                                                    <div className='transferCopyIcon'>
                                                        <span>{payment_details[0]?.accountname}</span>
                                                        <CopyToClipboard 
                                                            text={payment_details[0]?.accountname}
                                                            onCopy={() => setCopied('accountname')}
                                                        >
                                                            <span>{copied === 'accountname' ? CheckedIcon : CopyIcon}</span>
                                                        </CopyToClipboard>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        <div className='transferBody'>
                                            {status === 'loading' ? <SkeletonLoader width="100%" /> :
                                                status === 'succeeded' &&
                                                (<>
                                                    <p>Bank account number</p>
                                                    <div className='transferCopyIcon'>
                                                        <span>{payment_details[0]?.accountno}</span>
                                                        <CopyToClipboard 
                                                            text={payment_details[0]?.accountno}
                                                            onCopy={() => setCopied('accountno')}
                                                        >
                                                            <span>{copied === 'accountno' ? CheckedIcon : CopyIcon}</span>
                                                        </CopyToClipboard>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        <div className='transferBody'>
                                            {status === 'loading' ? <SkeletonLoader width="100%" />  :
                                                status === 'succeeded' &&
                                                (<>
                                                    <p>Reference number</p>
                                                    <div className='transferCopyIcon'>
                                                        <span>{transaction_info[0]?.payment_reference}</span>
                                                        <CopyToClipboard 
                                                            text={transaction_info[0]?.payment_reference}
                                                            onCopy={() => setCopied('payment_reference')}
                                                        >
                                                            <span>{copied === 'payment_reference' ? CheckedIcon : CopyIcon}</span>
                                                        </CopyToClipboard>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div className='transferDesc'>
                                        <p> {status === 'succeeded' &&  transaction_info[0]?.amount && 'Please include your reference number on your transfer description'}</p>
                                    </div>
                                </div>
                            </div>
                                {status === 'succeeded' &&  transaction_info[0]?.amount &&
                                    (
                                        <div className='transferCounter'>
                                            <div>
                                                <Countdown />
                                            </div>
                                            <div style={{display: 'flex', alignItems:'center', justifyContent: 'center', margin: 'max(1.2rem, .9rem) 0'}}>
                                                <p>You have 30 minutes window to make payment, otherwise, the order will be canceled</p>
                                            </div>
                                            <div style={{display: 'contents'}}>
                                                <Button onClicks={handleCancel} title="Cancel transaction"  color="var(--color-primary)" padding=".9rem" background='transparent' border="3px solid #2193B0"/>
                                            </div>
                                            </div>
                                    )
                                }
                            </div>
                        
                    ) : (
                        <Error title="No pending transaction"/>
                    )}
                </Main>
            </Section>
        </>
    )
};

export default Transfer;
