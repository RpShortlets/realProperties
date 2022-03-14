import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import {useSelector, useDispatch} from "react-redux"
import styled, {css} from "styled-components/macro"
import Button from "../../components/Button/Button"
import {Pulse} from "../../components/Loader/Spinner"
import {FlexStyle} from "../../styles/globalStyles"
// import { PaymentPayStack } from '../../redux/actionCreators/actionCreators';
import { SkeletonLoader } from "../../components/Loader/Skeleton"
import { ManualPay, PaymentPayStack, RetrieveTransaction } from '../../redux/actionCreators/actionCreators';
import Dialog from "../../components/Dialog/Dialog"
import Error from '../../components/Error/Error';
import {motion } from "framer-motion"
import { BankTransferIcon } from '../../Svg/svg';
import Checkbox from '../../utils/FormElement/CheckBox';
import { OpenNotificationWithIcon } from '../../components/Notification/Notification';
import { setPaystackRequest } from '../../redux/actions/componentState';


const Header =  css`
    margin: 0;
    font-size: var(--font-small);
    font-weight: 600;
`
const Section = styled.section `
    height: 100%;
    width: 100%;
    background: #fff;
`

const Main = styled.div `
    padding: 2rem max(22vw, 1rem);

    .orderHeader {
        text-align: left;
        border-bottom: 1px solid #C4C4C4;
        margin: 0 max(1.5vw, 1rem);
        padding: max(1.2vw, 1rem) 0;

        h1{
            ${Header}
        }
    }

    .orderBody {
        margin: max(4vw, 1rem) 0;
    }

    .orderMethod {
        padding: max(1.5vw,1rem);
        margin-top: max(3vw, 1.5rem);

        h2 { ${Header} }
    }

    @media (max-width: 560px) { 
        padding: 2rem;
    }

`

const Card = styled.div `
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.3);
    border-radius: 10px;


    .orderBody {
        margin: 0 max(1.5vw, 1rem);
    }

    .labelSecond {
        margin-left: .6rem;
    }
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

    @media screen and (width:320px) {
        flex-wrap: wrap;
    }

`

const CardTotal = styled.div `
    ${FlexStyle}
    justify-content: space-between;
    border-top: 1px solid #C4C4C4;  
    /* margin-top: 1.5rem;  */
    padding: max(1.7vw, 1.2rem) 0;

    h3 {
        margin: 0;
        font-size: var(--font-small-screen);
        font-weight: 600;
    }

`

const Label = styled.label `
    border: 2px solid #2193B0;
    /* height: max(3.5vw, 1.2rem); */
    display: block;
    /* width: max(10vw, 5rem); */
    ${FlexStyle}
    padding: max(1vw, .5rem);
    justify-content: center;
    cursor: pointer;
    background-color: ${({check}) => check ? '#DCEFF4' : 'transparent'};
    transition: background-color 0.2s ease-in-out;

    svg {
        font-size: 1.2rem;
        color: ${({check}) => check ? 'var( --color-primary-dark)' : 'var(--color-primary)'};
    }

    span {
        font-size: var(--font-small-screen);
        color: ${({check}) => check ? 'var(--color-primary)' : 'var(--color-primary)'};
        margin-left: .5rem;
    }

    :disabled { 
        cursor: not-allowed;
    }

    @media screen and (max-width: 560px) {
        margin-right: 0;
    }

`

