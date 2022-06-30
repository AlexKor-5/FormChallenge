import React from 'react'
import { TextField } from 'formik-mui'
import { Field } from 'formik'
import PropTypes from 'prop-types'

export const TextInput = ({ text, name, ...props }) => {
    return (
        <Field
            component={TextField}
            label={text}
            name={name}
            variant="outlined"
            fullWidth
            {...props}
        />
    )
}
TextInput.propTypes = {
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}
