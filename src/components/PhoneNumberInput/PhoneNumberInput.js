import React, { useState, useRef } from 'react'
import { Field, useField, useFormik, useFormikContext } from 'formik'
import TextField from '@mui/material/TextField'
// import { TextField } from 'formik-mui'

import 'react-phone-number-input/style.css'
import Input from 'react-phone-number-input/input'
import { isValidPhoneNumber } from 'react-phone-number-input'
import { values } from 'ramda'

const MyTextField = React.forwardRef(function custom(props, ref) {
    return <TextField {...props} fullWidth inputRef={ref} label="Phone number" />
})
//
// const CustomInput = ({ ...props }) => {
//     const [value, setValue] = useState()
//     const [focus, setFocus] = useState(false)
//
//     console.log('CustomInput props = ', props)
//
//     return (
//         <>
//             <Input
//                 country="US"
//                 international={focus}
//                 value={value}
//                 withCountryCallingCode
//                 onChange={setValue}
//                 inputComponent={MyTextField}
//                 onFocus={() => setFocus(true)}
//                 control={props.control}
//                 {...props}
//             />
//         </>
//     )
// }

export const PhoneNumberInput = ({ text, ...props }) => {
    const [value, setValue] = useState()
    const [focus, setFocus] = useState(false)
    const [field, meta] = useField(props)
    // console.log('f = ', field)
    // console.log('p = ', props)
    console.log('CustomInput props = ', props)
    // const formik = useFormik()
    // console.log(useFormikContext())

    return (
        <>
            <Input
                country="US"
                international={focus}
                value={value}
                withCountryCallingCode
                onChange={props.context.handleChange}
                inputComponent={MyTextField}
                onFocus={() => setFocus(true)}
                control={props.control}
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
