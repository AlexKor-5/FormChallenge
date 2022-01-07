import React from 'react'
import { Step1 } from './pages/Step1/Step1'
import { Formik, Form } from 'formik'
import { TextInput } from './components/TextInput/TextInput'
import * as Yup from 'yup'
import { MyButton } from './components/MyButton/MyButton'
import { Title } from './components/Title/Title'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import { MainContainer } from './components/MainContainer/MainContainer'

export const App = () => {
    return (
        <>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    // email: '',
                    // phoneNumber: '',
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Have to be 15 characters or less.')
                        .required('Required.'),
                    lastName: Yup.string()
                        .max(20, 'Have to be 20 or less characters.')
                        .required('Required.'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        setSubmitting(false)
                    }, 400)
                }}
            >
                <Form>
                    <MainContainer>
                        <Title text={'Step 1'} iconRender={<AccountCircleRoundedIcon />} />
                        <TextInput text={'First Name'} name={'firstName'} />
                        <TextInput text={'Last Name'} name={'lastName'} />
                        <MyButton>Next</MyButton>
                    </MainContainer>
                </Form>
            </Formik>
        </>
    )
}
