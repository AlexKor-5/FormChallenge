import React, { useState } from 'react'
import { Title } from '../../components/Title/Title'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import { TextInput } from '../../components/TextInput/TextInput'
import { PhoneNumberInput } from '../../components/PhoneNumberInput/PhoneNumberInput'
import { MyButton } from '../../components/MyButton/MyButton'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

export const Step2 = ({ context, setHaveNumber = f => f }) => {
    const [check, setCheck] = useState(false)
    // console.log(context)
    return (
        <>
            <Title text={'Step 2'} iconRender={<AccountCircleRoundedIcon />} />
            <TextInput text={'Email'} name={'email'} />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={check}
                        onChange={() => {
                            setCheck(!check)
                            setHaveNumber(!check)
                        }}
                        name="checkedB"
                        color="primary"
                    />
                }
                label="Do you have a phone number?"
            />
            {check ? (
                <PhoneNumberInput name={'phoneNumber'} label={'Phone Number'} context={context} />
            ) : null}
            <MyButton>Next</MyButton>
        </>
    )
}
