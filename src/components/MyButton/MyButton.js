import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { useFormikContext } from 'formik'

export const MyButton = ({
    children,
    linkTo = '#',
    type = 'button',
    touchedFields = {},
    ...props
}) => {
    const navigate = useNavigate()
    const { setTouched, validateForm } = useFormikContext()

    const handleClick = () => {
        setTouched(touchedFields)
        validateForm()
        // navigate(linkTo)
    }

    return (
        <Button variant="contained" {...props} type={type} onClick={() => handleClick()} fullWidth>
            {children}
        </Button>
    )
}
