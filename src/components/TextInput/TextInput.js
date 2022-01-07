import React from 'react'
import { TextField } from 'formik-mui'
import { Field } from 'formik'

export const TextInput = ({ text, name }) => {
    return <Field component={TextField} label={text} name={name} variant="outlined" fullWidth />
}
