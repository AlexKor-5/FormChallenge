import React from 'react'
import TextField from '@mui/material/TextField'

export const Input = ({ inputName, variantValue, ...props }) => {
    return <TextField id="outlined-basic" label={inputName} variant={variantValue} {...props} />
}
