import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';

import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import { visuallyHidden } from '@mui/utils';

const TableCellss = styled(TableCell)`
    color: ${({color}) => color } !important;
`

const TableRows = styled(TableRow)`
    background-color: ${({background}) => background};
`

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
    const stabilizedThis = array?.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
        return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}


function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };



    return (
        <TableHead>
            <TableRow>
                {props?.headcells?.map((headcell) => (
                <TableCell
                    key={headcell.id}
                    align="left"
                    padding={headcell.disablePadding ? 'none' : 'normal'}
                    sortDirection={orderBy === headcell.id ? order : false}
                >
                    <TableSortLabel
                        active={orderBy === headcell.id}
                        direction={orderBy === headcell.id ? order : 'asc'}
                        onClick={createSortHandler(headcell.id)}
                    >
                    {headcell.label && headcell.label}
                    {orderBy === headcell.id ? (
                        <Box component="span" sx={visuallyHidden}>
                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                        </Box>
                    ) : null}
                    </TableSortLabel>
                </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}


const EnhancedTableToolbar = (props) => {
    const { numSelected } = props;

    return (
        <Toolbar
        sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
            ...(numSelected > 0 && {
            bgcolor: (theme) =>
                alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
            }),
        }}
        >
        {numSelected > 0 ? (
            <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
            >
            {numSelected} selected
            </Typography>
        ) : (
            <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
            >
            {props.title}
            </Typography>
        )}

        
        </Toolbar>
    );
};


export default function EnhancedTable({headData, records, title, onClicks}) {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');

    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);


    const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
    };

    

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    // const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - records?.length) : 0;

    console.log(records?.customer_payment_confirmation)
    return (
        <Box sx={{ width: '100%' }} style={{ height: '100%'}}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar title={title} />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                        headcells={headData}
                    >
                        <EnhancedTableHead
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={records.length}
                            headcells={headData}
                            rows={records}
                        />
                        <TableBody>
                        {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                            rows.slice().sort(getComparator(order, orderBy)) */}
                        {stableSort(records, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                            const labelId = `enhanced-table-checkbox-${index}`;
                            console.log(row?.customer_payment_confirmation)

                            return (
                                <TableRows
                                    hover
                                    onClick={onClicks ? () => onClicks(row?.pending_id) : console.log('')}
                                    tabIndex={-1}
                                    key={row?.pending_id}
                                    background={row?.customer_payment_confirmation === 'payment confirmed' ? "#8BDB81" : "#fff"}
                                >
                                
                                    <TableCellss
                                        component="th"
                                        id={labelId}
                                        scope="row"
                                        padding="none"
                                        color={row?.customer_payment_confirmation === 'payment confirmed' ? "#fff" : "#333"}
                                    >
                                        {row?.guest_name}
                                    </TableCellss>
                                    {row?.pymt_reference && 
                                        <TableCellss 
                                            align="left"
                                            color={row?.customer_payment_confirmation === 'payment confirmed' ? "#fff" : "#333"}
                                        >
                                            {row?.pymt_reference}
                                        </TableCellss>}
                                    {row?.check_in && 
                                        <TableCellss 
                                            align="left" 
                                            color={row?.customer_payment_confirmation === 'payment confirmed' ? "#fff" : "#333"}
                                        >
                                            {row?.check_in}
                                        </TableCellss>}
                                    {row?.check_out && 
                                        <TableCellss 
                                            align="left"
                                            color={row?.customer_payment_confirmation === 'payment confirmed' ? "#fff" : "#333"}
                                        >
                                            {row?.check_out}
                                        </TableCellss>}
                                    {row?.amount && 
                                        <TableCellss 
                                            align="left"
                                            color={row?.customer_payment_confirmation === 'payment confirmed' ? "#fff" : "#333"}
                                        >
                                            {row?.amount}
                                        </TableCellss>}
                                    {row?.phone_no && 
                                        <TableCellss 
                                            align="left"
                                            color={row?.customer_payment_confirmation === 'payment confirmed' ? "#fff" : "#333"}
                                        >
                                            {row?.phone_no}
                                        </TableCellss>}
                                    {row?.payment_method &&  
                                        <TableCellss 
                                            align="left"
                                            color={row?.customer_payment_confirmation === 'payment confirmed' ? "#fff" : "#333"}
                                        >
                                            {row?.payment_method}
                                        </TableCellss> }
                                    {row?.platform &&  
                                        <TableCellss 
                                            align="left"
                                            color={row?.customer_payment_confirmation === 'payment confirmed' ? "#fff" : "#333"}
                                        >
                                            {row?.platform}
                                        </TableCellss> }
                                    {row?.payment_time && 
                                        <TableCellss 
                                            align="left"
                                            color={row?.customer_payment_confirmation === 'payment confirmed' ? "#fff" : "#333"}
                                        >
                                            {row?.payment_time}
                                        </TableCellss> }
                                    {row?.bdt_user && 
                                        <TableCellss 
                                            align="left"
                                            color={row?.customer_payment_confirmation === 'payment confirmed' ? "#fff" : "#333"}
                                        >
                                            {row?.bdt_user}
                                        </TableCellss> }
                                    {row?.bank_transaction_id && 
                                        <TableCellss 
                                            align="left"
                                            color={row?.customer_payment_confirmation === 'payment confirmed' ? "#fff" : "#333"}
                                        >
                                            {row?.bank_transaction_id}
                                        </TableCellss> }
                                    {row?.email && 
                                        <TableCellss 
                                            align="left"
                                            color={row?.customer_payment_confirmation === 'payment confirmed' ? "#fff" : "#333"}
                                        >
                                            {row?.email}
                                        </TableCellss>}
                                    {row?.status && 
                                        <TableCellss 
                                            align="left"
                                            color={row?.customer_payment_confirmation === 'payment confirmed' ? "#fff" : "#333"}
                                        >
                                            {row?.status}
                                        </TableCellss>}
                                </TableRows>
                            );
                            })}
                            {emptyRows > 0 && (
                                <TableRow
                                style={{
                                    height: (dense ? 33 : 53) * emptyRows,
                                }}
                                >
                                <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 20, 35]}
                    component="div"
                    count={records?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Dense padding"
            />
        </Box>
    );
}
