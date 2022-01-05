import React from 'react'
import Typography from '@mui/material/Typography'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'

export const Title = ({ text }) => {
    return (
        <Typography variant="h6" gutterBottom component="div">
            <AccountCircleRoundedIcon />
            {text}
        </Typography>
    )
}
