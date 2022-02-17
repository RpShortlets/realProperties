import React from 'react';
import styled from 'styled-components';
import { PaddingStyle } from '../../styles/globalStyles';

const GalleryContainer = styled.section `
    background-color: var(--color-white);
    width: 100%;
    height: 100%;
`

const Main = styled.main `
    ${PaddingStyle}
`

const Gallery = () => {
    return (
        <GalleryContainer>
            <Main>

            </Main>
        </GalleryContainer>
    )
};

export default Gallery;
