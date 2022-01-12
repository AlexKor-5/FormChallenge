import React, { useState } from 'react'
import { TextField } from 'formik-mui'
import { Field } from 'formik'
import phoneNumberMask from '../../services/phoneNumberMask/phoneNumberMask'

console.log(
    phoneNumberMask({
        mask: '+x xxx xxx xx xx',
        phone: '78905556781',
        visible: false,
    })
)

export const PhoneNumberInput = ({ text, name }) => {
    const [click, setClick] = useState(true)
    const [entered, setEntered] = useState('')

    const handleChange = event => {
        // setEntered(event.target.value)
        setEntered(
            phoneNumberMask({
                mask: '+x xxx xxx xx xx',
                phone: event.target.value,
                visible: false,
            })
        )
    }

    const handleClick = () => {
        click && setEntered('+7')
        setClick(false)
    }

    return (
        <Field
            component={TextField}
            label={text}
            value={entered}
            name={name}
            variant="outlined"
            fullWidth
            onChange={handleChange}
            onClick={handleClick}
        />
    )
}
