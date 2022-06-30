import React from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { useFormikContext } from 'formik'
import PropTypes from 'prop-types'

export const MyButton = ({ children, linkTo, type, touchedFields, ...props }) => {
    const navigate = useNavigate()
    const { setTouched, validateForm } = useFormikContext()

    const handleClick = (touchedFields) => {
        setTouched(touchedFields)
        validateForm()
            .then((values) =>
                Object.keys(touchedFields).some((touched) =>
                    Object.keys(values).includes(touched)
                )
            )
            .then((bool) => {
                navigate(bool ? '#' : linkTo)
            })
    }

    return (
        <Button
            variant="contained"
            {...props}
            type={type}
            onClick={() => handleClick(touchedFields)}
            fullWidth
        >
            {children}
        </Button>
    )
}
MyButton.propTypes = {
    children: PropTypes.node.isRequired,
    linkTo: PropTypes.string,
    type: PropTypes.string,
    touchedFields: PropTypes.object,
}
MyButton.defaultProps = {
    linkTo: '#',
    type: 'button',
    touchedFields: {},
}
