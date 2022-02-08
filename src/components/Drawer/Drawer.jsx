import * as React from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import TextMobileStepper from '../Stepper/Stepper';
import MobileDesitination from '../Mobile Destination/MobileDesitination';
import MobileDates from '../Mobile Destination/MobileDates';
import MobileGuests from '../Mobile Destination/MobileGuests';

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));

const steps = ['Destination', 'Dates', 'Guest'];

function SwipeableEdgeDrawer({openDrawer, setOpenDrawer, SubmitForm}) {
    const [activeStep, setActiveStep] = React.useState(0);

    const toggleDrawer = (newOpen) => () => {
        setOpenDrawer(newOpen);
    };

    const handleNext = () => { // handle next button
        if(activeStep === steps.length - 1 ) {
            return;
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => { // handle back button
        if(activeStep === 0) {
            return;
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }
    };

    const handleReset = () => { // handle reset button
        setActiveStep(0);
    };

    const Display = activeStep === 0 ? ( <MobileDesitination  /> ) : activeStep === 1 ? ( <MobileDates  /> ) : activeStep === 2 ? ( <MobileGuests /> ) : null;


    return (
        <Root>
            <CssBaseline />
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                    height: `calc(90% - ${drawerBleeding}px)`,
                    overflow: 'visible',
                    },
                }}
            />
            <SwipeableDrawer
                anchor="bottom"
                open={openDrawer}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                keepMounted: true,
                }}
            >
                <StyledBox
                    sx={{
                        position: 'absolute',
                        top: openDrawer && '-32px',
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        visibility: 'visible',
                        right: 0,
                        left: 0,
                    }}
                >
                    <Puller />
                    <Typography sx={{ p: 2, color: 'text.secondary' }}></Typography>
                </StyledBox>
                <StyledBox
                    sx={{
                        px: 3,
                        pb: 2,
                        height: '100%',
                        overflow: 'auto',
                    }}
                >

                    <TextMobileStepper
                        handleNext={handleNext}
                        activeStep={activeStep}
                        handleBack={handleBack}
                        handleReset={handleReset}
                        steps={steps}
                        SubmitForm={SubmitForm}
                    >
                    
                        {Display}
                        
            
                    </TextMobileStepper>
                </StyledBox>
            </SwipeableDrawer>
        </Root>
    );
}



export default SwipeableEdgeDrawer;