import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import IconCard from '../../components/PropertyCard/IconCard'
import { FlexStyle, PaddingStyle } from "../../styles/globalStyles"
import { IoBed } from "react-icons/io5"
import { Rooms, Baths } from "../../Svg/svg"
import Button from '../../components/Button/Button'

const Section = styled.section `
    width: 100%;
    height: 100%;
    background: var(--color-white);
`

const Main  = styled.main `
    ${PaddingStyle}
    padding-top: 4vw;
    padding-bottom: 4vw;
`

const Container  = styled.div `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

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
            margin: 0;
        }

        div {
            flex:  1;
            ${FlexStyle}
            justify-content: end;
        }
    }
`

const ImageGrid = styled.div `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 1rem;


    .gridOne{
        grid-row: 1/5;
        background: blue;
    }
    .gridTwo {
        grid-row: 1/3;
        background: green;
    }

    .gridThree {
        grid-row: 3/5;
        grid-column: 2/3;
        background: red;
    }

`

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

const ComingDetails = () => {
    const [show, setShow] = useState(false)

    return (
        <Section>
            <Main paddingleft="true" paddingRight="true">
                <Container>
                    <Details>
                        <div className="detailWrapper">
                            <Header>
                                <h1>Executive Suite</h1>
                                <p>&#8358;50,000</p>
                            </Header>
                            <div className='IconWrapper'>
                                <IconCard data={3} title="Beds" Icon={<IoBed/>} />
                                <IconCard data={2} title="Bathroom" Icon={Baths} style={{margin: '0 max(5vw, 1rem)'}} />
                                <IconCard data={2} title="Rooms" Icon={Rooms} />
                            </div>
                            <div className="descriptionWrapper">
                                <p>Dolore proident voluptate ullamco qui. Deserunt Lorem deserunt Lorem fugiat excepteur mollit reprehenderit. Magna do non proident amet excepteur. Lorem laboris nulla ut id sunt aliquip incididunt magna ut reprehenderit. Voluptate tempor cupidatat eiusmod consectetur sint. Eiusmod consectetur labore culpa nostrud consectetur proident fugiat exercitation ullamco. Amet commodo laborum mollit culpa ad et veniam.</p>
                                {show && <p>Dolore sit elit id duis dolore aliqua eu. Id aute sint occaecat elit dolore. Elit magna qui occaecat ut quis aliquip labore proident. Proident qui adipisicing deserunt sint cupidatat sit mollit labore aliquip reprehenderit in aute consectetur velit. Laboris et veniam sunt anim consequat commodo est ad ipsum sunt exercitation ut. Occaecat ullamco ex anim sit eiusmod ut. Sint enim ad aute adipisicing.</p>}
                                <Link to="#" onClick={() => setShow((prev) => !prev)}>{show ? 'See less': 'See more'}</Link>
                            </div>
                            <div className="clickWrapper">
                                <p>If you are intrested click on the button</p>
                                <div>
                                    <Button 
                                        title="Continue" 
                                        border="0" 
                                        color="var(--color-white)" 
                                        background="var(--linear-primary)"
                                        width={"80%"}
                                        padding=".8rem"
                                    />
                                </div>
                            </div>
                        </div>
                    </Details>
                    <ImageGrid>
                        <div className="gridOne">
                            One
                        </div>
                        <div className="gridTwo">
                            Two
                        </div>
                        <div className="gridThree">
                            Three
                        </div>
                    </ImageGrid>
                    <div>
                        Three
                    </div>
                    <div>
                        Four
                    </div>
                </Container>
            </Main>
        </Section>
    )
}

export default ComingDetails