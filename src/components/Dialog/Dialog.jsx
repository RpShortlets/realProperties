import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function ResponsiveDialog({showDialog, setShowDialog, title, setConfirm, confirm }) {
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
            <DialogTitle id="responsive-dialog-title">
            {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
            <DialogContentText>
                {title}
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button autoFocus onClick={() => setConfirm('No')}>
                Disagree
            </Button>
            <Button onClick={() => setConfirm('Yes')} autoFocus>
                Agree
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}