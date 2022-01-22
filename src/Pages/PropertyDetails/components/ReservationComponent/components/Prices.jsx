import { SkeletonLoader } from "../../../../../components/Loader/Skeleton"
import styled from "styled-components"

const PriceBody =  styled.div `
    display: none;

    @media screen and (min-width:769px) {
        display: block;
        margin: max(1vw, 1rem) 0;

        > div {
            display: flex;
            flex-direction: column;
            justify-content: center;

            div {
                display: flex;
                justify-content: space-between;
                margin: 0.2rem 0;

                p:first-child {
                    text-decoration: underline;
                }
            }

            p {
                margin: 0;
                font-size: var(--font-xtra-small-screen);
            }

            div:last-child {
                margin: max(1vw, 1rem) 0 0 0;
                
                p {
                    font-weight: 600;
                    text-decoration: none;
                }
            }
        }

    }
`

const Prices = ({price, summary_details, selectedCar, status, radio}) => {
    return (
        <PriceBody>
            <div>
                <div>
                    {status === 'loading' ? <SkeletonLoader /> : (
                        <>
                            <p> {`${price[0]?.price === null || undefined ? '' : price[0]?.price?.toLocaleString()} x ${summary_details[0]?.stay_length === null || undefined ? '' : summary_details[0]?.stay_length }nights`}</p>
                            <p> {`${summary_details[0]?.total_apt_price === null || undefined? '' : summary_details[0]?.total_apt_price?.toLocaleString()}`}</p>
                        </>
                    )}
                    
                </div>
                <div>
                    <p>{status === 'loading' ? <SkeletonLoader /> : summary_details[0]?.total_cleaning_price && 'Cleaning Services'}</p>
                    <p>{status === 'loading' ? <SkeletonLoader /> : summary_details[0]?.total_cleaning_price?.toLocaleString()}</p>
                </div>
                <div>
                    <p>{status === 'loading' ? <SkeletonLoader /> : summary_details[0]?.total_pickup_dropoff_price && 'Pickup/Drop Off'}</p>
                    <p>{status === 'loading' ? <SkeletonLoader /> : summary_details[0]?.total_pickup_dropoff_price?.toLocaleString()}</p>
                </div>
                <div>
                    <p>{status === 'loading' ? <SkeletonLoader /> : selectedCar && selectedCar}</p>
                    <p>{status === 'loading' ? <SkeletonLoader /> : summary_details[0]?.total_car_price && summary_details[0]?.total_car_price?.toLocaleString()}</p>
                </div>
                <div>
                    <p style={{textTransform: 'capitalize'}}>{status === 'loading' ? <SkeletonLoader /> : radio && radio}</p>
                    <p>{status === 'loading' ? <SkeletonLoader /> :  summary_details[0]?.total_driver_price && summary_details[0]?.total_driver_price?.toLocaleString()}</p>
                </div>
                <div>
                    {status === 'loading' ? (<SkeletonLoader />) : 
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
