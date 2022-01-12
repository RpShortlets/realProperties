import Modal from "../../../components/Modal/Modal"



const MobileModal = ({show, setshow}) => {
    return (
        <Modal show={show} setShow={setshow}>
            <div>
                <div style={{flex: '1'}}>
                    <span>&#36;/night</span>
                </div>
                <div>
                    <div>
                        <div>
                            <span>Check-in</span>
                            <span>DD/MM/YYYY</span>
                        </div>
                        <div>
                            <span>Check-out</span>
                            <span>DD/MM/YYYY</span>
                        </div>
                    </div>
                    <div>
                        <div> 
                            <div>
                                <h4>Guests</h4>
                                <span>No</span>
                            </div>
                            <div>
                                {/* {openGuest ? (<FiChevronUp />) : (<FiChevronDown />)} */}
                            </div>
                        </div>
                        {/* {openGuest && (
                            <ModalDiv ref={modalRef} top="48px" width= "100%" left='0'   border="1px solid rgba(33, 8, 8, 0.22)">
                                Modal
                            </ModalDiv>
                        )} */}
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default MobileModal
