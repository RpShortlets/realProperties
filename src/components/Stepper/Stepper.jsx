import * as React from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import Button from "../Button/Button"


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
                        onClicks={props.activeStep === steps.length - 1 ? props.SubmitForm : props.handleNext}
                        title={props.activeStep === steps.length - 1 ? 'Search' : 'Next'}
                        border="none"
                        background={props.activeStep === steps.length - 1 ? 'var(--linear-primary)' : 'var(--color-secondary)'}
                        color={props.activeStep === steps.length - 1 ? '#fff' : 'var(--color-primary-dark)'}
                        padding="0.5rem 1.3rem"
                    />
                }
                //! Back Button
                backButton={
                    <Button 
                        onClicks={props.handleBack} 
                        title="Back"
                        background={props.activeStep === steps.length - 1 ? 'transparent' : 'var(--color-secondary)'}
                        border={props.activeStep === steps.length - 1  ? '1px solid #ccc' : 'none'}
                        color={props.activeStep === steps.length - 1 ? 'var(--color-primary-dark)' : 'var(--color-primary-dark)'}
                        padding="0.5rem 1.3rem"
                    />
                }
            />
        </div>
    );
}
