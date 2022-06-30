import React, { useState } from 'react'
import { Field } from 'formik'
import 'react-phone-number-input/style.css'
import Input from 'react-phone-number-input/input'
import { TextField } from 'formik-mui'
import { useFormikContext } from 'formik'
import PropTypes from 'prop-types'

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
MyField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}

export const PhoneNumberInput = ({ ...props }) => {
    const [focus, setFocus] = useState(false)
    const { setFieldValue, values } = useFormikContext()
    const { name } = props
    return (
        <>
            <Input
                {...props}
                country="UA"
                value={values.phoneNumber}
                international={focus}
                withCountryCallingCode
                onChange={(value) => {
                    setFieldValue(name, value)
                }}
                inputComponent={MyField}
                onFocus={() => setFocus(true)}
            />
        </>
    )
}
PhoneNumberInput.propTypes = {
    name: PropTypes.string.isRequired,
}
