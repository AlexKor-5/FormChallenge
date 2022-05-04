import React, { useState, useRef } from 'react'
import { Field, useField, useFormik, useFormikContext } from 'formik'
// import TextField from '@mui/material/TextField'
import 'react-phone-number-input/style.css'
import Input from 'react-phone-number-input/input'
// import { isValidPhoneNumber } from 'react-phone-number-input'
import { TextField } from 'formik-mui'

const MyField = React.forwardRef(function custom(props, ref) {
    const { name, label } = props
    return (
        <Field
            {...props}
            component={TextField}
            label={label}
            name={name}
            variant="outlined"
            inputRef={ref}
            fullWidth
        />
    )
})

export const PhoneNumberInput = ({ text, ...props }) => {
    // const [value, setValue] = useState()
    const [focus, setFocus] = useState(false)
    const { setFieldValue } = props.context
    const { name } = props
    // console.log(props.context)
    return (
        <>
            <Input
                {...props}
                country="UA"
                international={focus}
                // value={value}
                withCountryCallingCode
                onChange={value => {
                    setFieldValue(name, value)
                }}
                inputComponent={MyField}
                onFocus={() => setFocus(true)}
            />
        </>
    )
}
