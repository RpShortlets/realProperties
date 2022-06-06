import React from "react";
import styled from "styled-components/macro";
import { useSelector, useDispatch } from "react-redux";
import { SkeletonLoader } from "../../../components/Loader/Skeleton";
import { setShowDirections } from "../../../redux/actions/componentState";
import { Link } from "react-router-dom";

const Map = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 2/7;
  position: relative;

  .mapContent {
    width: 100%;
    height: 100%;
  }

  .ButtonWrap {
    
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Btn = styled(Link)`
  border: 1px solid var(--color-primary);
  background: transparent;
  color: var(--color-dark);
  border-radius: 10px;
   font-size: var(--font-xtra-small-screen);
    padding: 5px 5px;

    &:hover {
        color: var(--color-dark);
    }

`;

const PropertyMap = () => {
  const dispatch = useDispatch();
  const {
    PropertyDetails: { general_info },
    status,
  } = useSelector((state) => state.propertyDetails);
  const { showDirections } = useSelector((state) => state.ComponentState);

  return (
    <Map>
      <div className="mapContent">
        {status === "loading" ? (
          <SkeletonLoader width="20%" />
        ) : (
          status === "succeeded" && (
            <img src={general_info[0]?.direction} alt="direction" />
          )
        )}
        <div className="ButtonWrap">
          <Btn
            to="#"
            onClick={() => dispatch(setShowDirections(!showDirections))}
          >
            Get Description
          </Btn>
        </div>
      </div>
    </Map>
  );
};

export default PropertyMap;
