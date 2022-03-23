import {useEffect} from 'react'
import styled from "styled-components"
import {AdminContainer, AdminHeader } from "../../../styles/globalStyles"
import { useSelector, useDispatch } from 'react-redux';
import { GetCustomersComplains } from '../../../redux/actionCreators/actionCreators';
import TableData from "./TableData"
import { Clip } from '../../../components/Loader/Spinner';



const Wrapper = styled.div `
    ${AdminContainer}

`

const H1 = styled.h1 `
    ${AdminHeader}
`


const Complaint = ({data, timeOfDay}) => {
    const dispatch = useDispatch();
    const {status, complains} = useSelector(state => state.adminDashboard);
    


    useEffect(() => {
        dispatch(GetCustomersComplains())
    }, [dispatch])

    return (
        <Wrapper>
            {status === 'loading' ? (
            <div style={{height: '100vh', position: 'relative', margin: '1rem'}}>
                <Clip type='TailSpin' />
            </div>
        ) :
            <>
                <H1>{"Good " + timeOfDay +", " + data?.firstname}</H1>
                {status === 'succeeded' && (<TableData data={complains} status={status} />)}
            </>
        }
        </Wrapper>
        
    )
}

export default Complaint