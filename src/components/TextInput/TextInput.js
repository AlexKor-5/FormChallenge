import React from 'react'
import { TextField } from 'formik-mui'
import { Field } from 'formik'

export const TextInput = ({ text }) => {
    return <Field component={TextField} label={text} name="outlined" variant="outlined" />
}
