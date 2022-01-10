import React from 'react'
import Button from '@mui/material/Button'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    buttonStyle: {
        color: 'red',
        border: 'none',
    },
})

export const Buttonn = () => {
    const classes = useStyles()
    return <Button className={classes.buttonStyle}>Contained</Button>
}
