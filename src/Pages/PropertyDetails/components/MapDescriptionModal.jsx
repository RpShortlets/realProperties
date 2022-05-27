import React from "react";
import Modal from "../../../components/Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { setShowDirections } from "../../../redux/actions/componentState";
import { CancelIcon } from "../../../Svg/svg";
import useMediaQuery from "../../../hooks/useMediaQuery/useMediaQuery";
import styled from "styled-components/macro";
import { FlexStyle } from "../../../styles/globalStyles";

const Cancel = styled.span`
  z-index: 2000;
  position: absolute;
  top: 25px;
  font-size: 11px;
  right: 55px;
  cursor: pointer;
  ${FlexStyle}
  justify-content: center;
 
`;

const MapDescriptionModal = () => {
  const dispatch = useDispatch();
  const Query = useMediaQuery("(max-width: 600px)");
  const { showDirections } = useSelector((state) => state.ComponentState);
  const {
    PropertyDetails: { general_info },
    status,
  } = useSelector((state) => state.propertyDetails);
  return (
    <Modal
      height={Query ? "" : "87%"}
      overFlow=""
      zIndex="11"
      background="transparent"
      boxShadow="none"
      btn
      show={showDirections}
      setShowMobileReserveModal={setShowDirections}
      reserveModal
      theme="rgba(0,0,0,0.5)"
      right={Query ? "13%" : "30%"}
      top="10vh"
      width={Query ? "100%" : "50%"}
      initial={{ opacity: 0, y: 0, x: 50 }}
      animate={{ opacity: 1, y: 5 }}
    >
      <>
        <Cancel onClick={() => dispatch(setShowDirections(false))}>
          {CancelIcon}
        </Cancel>
        <>
          {status === "succeeded" && (
            <div>
              <img
                src={general_info[0]?.direction_description}
                alt="direction"
                width={"100%"}
              />
            </div>
          )}
        </>
      </>
    </Modal>
  );
};

export default MapDescriptionModal;
