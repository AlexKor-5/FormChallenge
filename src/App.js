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

// const validate = values => {
//     const errors = {}
//     console.log(values)
//     if (!values.email) {
//         errors.email = 'Required'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address'
//     }
//     return errors
// }

const validate = values => {
    let errors = {}
    console.log(values)
    if (!values.phoneNumber) {
        errors.phoneNumber = 'Required'
    }
    return errors
}

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
                    phoneNumber: Yup.string().required('Required'),
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
                            <Title text={'Step 2'} iconRender={<AccountCircleRoundedIcon />} />
                            <TextInput text={'Email'} name={'email'} />
                            <PhoneNumberInput
                                name={'phoneNumber'}
                                label={'Phone Number'}
                                context={context}
                            />
                            <MyButton>Next</MyButton>
                        </MainContainer>
                    </Form>
                )}
            </Formik>
        </>
    )
}
