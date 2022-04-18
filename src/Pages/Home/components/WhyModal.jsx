import React from 'react'
import styled from 'styled-components'
import Modal from '../../../components/Modal/Modal'

const ModalContent = styled.span `
    p {
        line-height: 2;
        color: var(--color-primary);
        font-size: var(--font-small-screen);
    }
`
const WhyModal = ({WhyRealShortletsData, whyShortlet, whyRealShortletId, setWhyShortLet, Query}) => {
    return (
        <Modal data-testid='whyModal' background="var(--color-light-gray)" ButtonBG="transparent" show={whyShortlet} transition={{duration: 0.5, type:{type:'spring'}}} initial={{opacity: 0, y: -100}} exit={{opacity: 0, y: -100}} animate={{opacity: 1, y: 0}}  setShow={setWhyShortLet} theme="rgba(0, 0, 0, .8)" left={Query ? "20%": "5%"} top="30%" width={Query ? "60%" : "90%"}>
            <ModalContent>
                <p>{WhyRealShortletsData[whyRealShortletId]?.content}</p>
                <p>{WhyRealShortletsData[whyRealShortletId]?.content2}</p>
                <p>{WhyRealShortletsData[whyRealShortletId]?.content3}</p>
            </ModalContent>
        </Modal>
    )
}

export default WhyModal