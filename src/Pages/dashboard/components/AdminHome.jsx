import styled from "styled-components"
import Button from "../../../components/Button/Button"
import {AdminContainer, AdminHeader, FlexStyle } from "../../../styles/globalStyles"
import { DarkIcon, SunIcon } from "../../../Svg/svg"




const Wrapper = styled.div `
    ${AdminContainer}
    height: 100vh;
    margin: 0 !important;

`

const H1 = styled.h1 `
    ${AdminHeader}
    margin: 0;
`

const Container = styled.div `
    ${FlexStyle} 
`




const AdminHome = ({timeOfDay, data, SwitchTheme, theme}) => {

    return (
        <Wrapper>
            <Container>
                <H1>{"Good " + timeOfDay +", " + data?.firstname}</H1>
                <div onClick={SwitchTheme}>
                    {theme === 'dark' ? 
                        <Button 
                            icon={SunIcon} 
                            border="0" 
                            background="transparent" 
                            padding= "2px"
                            width= "45px"
                            height= "45px"
                            fontSize= "2rem"
                            display= "flex"
                            alignItems= "center"
                            justify= "center"
                            color="#fff"
                        /> : 
                        <Button 
                            icon={DarkIcon} 
                            border="0" 
                            background="transparent" 
                            padding= "2px"
                            width= "45px"
                            height= "45px"
                            fontSize= "2rem"
                            display= "flex"
                            alignItems= "center"
                            justify= "center"
                            color="#333"
                        />
                        
                    }
                </div>
            </Container>
        </Wrapper>
    )
}

export default AdminHome