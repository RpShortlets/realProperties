import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function ResponsiveDialog({showDialog, setShowDialog, title, handleProceed, handleCancel, disagree, agree, header }) {
    // const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


    const handleClose = () => {
        setShowDialog(false);
    };

    return (
        <div>
        <Dialog
            fullScreen={fullScreen}
            open={showDialog}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id={header}>
                {header}
            </DialogTitle>
            <DialogContent>
            <DialogContentText>
                {title}
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button autoFocus onClick={handleCancel}>
                {disagree}
            </Button>
            <Button onClick={handleProceed} autoFocus>
                {agree}
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}