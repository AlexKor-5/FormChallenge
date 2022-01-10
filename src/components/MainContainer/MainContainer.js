import React from 'react'
import { Container } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    container: {
        display: 'flex !important',
        flexFlow: 'column wrap',
        alignItems: 'center',
        '& > *': {
            marginTop: '25px !important',
        },
    },
})

export const MainContainer = ({ children }) => {
    const classes = useStyles()
    return (
        <Container maxWidth={'xs'} className={classes.container}>
            {children}
        </Container>
    )
}
