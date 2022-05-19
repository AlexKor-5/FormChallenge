import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

export const DataTable = ({ tableValues, ...props }) => {
    return (
        <TableContainer component={Paper} {...props}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Field</TableCell>
                        <TableCell align="right">Value</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.keys(tableValues)
                        .filter(item => item !== 'files')
                        .filter(item => item !== 'availablePhoneNumber')
                        .map(keyName => {
                            return tableValues[keyName] ? (
                                <TableRow
                                    key={keyName}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {keyName}
                                    </TableCell>
                                    <TableCell align="right">{tableValues[keyName]}</TableCell>
                                </TableRow>
                            ) : null
                        })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
