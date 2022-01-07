import React from 'react'
import Button from '@mui/material/Button'

export const MyButton = ({ children, ...props }) => {
    return (
        <Button variant="contained" {...props} fullWidth>
            {children}
        </Button>
    )
}
