import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { useField } from 'formik'

export const MyButton = ({
    children,
    linkTo = '#',
    type = 'button',
    touchedFields = {},
    context,
    ...props
}) => {
    const navigate = useNavigate()
    const { validateField, setFieldTouched, setTouched, validateForm, errors } = context
    console.log(context)
    console.log('errors == ', errors)

    // const [myErrors, setMyErrors] = useState([])
    //
    // useEffect(() => {
    //     return () => {
    //         // console.log('errors == ', errors)
    //     }
    // }, [errors])

    const handleClick = errors => {
        setTouched(touchedFields)
        validateForm()
        // console.log('errors in function = ', errors)
        // navigate(linkTo)
        // console.log(' f errors = ')
        // console.log(Object.keys(errors))
        // if (!Object.keys(errors).includes('firstName')) {
        //     console.log('go to next page!')
        // }
    }

    return (
        <Button
            variant="contained"
            {...props}
            type={type}
            onClick={() => handleClick(errors)}
            fullWidth
        >
            {children}
        </Button>
    )
}
