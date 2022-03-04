import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { AiOutlineDown, AiOutlineUp} from "react-icons/ai"


function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'none' } }}>
            <TableCell style={{background: 'transparent !important'}}>
                <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}
                >
                {open ?  <AiOutlineUp/>  : <AiOutlineDown />}
                </IconButton>
            </TableCell>
            <TableCell component="th" scope="row"  padding="none">
                {row.firstname } {row?.lastname}
            </TableCell>
            <TableCell align="left"  padding="none">{row.subject}</TableCell>
            <TableCell align="left"  padding="none">{row.email}</TableCell>
            </TableRow>
            <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 5 }}>
                    <Typography variant="h6" gutterBottom component="div">
                        {row.customer}
                    </Typography>
                    <Table size="small" aria-label="message">
                        <TableBody>
                            <TableRow key={row.message}>
                                <TableCell component="th" scope="row" padding="none" style={{border: '0 !important', lineHeight: '2 !important'}}>
                                    {row.message}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Box>
                </Collapse>
            </TableCell>
            </TableRow>
        </React.Fragment>
        );
    }


export default function CollapsibleTable({data, status}) {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
            <TableHead>
                <TableRow>
                    <TableCell />
                    <TableCell padding="none">Customer Name</TableCell>
                    <TableCell padding="none" align="left">Subject</TableCell>
                    <TableCell padding="none" align="left">Email</TableCell>
                </TableRow>
            </TableHead>
            {status === 'succeeded' && (
                <TableBody>
                    {data?.map((row) => (
                        <Row key={row.firstname} row={row} />
                    ))}
                </TableBody>
            )}
            </Table>
        </TableContainer>
    );
}
