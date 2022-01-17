import React, { useState, useRef } from 'react'
// import { TextField } from 'formik-mui'
import { Field } from 'formik'
import phoneNumberMask from '../../services/phoneNumberMask/phoneNumberMask'
// import { MaskField } from 'react-mask-field'
import TextField from '@mui/material/TextField'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import ua from 'react-phone-number-input/locale/ua.json'
import Input from 'react-phone-number-input/input'

// import { TextField } from 'formik-mui'

const MyTextField = React.forwardRef(function custom(props, ref) {
    console.log(props)
    return <TextField {...props} fullWidth inputRef={ref} label="Phone number" />
})

// const MyTextField = props => {
//     console.log(props)
//     return <TextField {...props} fullWidth />
// }

export const PhoneNumberInput = ({ text, name }) => {
    const [click, setClick] = useState(true)
    const [entered, setEntered] = useState({ string: '' })
    const inputText = useRef(null)

    const [value, setValue] = useState()

    // const handleChange = event => {
    //     // setEntered(event.target.value)
    //     setEntered({
    //         string: phoneNumberMask({
    //             mask: '+x xxx xxx xx xx',
    //             phone: event.target.value,
    //             visible: false,
    //         }),
    //     })
    // }

    return (
        <>
            {/*<Field*/}
            {/*    component={TextFieldWithMask}*/}
            {/*    label={text}*/}
            {/*    value={entered.string}*/}
            {/*    name={name}*/}
            {/*    variant="outlined"*/}
            {/*    fullWidth*/}
            {/*    onChange={handleChange}*/}
            {/*    // onClick={handleClick}*/}
            {/*/>*/}
            {/*<TextFieldWithMask />*/}
            {/*<PhoneInput placeholder="Enter phone number" value={value} onChange={setValue} />*/}
            <Input
                country="UA"
                international
                value={value}
                withCountryCallingCode
                onChange={setValue}
                inputComponent={MyTextField}
            />
        </>
    )
}
