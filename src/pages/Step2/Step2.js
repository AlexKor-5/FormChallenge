import React, { useState } from 'react'
import { Title } from '../../components/Title/Title'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import { TextInput } from '../../components/TextInput/TextInput'
import { PhoneNumberInput } from '../../components/PhoneNumberInput/PhoneNumberInput'
import { MyButton } from '../../components/MyButton/MyButton'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { useFormikContext } from 'formik'
import PropTypes from 'prop-types'

export const Step2 = ({ setHaveNumber = (f) => f }) => {
    const [check, setCheck] = useState(false)
    const { setFieldValue, values } = useFormikContext()

    return (
        <>
            <Title text={'Step 2'} iconRender={<AccountCircleRoundedIcon />} />
            <TextInput text={'Email'} name={'email'} />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={values.availablePhoneNumber}
                        onChange={() => {
                            setCheck(!check)
                            setHaveNumber(!check)
                            setFieldValue('availablePhoneNumber', !check)
                        }}
                        name={'availablePhoneNumber'}
                        color="primary"
                    />
                }
                label="Do you have a phone number?"
            />
            {values.availablePhoneNumber || check ? (
                <PhoneNumberInput name={'phoneNumber'} label={'Phone Number'} />
            ) : null}
            <MyButton
                linkTo={'/step3'}
                touchedFields={{ email: true, phoneNumber: true }}
            >
                Next
            </MyButton>
        </>
    )
}
Step2.propTypes = {
    setHaveNumber: PropTypes.func,
}
