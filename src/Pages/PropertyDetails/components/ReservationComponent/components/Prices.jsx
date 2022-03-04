import { SkeletonLoader } from "../../../../../components/Loader/Skeleton"
import styled from "styled-components"
import Tooltips from "../../../../../components/Tooltip"
import { QuestionMark } from "../../../../../Svg/svg"
import {FlexStyle} from "../../../../../styles/globalStyles"



const PriceBody =  styled.div `
    display: ${({display}) => display};

    > div {
            display: flex;
            flex-direction: column;
            justify-content: center;

            div {
                display: flex;
                justify-content: space-between;
                position: relative;
                margin: 0.2rem 0;

                /* p:first-child {
                    text-decoration: underline;
                } */
            }

            p {
                font-size: var( --font-xtra-small-screen);
                margin: 0;
            }

            div:last-child {
                margin: max(1vw, 1rem) 0 0 0;
                
                p {
                    font-weight: 600;
                    text-decoration: none;
                }
            }
        }

        .pricesStyle {
            display: flex;
            justify-content: space-between;
        }

        .priceHeader {
            ${FlexStyle}
            align-items: baseline !important;

            p {
                margin-right: .2rem;
            }

            svg {
                font-size: var(--font-small);
                color: var(--color-dark);
            }
        }

    @media screen and (min-width:769px) {
        display: block;
        margin: max(1vw, 1rem) 0;

        p {
            font-size: var(--font-xtra-small-screen);
        }

        .priceHeader {
            svg {
                font-size: var(--font-small-screen);
            }
        }

    }
`

const Prices = ({price, summary_details, selectedCar, reserve, TotalAdditionalServices, TotalCarAndDriverPrice, show}) => {
    
    return (
        <PriceBody display={show ? 'block' : 'none'}>
            <div>
                <div>
                    {reserve === 'loading' ? <SkeletonLoader /> : (
                        <>
                            <p> {`${price[0]?.price === null || undefined ? '' : price[0]?.price?.toLocaleString()} x ${summary_details[0]?.stay_length === null || undefined ? '' : summary_details[0]?.stay_length }`}{summary_details[0]?.stay_length > 1 ? 'nights' : 'night'}</p>
                            <p> {`${summary_details[0]?.total_apt_price === null || undefined? '' : summary_details[0]?.total_apt_price?.toLocaleString()}`}</p>
                        </>
                    )}
                </div>
                {summary_details[0]?.security_deposit && (
                    <div>
                        <div className="priceHeader">
                            <p>{reserve === 'loading' ? <SkeletonLoader /> : summary_details[0]?.security_deposit && 'Security Deposit'} </p>
                            {reserve === 'loading' ? <SkeletonLoader /> : (
                                <>
                                    {summary_details[0]?.security_deposit&& (
                                        <Tooltips title='Refundable deposit'>
                                            <span>{QuestionMark}</span>
                                        </Tooltips> 
                                    )}
                                </>
                            )}
                            
                        </div>
                        <p>{reserve === 'loading' ? <SkeletonLoader /> :   summary_details[0]?.security_deposit && summary_details[0]?.security_deposit?.toLocaleString()}</p>
                </div>
                )}
                {summary_details[0]?.total_cleaning_price || summary_details[0]?.total_pickup_dropoff_price ? (
                    <div>
                        <div className="priceHeader">
                            <p>{reserve === 'loading' ? <SkeletonLoader /> : summary_details[0]?.total_cleaning_price || summary_details[0]?.total_pickup_dropoff_price ? 'Addtional Services' : ''}</p>
                            {reserve === 'loading' ? <SkeletonLoader /> : (
                                <>
                                    {summary_details[0]?.total_cleaning_price || summary_details[0]?.total_pickup_dropoff_price ? (
                                        <Tooltips title='Cleaning and Pickup cost'>
                                            <span>{QuestionMark}</span>
                                        </Tooltips>
                                    ): null}
                                </>
                            )}
                        </div>
                        <p>{reserve === 'loading' ? <SkeletonLoader /> : summary_details[0]?.total_cleaning_price || summary_details[0]?.total_pickup_dropoff_price ? TotalAdditionalServices?.toLocaleString() : ''}</p>
                    </div>
                ): ''}
                {selectedCar && (
                    <div>
                        <div className="priceHeader">
                            <p>{reserve === 'loading' ? <SkeletonLoader /> : selectedCar && selectedCar}</p>
                            {reserve === 'loading' ? <SkeletonLoader /> : (
                                <>
                                    {selectedCar && (
                                        <Tooltips title='Please note that the car comes with a driver'>
                                            <span>{QuestionMark}</span>
                                        </Tooltips>
                                    )}
                                </>
                            )}
                        </div>
                        <p>{reserve === 'loading' ? <SkeletonLoader /> : TotalCarAndDriverPrice && TotalCarAndDriverPrice > 0 ? TotalCarAndDriverPrice.toLocaleString() : ''}</p>
                    </div>
                )}
                
                <div>
                    <div className="priceHeader">
                        <p>{reserve === 'loading' ? <SkeletonLoader /> : 'Service Fee'}</p>
                        {reserve === 'loading' ? <SkeletonLoader /> : (
                            <Tooltips title='Cost for completing this transaction'>
                                <span>{QuestionMark}</span>
                            </Tooltips>
                        )}
                    </div>
                    <p>{reserve === 'loading' ? <SkeletonLoader /> : summary_details[0]?.transaction_fee  && summary_details[0]?.transaction_fee?.toLocaleString()}</p>
                </div>
                <div>
                    {reserve === 'loading' ? (<SkeletonLoader />) : 
                        (
                        <>
                            <p>Total</p>
                            <p>&#8358; {summary_details[0]?.total?.toLocaleString()}</p>
                        </>
                    )}
                </div>
            </div>
        </PriceBody>
    )
}

export default Prices
