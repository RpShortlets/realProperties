import { SkeletonLoader } from "../../../../../components/Loader/Skeleton"
import styled from "styled-components"
import Tooltips from "../../../../../components/Tooltip"
// import { motion, AnimatePresence } from "framer-motion"


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

        .pricesStyle {
            display: flex;
            justify-content: space-between;
        }

    @media screen and (min-width:769px) {
        display: block;
        margin: max(1vw, 1rem) 0;

        


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
                    {/* <AnimatePresence>
                    {show && (
                        <motion.div 
                            initial={{ opacity: 0 , scale: 0, x: 0 }}
                            animate={{ opacity: 1,  scale: 1, x: 10 }}
                            transition={{ duration: 0.9 }}
                            exit={{ opacity: 0,  scale: 0, x:0 }}

                            style={{position: 'absolute', background: '#ccc', zIndex: 1, top: "-35px", left: '-50px'}}>
                            <div>
                                Hello
                            </div>
                        </motion.div>
                    )}
                    </AnimatePresence> */}
                    
                    
                </div>
                <div>
                    <p>{reserve === 'loading' ? <SkeletonLoader /> : summary_details[0]?.total_cleaning_price || summary_details[0]?.total_pickup_dropoff_price ? 'Additional Services' : ''}</p>
                    <p>{reserve === 'loading' ? <SkeletonLoader /> :   summary_details[0]?.total_cleaning_price ||  summary_details[0]?.total_pickup_dropoff_price ? TotalAdditionalServices?.toLocaleString(): ''}</p>
                </div>
                {/* <div>
                    <p>{reserve === 'loading' ? <SkeletonLoader /> : summary_details[0]?.total_pickup_dropoff_price && 'Pickup/Drop Off'}</p>
                    <p>{reserve === 'loading' ? <SkeletonLoader /> : summary_details[0]?.total_pickup_dropoff_price?.toLocaleString()}</p>
                </div> */}
                <div>
                    <Tooltips title='Please note that the car comes with a driver'>
                        <p>{reserve === 'loading' ? <SkeletonLoader /> : selectedCar && selectedCar}</p>
                    </Tooltips>
                    <p>{reserve === 'loading' ? <SkeletonLoader /> : TotalCarAndDriverPrice && TotalCarAndDriverPrice > 0 ? TotalCarAndDriverPrice.toLocaleString() : ''}</p>
                </div>
                {/* <div>
                    <p style={{textTransform: 'capitalize'}}>{reserve === 'loading' ? <SkeletonLoader /> : radio && radio}</p>
                    <p>{reserve === 'loading' ? <SkeletonLoader /> :  summary_details[0]?.total_driver_price && summary_details[0]?.total_driver_price?.toLocaleString()}</p>
                </div> */}
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
