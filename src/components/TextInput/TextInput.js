import React from 'react'
import { TextField } from 'formik-mui'
import { Field, useFormikContext } from 'formik'

export const TextInput = ({ text, name, ...props }) => {
    const { setTouched, handleChange } = useFormikContext()
    return (
        <Field
            component={TextField}
            label={text}
            name={name}
            variant="outlined"
            onChange={e => {
                handleChange(e) // -> handleChange of Formik
                // custom handleChange
                let obj = {}
                obj[name] = true
                setTouched(obj)
            }}
            fullWidth
            {...props}
        />
    )
}
