// import {useEffect} from 'react'
import styled from "styled-components"
import {AdminContainer, AdminHeader } from "../../../styles/globalStyles"
import {useGetHour} from "../../../hooks/useGetHour/useGetHour"



const Wrapper = styled.div `
    ${AdminContainer}
    height: 100vh;

`

const H1 = styled.h1 `
    ${AdminHeader}
`

const AdminHome = ({timeOfDay, data}) => {


    return (
        <Wrapper>
            <H1>{"Good " + timeOfDay +", " + data?.firstname}</H1>
        </Wrapper>
    )
}

export default AdminHome