const OrderSummary = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const Id  = useParams().id;

    const {proceess, ordersummary: {Ongoing_id_info}, payStack, status} = useSelector(state => state.paymentState)
    const {paystackRequest} = useSelector(state => state.ComponentState)
    
    const [method, setmethod] = useState('transfer');
    const [showDialog, setShowDialog] = useState(false)
    const [showDialogCard, setShowDialogCard] = useState(false)
    const [terms, setTerms] = useState({terms: ''})


    // const CleaningFee =   proceess === 'loading' ? 0 : proceess === 'succeeded' && Ongoing_id_info[0]?.cleaning !== null ? Ongoing_id_info[0]?.cleaning : 0; 
    // const PickupFee =   proceess === 'loading' ? 0 : proceess === 'succeeded' && Ongoing_id_info[0]?.pickup  !== null ? Ongoing_id_info[0]?.pickup: 0;
    // const CarFee =   proceess === 'succeeded' ? Ongoing_id_info[0]?.car_rental !== null && Ongoing_id_info[0]?.car_rental : 0; 
    // const DriverFee =    proceess === 'succeeded' ?  Ongoing_id_info?.map((item) => item.driver) !== null && Ongoing_id_info?.map((item) => item.driver) : 0; 
    // const AddService =  proceess === 'succeeded' &&   parseInt(CleaningFee)  + parseInt(PickupFee);
    // const CarService =  proceess === 'succeeded' && parseInt(CarFee) + parseInt(DriverFee)



    const handleBackBtn = () => {
        navigate(-1)
    }

    const handleChange = (e) => {
        const { value, checked, name } = e.target;
        setTerms({...terms, [name]: checked ? value : ''})
    }


    //* HANDLE BUTTON CLICKED: EITHER TRANSFER OR CARD PAYMENT */
    const processPayment = () => {

        if(method === 'transfer' ) {
            if(terms.terms) {
                setShowDialog(!showDialog)
            } else {
                OpenNotificationWithIcon({
                    type: 'warning',
                    message: 'Please accept the terms and condition to proceed',
                })
            }
        } 
        else {
            console.log('Paystack2', terms)
            if(terms.terms) {
                console.log('Paystack', terms)
                setShowDialogCard(true)
            } else {
                OpenNotificationWithIcon({
                    type: 'warning',
                    message: 'Please accept the terms and condition to proceed',
                })
            }
        }
    }

    //* END OF HANDLE BUTTON CLICKED: EITHER TRANSFER OR CARD PAYMENT */

    //****DIALOG FUNCTIONS*/

    const handleCancel = () => {
        setShowDialog(false)
    }

    const handleCancelCard = () => {
        setShowDialogCard(false)
    }

    const handleProceed = () => {
        const apartmentId = Ongoing_id_info[0]?.apartment_id;
        const userId = Ongoing_id_info[0]?.id;
        const overAll = Ongoing_id_info[0]?.overall_total
        const guestId = Ongoing_id_info[0]?.guest_id;

        dispatch(ManualPay({apartmentId, userId, overAll, guestId}))
        navigate('/order-summary/payment')
        setShowDialog(false)
    }

    const handleProceedCard = () => {
        const apartmentId = Ongoing_id_info[0]?.apartment_id;
        const userId = Ongoing_id_info[0]?.id;
        const overAll = Ongoing_id_info[0]?.overall_total
        const guestId = Ongoing_id_info[0]?.guest_id;
        dispatch(PaymentPayStack({apartmentId,guestId, overAll, userId }))
        setShowDialogCard(false)
    }

    //**** END DIALOG FUNCTIONS*/

    //*** RETRIEVE ORDER SUMMARY */
    
    useEffect(() => {
        dispatch(RetrieveTransaction({Id}))
    }, [dispatch, Id])

    //*** END RETRIEVE ORDER SUMMARY */


    useEffect(() => {
        if(status === 'succeeded' && payStack?.message?.authorization_url ) {
            dispatch(setPaystackRequest(true))
    } else {
        dispatch(setPaystackRequest(false))
    }
    }, [status, payStack?.message?.authorization_url, dispatch]);

    useEffect(() => {
        if(paystackRequest) {
            window.location.href = payStack?.message?.authorization_url
            // (payStack?.message?.authorization_url)
            // setTimeout(() => {
            //     navigate('/')
            // }, 3000)
        }
    }, [paystackRequest,payStack?.message?.authorization_url, navigate])


    if(proceess === 'failed') {
        return (
            <Error title="Order summary not found" />
        )
    }




    return (
        <>
            <Dialog 
                showDialog={showDialog} 
                setShowDialog={setShowDialog} 
                title="Please note that if payment is not received within 30mins your booking will be cancelled."
                disagree="Cancel"
                agree="Continue"
                handleCancel={handleCancel}
                handleProceed={handleProceed}
            />
            <Dialog 
                showDialog={showDialogCard} 
                setShowDialog={setShowDialogCard} 
                title="You will be redirected to complete your bookings" 
                disagree="Cancel"
                agree="Confirm"
                handleCancel={handleCancelCard}
                handleProceed={handleProceedCard}
            />
            <Section>
                <Main>
                    <div className='orderBody'>
                        {proceess === 'loading' ? <SkeletonLoader width='100%' height="300px" />
                        : proceess === 'succeeded' && (
                            <Card>
                                <div className='orderHeader'>
                                    <h1>{proceess === 'loading' && <SkeletonLoader width='50%' />}{proceess === 'succeeded' && 'Order Summary'}</h1>
                                </div>
                                {Ongoing_id_info?.map((data,i) => (
                                    <div key={i} className='orderBody'>
                                        {data?.apartment_price &&  (
                                            <CardDetails>
                                                <p>{proceess === 'loading' ? <SkeletonLoader width='100%' /> : data?.apartment_price } {proceess === 'succeeded' && `x${data?.stay_length}`}{proceess === 'succeeded' ? data?.stay_length > 1 ? 'nights' : 'night' : ''} </p>
                                                {proceess === 'loading' ? <SkeletonLoader /> : <span> {data?.total_apartment_price?.toLocaleString()}</span>}
                                            </CardDetails>
                                        )}
                                        {data?.pickup  ? (
                                            <CardDetails>
                                                <p>{proceess === 'loading' ? <SkeletonLoader /> : data?.pickup  ? 'Pickup Fee' : ''}</p>
                                                <span>{proceess === 'loading' ? <SkeletonLoader /> : data?.pickup?.toLocaleString()}</span>
                                            </CardDetails>
                                        ): ""}
                                        {data?.cleaning ? (
                                            <CardDetails>
                                                <p>{proceess === 'loading' ? <SkeletonLoader /> : data?.cleaning  ? 'Cleaning Fee' : ''}</p>
                                                <span>{proceess === 'loading' ? <SkeletonLoader /> : data?.cleaning?.toLocaleString()}</span>
                                            </CardDetails>
                                        ): ""}
                                        {data?.car_rental ? (
                                            <CardDetails>
                                                <p>{proceess === 'loading' ? <SkeletonLoader /> : data?.car_rental && 'Car Rental'} </p>
                                                <span>{proceess === 'loading' ? <SkeletonLoader /> : data?.car_rental?.toLocaleString()}</span>
                                            </CardDetails>
                                        ): ''} 
                                        {data?.driver ? (
                                            <CardDetails>
                                                <p>{proceess === 'loading' ? <SkeletonLoader /> : data?.driver && 'Driver'} </p>
                                                <span>{proceess === 'loading' ? <SkeletonLoader /> : data?.driver?.toLocaleString()}</span>
                                            </CardDetails>
                                        ): ''} 
        
                                        {data?.security_deposit && (
                                            <CardDetails>
                                                <p>{proceess === 'loading' ? <SkeletonLoader /> : data?.security_deposit && 'Security Deposit'}</p>
                                                <span>{proceess === 'loading' ? <SkeletonLoader /> : data?.security_deposit?.toLocaleString()}</span>
                                            </CardDetails>
                                        )}
                                        {data?.overall_total && (
                                            <CardDetails>
                                                <p>{proceess === 'loading' ? <SkeletonLoader /> : data?.overall_total && 'Service Fee'}</p>
                                                <span style={{fontWeight: '600'}}>&#8358;{proceess === 'loading' ? <SkeletonLoader  width='100%'/> : `2,000`}</span>
                                            </CardDetails>
                                        )}
                                        {data?.overall_total && (
                                            <CardTotal>
                                                <h3>{proceess === 'loading' ? <SkeletonLoader /> : data?.overall_total && 'Total'}</h3>
                                                <span style={{fontWeight: '600'}}>&#8358;{proceess === 'loading' ? <SkeletonLoader  width='100%'/> : `${data?.overall_total?.toLocaleString()}`}</span>
                                            </CardTotal>
                                        )}
                                    </div>
                                ))}
                            </Card>
                        )}
                        {proceess === 'loading' ? <SkeletonLoader width='100%' height="200px" /> 
                        : proceess === 'succeeded' && ( 
                            <Card className='orderMethod'>
                                <div className=''>
                                    <h2>Payment Method</h2>
                                </div>
                                <div style={{display: 'flex', margin: '2rem 0'}}>
                                    <div>
                                        <Label as={motion.label} htmlFor='transfer' check={method === 'transfer'}>
                                            {BankTransferIcon}
                                            <span>Bank Transfer</span>
                                        </Label>
                                        <input 
                                            id="transfer" 
                                            type="radio" 
                                            name='transfer'
                                            value="transfer"  
                                            checked={method === 'transfer'} 
                                            onChange={(e) => setmethod(e.target.value)}
                                            style={{display: 'none'}}
                                            
                                        />
                                    </div>
                                    <div className="labelSecond">
                                        {/* <Tooltip title="This payment is currently unavailable"> */}
                                            <Label htmlFor='paystack' check={method === 'paystack'}>
                                                {BankTransferIcon}
                                                <span>Card Payment</span>
                                            </Label>
                                        {/* </Tooltip> */}
                                        <input 
                                            id="paystack" 
                                            type="radio" 
                                            name='paystack'
                                            value="paystack"
                                            checked={method === 'paystack'}
                                            onChange={(e) => setmethod(e.target.value)}
                                            style={{display: 'none'}}
                                            
                                        />
                                    </div>
                                </div>
                                <div style={{display: 'flex', alignItems: 'center', marginBottom: 'max(2vw, 1.2rem)'}}>
                                    <p style={{margin: '0 0 0 max(1vw, .6rem)', order: '2', fontSize: 'var(--font-small)'}}>I agree to the <a href="/terms" target="_blank" style={{color: 'var(--color-primary)', textDecoration: 'underline !important'}}>terms and condition</a></p>
                                    <Checkbox name="terms"  margin="0" checkboxes={terms.terms} handleChange={handleChange} />
                                </div>
                                <div style={{display: 'flex'}}>
                                    <div style={{flex: '1'}}>
                                        <Button onClicks={handleBackBtn}  fontWeight='600' width="70%" title='Back' background='var(--color-white)' borderRadius="8px"  border="2px solid #2193B0;" color='var(--color-primary)' w padding='.9rem' fontSize='var(--font-xtra-small-screen)'  />
                                    </div>
                                    <div style={{flex: '2'}}>
                                        <Button fontWeight='600' disabled={!terms.terms || proceess === 'loading'} width="100%" onClicks={processPayment} borderRadius="8px" disabledBG="var(--linear-primary)" title={proceess === 'loading' ? <Pulse color="#fff"  size="10px" /> : 'Proceed'} border="2px solid var(--color-primary);"  background='var(--linear-primary)' color='var(--color-white)' padding='.9rem' fontSize='var(--font-xtra-small-screen)'  />
                                    </div>
                                </div>
                            </Card>
                        )}
                    </div>
                </Main>
            </Section>
    
        </>
    )
};

export default OrderSummary;
