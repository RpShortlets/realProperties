import { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"
import styled from "styled-components"
import Button from "../../components/Button/Button"
import {Pulse} from "../../components/Loader/Spinner"
import {FlexStyle} from "../../styles/globalStyles"
import { PaymentPayStack } from '../../redux/actionCreators/actionCreators';


const Loading = styled.div`
    height: 100vh;
    width: 100%;
`

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
    const dispatch =  useDispatch();
    const {proceess, ordersummary: {Ongoing_id_info}} = useSelector(state => state.paymentState)
    const {payStack, status} = useSelector(state => state.paymentState)
    const guestId =  parseInt(localStorage.getItem('guestId'))


    

    useEffect(() => {
        if(status === 'succeeded') {
            window.open(payStack?.message?.authorization_url, '_blank')
        }
    }, [payStack?.message?.authorization_url]);

    
    if(proceess === 'loading') {
        return (
            <Loading>
                Loading....
            </Loading>
        )
    }

    

    const processPayment = () => {
        const apartmentId = Ongoing_id_info[0]?.apartment_id;
        const userId = Ongoing_id_info[0]?.id;
        const overAll = Ongoing_id_info[0]?.overall_total
        dispatch(PaymentPayStack({apartmentId, userId, overAll, guestId}))
    }

    return <Section>
        <Main>
            <div className='orderHeader'>
                <h1>Order Summary</h1>
            </div>
            <div className='orderBody'>
                <Card>
                    {Ongoing_id_info.map((data) => (
                        <div>
                            {data?.apartment_price &&  (
                                <CardDetails>
                                    <p>{data?.apartment_price} x {data?.stay_length}{data?.stay_length > 1 ? 'nights' : 'night'}</p>
                                    <span>{data?.total_apartment_price?.toLocaleString()}</span>
                                </CardDetails>
                            )}
                            {data?.cleaning && (
                                <CardDetails>
                                    <p>{data?.cleaning && 'Cleaning'}</p>
                                    <span>{data?.cleaning?.toLocaleString()}</span>
                                </CardDetails>
                            )}
                            {data?.car_rental && (
                                <CardDetails>
                                    <p>{data?.car_rental && 'Car Rental'} </p>
                                    <span>{data?.car_rental?.toLocaleString()}</span>
                                </CardDetails>
                            )} 
                            {data?.driver && (
                                <CardDetails>
                                    <p>{data?.driver && 'Driver'}</p>
                                    <span>{data?.driver?.toLocaleString()}</span>
                                </CardDetails>
                            )}
                            {data?.pickup && (
                                <CardDetails>
                                    <p>{data?.pickup && 'Pickup/Dropoff'}</p>
                                    <span>{data?.pickup?.toLocaleString()}</span>
                                </CardDetails>
                            )}
                            {data?.security_deposit && (
                                <CardDetails>
                                    <p>{data?.security_deposit && 'Security Deposit'}</p>
                                    <span>{data?.security_deposit?.toLocaleString()}</span>
                                </CardDetails>
                            )}
                            {data?.overall_total && (
                                <CardTotal>
                                    <h3>{data?.overall_total && 'Total'}</h3>
                                    <span>&#8358;{`${data?.overall_total?.toLocaleString()}`}</span>
                                </CardTotal>
                            )}

                            <Button onClicks={processPayment} disabledBG="var(--linear-primary)"  title={proceess === 'loading' ? <Pulse color="#fff"  size="10" /> : 'Confirm and pay'} border='none' background='var(--linear-primary)' color='var(--color-white)' width='100%' padding='.9rem' fontSize='var(--font-xtra-small-screen)'  />
                        </div>
                    ))}
                </Card>
            </div>
        </Main>
    </Section>;
};

export default OrderSummary;
