import  { useState } from 'react';
import styled, {css} from 'styled-components/macro';
import  {Link} from 'react-router-dom'
import { PaddingStyle } from '../../styles/globalStyles';
import { TermsData } from "./Data/data"



const PaddingBars = css`
    padding-top: max(7vw, 2rem);
    padding-bottom: max(2vw, 1rem);

`

const Section = styled.section`
    width: 100%;
    height: 100%;

    .firstChild {
        font-size: var(--font-small-screen);
        font-weight: 600;
    }

    li {
        margin: max(1.5rem, 0.9rem) 0;
    }

    .secondLink {
        color: var(--color-primary);
    }

`
const Main = styled.main`
    height: 100%;
`

const Layout = styled.div`
    display: block;
    height: 100%; 
    
    
    @media screen and (min-width: 660px) {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
    }

`

const Side = styled.div`
    grid-column: 3/span 7;
    padding-left: 1rem;
    background: var(--color-white);
    ${PaddingStyle}
    ${PaddingBars}
`

const Menu = styled.div`
    grid-column: 1/span 2;
    background: rgba(156, 210, 223, 0.35);
    padding-left: 8vw;
    padding-top: 6vw;
    padding-bottom: 6vw;

    ol {
        margin: 0;
        padding: 0;
        padding-right: 10px;
    }


    li a {
        color: rgba(78, 126, 138, 0.6);
    }
`

const SideMenu = styled.div`

    h1 {
        font-size: var(--font-medium);
        color: var(--color-primary);
        font-weight: 600;
    }

    p {
        font-size: var(--font-xtra-small-screen);
        color: var(--color-primary);
        margin: 0;
        line-height: 2;
    }

    p:nth-of-type(2),
    p:nth-of-type(4) { 
        margin: max(2vw, .9rem) 0;
    }

`

const SideBar = ({children}) => {
    return (
        <Side paddingRight="true">
            {children}
        </Side>
    )
}

const MainMenu = ({children}) => {
    return (
        <>
            {children}
        </>
    )
}

const TermandPolicy = () => {
    const [policyId, setPolicyId] = useState(0)

    return (
        <Section>
            <Main>
                <Layout>
                    <MainMenu >
                        <Menu>
                            <ol>
                                {TermsData.map((item, index) => (
                                    <li key={item.id} id={item.id} data={item} className='firstChild'>
                                        <Link to="#" style={{color: item.id === policyId && 'rgba(28, 123, 147, 1)'}} onClick={() => setPolicyId(item?.id)}>
                                            {item.title}
                                        </Link>

                                    </li>
                                ))}
                            </ol>
                        </Menu>
                    </MainMenu>
                    <SideBar>
                        <SideMenu>
                            <h1>{TermsData[policyId].title}</h1>
                            <p>
                                {TermsData[policyId].content}
                            </p>
                            {TermsData[policyId]?.content2 && (
                                <p>
                                    {TermsData[policyId]?.content2}
                                </p>
                            )}
                            {TermsData[policyId]?.content3 && (
                                <p>
                                    {TermsData[policyId]?.content3}
                                </p>
                            )}
                            {TermsData[policyId]?.content4 && (
                                <p>
                                    {TermsData[policyId]?.content4}
                                </p>
                            )}
                            {TermsData[policyId]?.content5 && (
                                <p>
                                    {TermsData[policyId]?.content5}
                                </p>
                            )}
                            <ol>
                                {TermsData[policyId]?.subContent?.map((item, index) => (
                                    <>
                                        <li key={item.id} className="secondLink">
                                            {item.content}
                                            {item.content2  && (
                                                <ul>
                                                    <li>{item.content2}</li>
                                                </ul>
                                            )}
                                            {item.content3 && (
                                                <ul>
                                                    <li>{item.content3}</li>
                                                </ul>
                                            )}
                                            {item.content4 && (
                                                <ul>
                                                    <li>{item.content4}</li>
                                                </ul>
                                            )}
                                        </li>
                                        <p style={{fontWeight: '600'}}>{item.warming}</p>
                                    </>
                                ))}
                            </ol>
                        </SideMenu>
                    </SideBar>
                </Layout>
            </Main>
        </Section>
    )   
}

export default TermandPolicy;