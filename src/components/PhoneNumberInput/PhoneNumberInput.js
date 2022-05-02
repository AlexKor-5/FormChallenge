import React, { useState, useRef } from 'react'
import { Field, useField, useFormik, useFormikContext } from 'formik'
// import TextField from '@mui/material/TextField'
import 'react-phone-number-input/style.css'
import Input from 'react-phone-number-input/input'
import { isValidPhoneNumber } from 'react-phone-number-input'
import { TextField } from 'formik-mui'

// const MyTextField = React.forwardRef(function custom(props, ref) {
//     console.log('zz = ' + JSON.stringify(props, undefined, 2))
//     const { name, label } = props
//     return <TextField {...props} fullWidth inputRef={ref} name={name} label={label} />
// })

const MyField = React.forwardRef(function custom(props, ref) {
    // console.log(props)
    console.log(props.context)
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
    const [value, setValue] = useState()
    const [focus, setFocus] = useState(false)
    const [field, meta, context] = useField(props)

    // console.log(value && isPossiblePhoneNumber(value) ? 'true' : 'false')
    // console.log(
    //     value
    //         ? isValidPhoneNumber(value)
    //             ? undefined
    //             : 'Invalid phone number'
    //         : 'Phone number required'
    // )

    // console.log(props)

    console.log(value)

    return (
        <>
            <Input
                country="UA"
                international={focus}
                value={value}
                withCountryCallingCode
                onChange={setValue}
                inputComponent={MyField}
                onFocus={() => setFocus(true)}
                control={props.control}
                // error={
                //
                // }
                {...props}
            />
        </>
    )
}

/*<Field*/
/*    component={CustomInput}*/
/*    {...field}*/
/*   {...props}*/
/*    label={text}*/
/*    name={props.name}*/
/*    variant="outlined"*/
/*/>*/
/*<label htmlFor={props.id || props.name}>{props.label}</label>*/
/*<input className="text-input" {...field} {...props} />*/
/*<CustomInput {...props} {...field} control={field} />*/
/*{meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}*/
