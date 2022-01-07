import React from 'react'
import Typography from '@mui/material/Typography'

export const Title = ({ text, iconRender }) => {
    return (
        <Typography variant="h6" gutterBottom component="div">
            {iconRender}
            {text}
        </Typography>
    )
}
