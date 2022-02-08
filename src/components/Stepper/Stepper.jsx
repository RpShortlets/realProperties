import * as React from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';


const steps = ['Bio', 'Company', 'Address'];

//TODO: This is a temporary solution to get the stepper to work. And this must communicate with the desktop stepper.

export default function TextMobileStepper(props) {
    const maxSteps = props.steps.length;

    return (
        <div>
            {/* //* Stepper for Main Content */}
                {props.activeStep === props.steps.length ? ""
                :
                <React.Fragment>
                    {/* //! SHOW MAIN CONTENT HERE */}
                    {props.children}
                </React.Fragment>
            }
                
            {/* //* Stepper for Navigation */}
            <MobileStepper
                variant="txt" //* Hide progress if the last step is reached.
                steps={maxSteps}
                position="static"
                activeStep={props.activeStep}
                nextButton={
                    //! Next Button
                    <Button
                        size="small"
                        onClick={props.activeStep === steps.length - 1 ? props.SubmitForm : props.handleNext}
                    >
                        {props.activeStep === steps.length - 1 ? 'Search' : 'Next'}
                    </Button>
                }
                //! Back Button
                backButton={
                    <Button 
                        size="small" 
                        onClick={props.handleBack} 
                    >
                        Back
                    </Button>
                }
            />
        </div>
    );
}
