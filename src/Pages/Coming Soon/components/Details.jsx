import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import IconCard from '../../../components/PropertyCard/IconCard'
import { FlexStyle } from "../../../styles/globalStyles"
import Button from '../../../components/Button/Button'
import { IoBed } from "react-icons/io5"
import { IoIosArrowForward } from "react-icons/io"
import { Rooms, Baths } from "../../../Svg/svg"


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
        margin: max(1vw, 1.2rem) 0;
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
        margin: 1rem 0 0 0;
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

const DetailComponent = ({show, setShow,}) => {
    return (
        <Details>
            <div className="detailWrapper">
                <Header>
                    <h1 data-testid="comingDetailsHeader">Executive Suite</h1>
                    <p  title="price">&#8358;50,000</p>
                </Header>
                <div className='IconWrapper'>
                    <IconCard data={3} title="Beds" Icon={<IoBed/>} testid="iconCard" />
                    <IconCard data={2} title="Bathroom" Icon={Baths} style={{margin: '0 max(5vw, 1rem)'}} testid="iconCard" />
                    <IconCard data={2} title="Rooms" Icon={Rooms} testid="iconCard" />
                </div>
                <div className="descriptionWrapper">
                    <p>Dolore proident voluptate ullamco qui. Deserunt Lorem deserunt Lorem fugiat excepteur mollit reprehenderit. Magna do non proident amet excepteur. Lorem laboris nulla ut id sunt aliquip incididunt magna ut reprehenderit. Voluptate tempor cupidatat eiusmod consectetur sint. Eiusmod consectetur labore culpa nostrud consectetur proident fugiat exercitation ullamco. Amet commodo laborum mollit culpa ad et veniam.</p>
                    {show && <p>Dolore sit elit id duis dolore aliqua eu. Id aute sint occaecat elit dolore. Elit magna qui occaecat ut quis aliquip labore proident. Proident qui adipisicing deserunt sint cupidatat sit mollit labore aliquip reprehenderit in aute consectetur velit. Laboris et veniam sunt anim consequat commodo est ad ipsum sunt exercitation ut. Occaecat ullamco ex anim sit eiusmod ut. Sint enim ad aute adipisicing.</p>}
                    <Link to="#" onClick={() => setShow((prev) => !prev)}>{show ? 'See less': 'See more'}</Link>
                    <IoIosArrowForward />
                </div>
                <div className="clickWrapper">
                    <p>If you are intrested click on the button</p>
                    <div>
                        <Button 
                            title="Continue" 
                            border="0" 
                            color="var(--color-white)" 
                            background="var(--linear-primary)"
                            width={"100%"}
                            padding=".8rem"
                        />
                    </div>
                </div>
            </div>
        </Details>
    )
}

export default DetailComponent