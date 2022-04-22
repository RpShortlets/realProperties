import React from 'react'
import styled from "styled-components"
import IconCard from '../../../components/PropertyCard/IconCard'
import { FlexStyle } from "../../../styles/globalStyles"
import Button from '../../../components/Button/Button'
import { IoBed } from "react-icons/io5"
import { Rooms, Baths } from "../../../Svg/svg"
import { SkeletonLoader } from "../../../components/Loader/Skeleton"


const Header = styled.header`
    ${FlexStyle}
    justify-content: space-between;

    h1 {
        font-size: var(--font-medium);
        margin: 0;
        font-weight: 600;
    }

    p {
        margin: 0;
        font-size: var(--font-small);
        font-weight: 600;
    }

`
const Details =styled.div`

    .detailWrapper {

    }

    .IconWrapper {
        display: flex;
        margin: max(3vw, 1.5rem) 0;
    }

    .descriptionWrapper {
        border-top: 1px solid #333;
        border-bottom: 1px solid #333;
        padding: max(1.5vw, .8rem) 0;

        p {
            margin: 0;
            line-height: 2;
            font-size: var(--font-xtra-small-screen);
        }

        a {
            color: #333;
            font-size: var(--font-xtra-small-screen);
            font-weight: bold;
            text-decoration: underline !important;
        }
    }

    .clickWrapper {
        margin: 3rem 0 0 0;
        ${FlexStyle}
        justify-content: space-between;

        p {
            margin: 0 15px  0 0;
            text-align: left;
            font-size: var(--font-small-screen);
        }

        div {
            flex:  1;
            ${FlexStyle}
            justify-content: end;
        }
    }

    @media screen and (max-width: 991px) {
        order: 2;
    }
`

const DetailComponent = ({loading, data,setShowForm, showForm, scrollToPosition}) => {

    return (
        <Details>
            <div className="detailWrapper">
                <Header>
                    <h1 data-testid="comingDetailsHeader">  {loading === "loading" ? <SkeletonLoader width="20vw" height={"20px"} />  : loading === "succeeded" && data?.general_info?.[0]?.apartment_proper_name}</h1>
                    <p  title="price">{loading === "loading" ? <SkeletonLoader width="10vw" height={"20px"} />  : loading === "succeeded" && <span>&#8358;{data?.general_info[0]?.price?.toLocaleString()} </span> }</p>
                </Header>
                <div className='IconWrapper'>
                    {loading === "loading" ? <SkeletonLoader width="40px" height={"40px"} circle /> : loading === "succeeded" &&
                        <IconCard data={data?.general_info[0]?.bed} title="Beds" Icon={<IoBed/>} testid="iconCard" />
                    }
                    {loading === "loading" ? <SkeletonLoader width="40px" height={"40px"} circle />: loading === "succeeded" &&
                        <IconCard data={data?.general_info[0]?.bath} title="Bathroom" Icon={Baths} style={{margin: '0 max(5vw, 1rem)'}} testid="iconCard" />
                    }
                    {loading === "loading" ? <SkeletonLoader width="40px" height={"40px"} circle /> : loading === "succeeded" &&
                        <IconCard data={data?.general_info[0]?.room} title="Rooms" Icon={Rooms} testid="iconCard" />
                    }
                </div>
                <div className="descriptionWrapper">
                    <p>
                        {loading === "loading" ? <>
                            <SkeletonLoader width="100%" height={"15px"} />
                            <SkeletonLoader width="100%" height={"15px"} />
                            <SkeletonLoader width="100%" height={"15px"} />
                            <SkeletonLoader width="100%" height={"15px"} />
                        </> : loading === "succeeded" &&
                        data?.general_info[0]?.property_description}
                    </p>
                    {/* {show && <p>Dolore sit elit id duis dolore aliqua eu. Id aute sint occaecat elit dolore. Elit magna qui occaecat ut quis aliquip labore proident. Proident qui adipisicing deserunt sint cupidatat sit mollit labore aliquip reprehenderit in aute consectetur velit. Laboris et veniam sunt anim consequat commodo est ad ipsum sunt exercitation ut. Occaecat ullamco ex anim sit eiusmod ut. Sint enim ad aute adipisicing.</p>}
                    <Link to="#" onClick={() => setShow((prev) => !prev)}>{show ? 'See less': 'See more'}</Link>
                    <IoIosArrowForward /> */}
                </div>
                <div className="clickWrapper">
                    <p>{loading === "loading" ? <SkeletonLoader width="20vw" height={"20px"} /> : loading === "succeeded" && "If you are intrested click on the button"}</p>
                    <div>
                        {loading === "loading" ? <SkeletonLoader width="17vw" height={"45px"} /> : loading === "succeeded" &&
                            <Button 
                                title="Continue" 
                                border="0" 
                                color="var(--color-white)" 
                                background="var(--linear-primary)"
                                width={"100%"}
                                padding=".8rem"
                                onClicks={scrollToPosition}
                            />
                        }
                    </div>
                </div>
            </div>
        </Details>
    )
}

export default DetailComponent