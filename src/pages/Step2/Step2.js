import React from 'react'
import { Title } from '../../components/Title/Title'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import { TextInput } from '../../components/TextInput/TextInput'
import { PhoneNumberInput } from '../../components/PhoneNumberInput/PhoneNumberInput'
import { MyButton } from '../../components/MyButton/MyButton'

export const Step2 = ({ context }) => {
    return (
        <>
            <Title text={'Step 2'} iconRender={<AccountCircleRoundedIcon />} />
            <TextInput text={'Email'} name={'email'} />
            <PhoneNumberInput name={'phoneNumber'} label={'Phone Number'} context={context} />
            <MyButton>Next</MyButton>
        </>
    )
}
