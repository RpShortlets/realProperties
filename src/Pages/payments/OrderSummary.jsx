import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import {useSelector, useDispatch} from "react-redux"
import styled from "styled-components"
import Button from "../../components/Button/Button"
import {Pulse} from "../../components/Loader/Spinner"
import {FlexStyle} from "../../styles/globalStyles"
// import { PaymentPayStack } from '../../redux/actionCreators/actionCreators';
import { SkeletonLoader } from "../../components/Loader/Skeleton"
import { ManualPay, RetrieveTransaction } from '../../redux/actionCreators/actionCreators';
import Error from '../../components/Error/Error';


const Section = styled.section `
    height: 100%;
    width: 100%;
    background: #fff;
`

const Main = styled.div `
    padding: 2rem max(22vw, 1rem);

    .orderHeader {
        text-align: center;

        h1 {
            margin: 0;
            font-size: var(--font-medium);
            
        }
    }

    .orderBody {
        margin: max(4vw, 1rem) 0;
    }
`

const Card = styled.div `
    border: 2px solid #2193B0;
    border-radius: 10px;
    padding: max(2vw, 1rem);

`

const CardDetails =  styled.div `
    ${FlexStyle}
    justify-content: space-between;
    margin: max(1vw, 1rem) 0;

    p {
        font-size: var(--font-small-screen);
        color: var(--color-dark);
        margin: 0;
        flex: 1;
    }

    span {
        font-size: var(--font-xtra-small-screen);
    }

`

const CardTotal = styled.div `
    ${FlexStyle}
    justify-content: space-between;
    border-top: 1px solid #C4C4C4;;  
    margin-top: 1.5rem; 
    padding: 20px 0;

    h3 {
        margin: 0;
        font-size: var(--font-small-screen);
        font-weight: 600;
    }

`

const OrderSummary = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const Id  = useParams().id;

    const {proceess, ordersummary: {Ongoing_id_info}} = useSelector(state => state.paymentState)
    // const {payStack, status} = useSelector(state => state.paymentState)
    const guestId =  parseInt(localStorage.getItem('guestId'))
    const [addtionService, setAddtionalService] = useState();



    // const CleaningFee =  proceess === 'loading' ? 0 : proceess === 'succeeded' ? Ongoing_id_info[0]?.cleaning && Ongoing_id_info[0]?.cleaning : 0;
    // const PickupFee =    proceess === 'loading' ? 0 : proceess === 'succeeded' ? Ongoing_id_info[0]?.pickup && Ongoing_id_info[0]?.pickup : 0; 

    // useEffect(() => {
    //     if(status === 'succeeded') {
    //         window.open(payStack?.message?.authorization_url, '_blank')
    //     }
    // }, [payStack?.message?.authorization_url]);

    

    const processPayment = () => {
        const apartmentId = Ongoing_id_info[0]?.apartment_id;
        const userId = Ongoing_id_info[0]?.id;
        const overAll = Ongoing_id_info[0]?.overall_total
        dispatch(ManualPay({apartmentId, userId, overAll, guestId}))
        navigate('/order-summary/payment')
    }

    // const showConfirm = () => {
    //     // window.confirm('You\'re being redirected' )
    //     if (window.confirm("You're being redirected") === true) {
    //         processPayment()
    //         } else {
    //         console.log('No')
    //     }
    // }

    // const handleTransfer =() => {
        
    // }
    
    useEffect(() => {
        dispatch(RetrieveTransaction({Id}))
    }, [dispatch, Id])

    // useEffect(() => {
        
    //     setAddtionalService(CleaningFee + PickupFee)
        
    // }, [CleaningFee, PickupFee, proceess]);

    if(proceess === 'failed') {
        return (
            <Error title="Order summary not found" />
        )
    }

    return (
        <>
            <Section>
                <Main>
                    <div className='orderHeader'>
                        <h1>{proceess === 'loading' && <SkeletonLoader width='50%' />}{proceess === 'succeeded' && 'Order Summary'}</h1>
                    </div>
                    <div className='orderBody'>
                        {proceess === 'loading' ? <SkeletonLoader width='100%' height="300px" />
                        : proceess === 'succeeded' && (
                            <Card>
                                {Ongoing_id_info?.map((data,i) => (
                                    <div key={i}>
                                        {data?.apartment_price &&  (
                                            <CardDetails>
                                                <p>{proceess === 'loading' ? <SkeletonLoader width='100%' /> : data?.apartment_price } {proceess === 'succeeded' && `x${data?.stay_length}`}{proceess === 'succeeded' ? data?.stay_length > 1 ? 'nights' : 'night' : ''} </p>
                                                {proceess === 'loading' ? <SkeletonLoader /> : <span> {data?.total_apartment_price?.toLocaleString()}</span>}
                                            </CardDetails>
                                        )}
                                        {data?.cleaning && (
                                            <CardDetails>
                                                <p>{proceess === 'loading' ? <SkeletonLoader /> : data?.car_rental || data?.pickup  ? 'Additional Services' : ''}</p>
                                                <span>{proceess === 'loading' ? <SkeletonLoader /> : parseInt(data?.car_rental) + parseInt(data?.pickup)}</span>
                                            </CardDetails>
                                        )}
                                        {data?.car_rental && (
                                            <CardDetails>
                                                <p>{proceess === 'loading' ? <SkeletonLoader /> : data?.car_rental && 'Car Rental'} </p>
                                                <span>{proceess === 'loading' ? <SkeletonLoader /> : data?.car_rental?.toLocaleString()}</span>
                                            </CardDetails>
                                        )} 
                                        {data?.driver && (
                                            <CardDetails>
                                                <p>{proceess === 'loading' ? <SkeletonLoader /> : data?.driver && 'Driver'}</p>
                                                <span>{proceess === 'loading' ? <SkeletonLoader /> : data?.driver?.toLocaleString()}</span>
                                            </CardDetails>
                                        )}
                                        {data?.security_deposit && (
                                            <CardDetails>
                                                <p>{proceess === 'loading' ? <SkeletonLoader /> : data?.security_deposit && 'Security Deposit'}</p>
                                                <span>{proceess === 'loading' ? <SkeletonLoader /> : data?.security_deposit?.toLocaleString()}</span>
                                            </CardDetails>
                                        )}
                                        {data?.overall_total && (
                                            <CardTotal>
                                                <h3>{proceess === 'loading' ? <SkeletonLoader /> : data?.overall_total && 'Total'}</h3>
                                                <span>&#8358;{proceess === 'loading' ? <SkeletonLoader  width='100%'/> : `${data?.overall_total?.toLocaleString()}`}</span>
                                            </CardTotal>
                                        )}
                                        <div style={{display: 'flex', justifyContent: 'center'}}>
                                            <Button onClicks={processPayment} disabled={proceess === 'loading'}  disabledBG="var(--linear-primary)" title={proceess === 'loading' ? <Pulse color="#fff"  size="10" /> : 'Proceed'} border='none' background='var(--linear-primary)' color='var(--color-white)' width='50%' padding='.9rem' fontSize='var(--font-xtra-small-screen)'  />
                                        </div>
                                    </div>
                                ))}
                            </Card>
                        )}
                    </div>
                </Main>
            </Section>
    
        </>
    )
};

export default OrderSummary;
