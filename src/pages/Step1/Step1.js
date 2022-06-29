import React from 'react'
import { Title } from '../../components/Title/Title'
import { TextInput } from '../../components/TextInput/TextInput'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import { MyButton } from '../../components/MyButton/MyButton'
// import { useParams } from 'react-router-dom'

export const Step1 = () => {
    // const location = useLocation()
    // console.log('useParams = ', useParams())
    return (
        <>
            <Title text={'Step 1'} iconRender={<AccountCircleRoundedIcon />} />
            <TextInput text={'First Name'} name={'firstName'} />
            <TextInput text={'Last Name'} name={'lastName'} />
            <MyButton
                linkTo={'/step2'}
                touchedFields={{ firstName: true, lastName: true }}
            >
                Next
            </MyButton>
        </>
    )
}
