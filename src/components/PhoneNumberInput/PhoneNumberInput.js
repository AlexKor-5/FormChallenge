import React, { useState } from 'react'
import { TextField } from 'formik-mui'
import { Field } from 'formik'

const temp = '+38 (0xx) xx xxx xx'
export const PhoneNumberInput = ({ text, name }) => {
    const [phNumber, setPhNumber] = useState('+38')

    const handleChange = event => {
        setPhNumber(event.target.value)
        console.log(event.target.value)
    }

    return (
        <Field
            component={TextField}
            label={text}
            value={phNumber}
            name={name}
            variant="outlined"
            fullWidth
            onChange={handleChange}
        />
    )
}
