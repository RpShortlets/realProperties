import React from 'react';
import styled from 'styled-components';
import { FlexStyle, InputStyle } from '../../styles/globalStyles';
import {Input} from "../../utils/FormElement/Input"
import Modal from '../../components/Modal/Modal';
import Button from "../../components/Button/Button"
import useMediaQuery from '../../hooks/useMediaQuery/useMediaQuery';


const ModalContent = styled.div `
    /* padding: max(2vw, 2rem); */

    form {
        margin: max(2vw, 1rem);
    }

    .formSpacing,
    .formInput > div:first-child {
        margin: max(1vw, 0.5rem) 0;
    }

    .formInput {

        > div {
            flex: 1 !important;
        }

    }

    .contactUsHeader {
        ${FlexStyle}
        justify-content: center;

        
        h3 {
            margin: 0;
            font-size: var(--font-medium);
            font-weight: 600;
        }
    }

    .contactUsBtn {
        ${FlexStyle}
        justify-content: end;
    }

    .contactTextArea {
        textarea { 
            ${InputStyle}
        }

        label {
            ${FlexStyle}
            font-size: var( --font-small) !important;
            color: #fff;
            color: var(--color-dark);
        }
    }

    @media screen and (min-width: 769px) {
        .formInput {
            display: flex;
            align-items: end;

            > div:first-child{
                margin: 0 max(1vw, 0.5rem) 0 0;
            }

        }
    }

`
const ContactModal = ({openModal,setOpenModal, SubmitContactForm, validatedName, validatedLastName, emailerror, formdata, setFormData, checkEmail, Focus, FocusLastName}) => {
    const Query = useMediaQuery("(min-width: 669px)")
    
    return (
        <Modal show={openModal} top='10vh' transition={{duration: 0.5, type:{type:'spring'}}} background="var(--color-secondary)" initial={{scale: 0.5, opacity: 0}} exit={{scale: 0.5, opacity: 0}} animate={{scale: 1, opacity: 1}} btn setShow={setOpenModal} theme="rgba(0,0,0,.4)" right={Query ? "20%": "5%"} width={Query ? "60%" : '90%'} >
            <ModalContent>
                <div className="contactUsHeader">
                    <h3>Contact Us</h3>
                </div>
                <div>
                    <form onSubmit={SubmitContactForm}>
                        <div className="formInput formSpacing">
                            <Input  type="text" label="First Name" error={!validatedName} placeholder=""  marginTop="0px" name="firstname" value={formdata.firstname} formdata={formdata} handleChange={(e) => setFormData({...formdata, firstname: e.target.value.replace(/[^\w\s]/gi, "") })} Focus={Focus}  />
                            <Input  type="text" label="Last Name" error={!validatedLastName} marginTop="0px" placeholder="" name="lastname" value={formdata.lastname} formdata={formdata} handleChange={(e) => setFormData({...formdata, lastname: e.target.value.replace(/[^\w\s]/gi, "")})} Focus={FocusLastName}/>
                        </div>
                        <div className="formSpacing">
                            <Input  error={emailerror} type="email" label="Email" placeholder="" name="email" value={formdata.email} formdata={formdata} handleChange={(e) => checkEmail(e.target.value)}/>
                        </div>
                        <div className="formSpacing">
                            <Input type="text"  asterik label="Subject" placeholder="" name="subject"  value={formdata.subject} formdata={formdata} handleChange={(e) => setFormData({...formdata, subject: e.target.value.replace(/[^\w\s]/gi, "") })} />
                        </div>
                        <div className="contactTextArea formSpacing">
                            <label>Message</label>
                            <textarea style={{width: '100%', height: '100%'}} name="message" id="" cols="30" rows="3" placeholder="" value={formdata.message} formdata={formdata} onChange={(e) => setFormData({...formdata, message: e.target.value.replace(/[^\w\s]/gi, "") })} />
                        </div>
                        <div className="contactUsBtn">
                            <Button 
                                title="Submit"
                                background="var(--linear-primary)"
                                border="none"
                                color="var(--color-white)"
                                borderRadius="12px"
                                padding="1rem 2rem"
                                width={!Query ? "100%" : 'auto'}
                            />
                        </div>
                    </form>
                </div>
            </ModalContent>
        </Modal>
    )
};

export default ContactModal;
