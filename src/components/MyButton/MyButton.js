import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const MyButton = ({ children, linkTo = '#', type = 'button', ...props }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(linkTo)
    }

    return (
        <Button variant="contained" {...props} type={type} onClick={handleClick} fullWidth>
            {children}
        </Button>
    )
}
