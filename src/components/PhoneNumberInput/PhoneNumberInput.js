import React, { useState, useRef } from 'react'
import { Field, useField, useFormik, useFormikContext } from 'formik'
import TextField from '@mui/material/TextField'
import 'react-phone-number-input/style.css'
import Input from 'react-phone-number-input/input'
import { isValidPhoneNumber } from 'react-phone-number-input'
// import { TextField } from 'formik-mui'

const MyTextField = React.forwardRef(function custom(props, ref) {
    console.log('zz = ' + JSON.stringify(props, undefined, 2))
    const { name, label } = props
    return <TextField {...props} fullWidth inputRef={ref} name={name} label={label} />
})

// const MyField = React.forwardRef(function custom(props, ref) {
//     // console.log(props)
//     // console.log(props)
//     const { name, label } = props
//     return (
//         <Field
//             {...props}
//             component={TextField}
//             label={label}
//             name={name}
//             variant="outlined"
//             inputRef={ref}
//             fullWidth
//         />
//     )
// })

export const PhoneNumberInput = ({ text, ...props }) => {
    const [value, setValue] = useState()
    const [focus, setFocus] = useState(false)
    const [field, meta, context] = useField(props)
    const { name, label } = props

    console.log(props.context)
    return (
        <>
            {meta.touched && meta.error ? (
                <TextField {...field} label={label} error helperText={meta.error} fullWidth />
            ) : (
                <TextField {...field} label={label} fullWidth />
            )}
        </>
    )
}
