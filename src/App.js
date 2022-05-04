import React from 'react'
import { Step1 } from './pages/Step1/Step1'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { MainContainer } from './components/MainContainer/MainContainer'
import { Title } from './components/Title/Title'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import { TextInput } from './components/TextInput/TextInput'
import { MyButton } from './components/MyButton/MyButton'
import { PhoneNumberInput } from './components/PhoneNumberInput/PhoneNumberInput'
import 'yup-phone'
import { Step2 } from './pages/Step2/Step2'

export const App = () => {
    return (
        <>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Have to be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Have to be 20 or less characters')
                        .required('Required'),
                    email: Yup.string().required('Required.'),
                    phoneNumber: Yup.string().phone('UA', true, 'Phone number is invalid'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        setSubmitting(false)
                    }, 400)
                }}
            >
                {context => (
                    <Form>
                        <MainContainer>
                            <Step2 context={context} />
                        </MainContainer>
                    </Form>
                )}
            </Formik>
        </>
    )
}
