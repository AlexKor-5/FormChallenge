import React from 'react'
import { Title } from '../../components/Title/Title'
import { TextInput } from '../../components/TextInput/TextInput'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import { MyButton } from '../../components/MyButton/MyButton'

export const Step1 = ({ context }) => {
    // console.log(context)
    return (
        <>
            <Title text={'Step 1'} iconRender={<AccountCircleRoundedIcon />} />
            <TextInput text={'First Name'} name={'firstName'} />
            <TextInput text={'Last Name'} name={'lastName'} />
            <MyButton
                linkTo={'/step2'}
                touchedFields={{ firstName: true, lastName: true }}
                context={context}
            >
                Next
            </MyButton>
        </>
    )
}
