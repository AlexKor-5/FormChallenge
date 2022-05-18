import React, { useState } from 'react'
import { Step1 } from './pages/Step1/Step1'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { MainContainer } from './components/MainContainer/MainContainer'
import 'yup-phone'
import { Step2 } from './pages/Step2/Step2'
import { Step3 } from './pages/Step3/Step3'
import { Overview } from './pages/Overview/Overview'
import { Routes, Route } from 'react-router-dom'

export const App = () => {
    const [haveNumber, setHaveNumber] = useState(false)
    return (
        <>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    availablePhoneNumber: false,
                    files: [],
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Have to be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Have to be 20 or less characters')
                        .required('Required'),
                    email: Yup.string().email('Invalid Email').required('Required.'),
                    phoneNumber: haveNumber
                        ? Yup.string().phone('UA', false, 'Phone number is invalid')
                        : Yup.string(),
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
                        <Routes>
                            <Route path="/" element={<Step1 />} />
                            <Route path="step2" element={<Step2 setHaveNumber={setHaveNumber} />} />
                            <Route path="step3" element={<Step3 />} />
                            <Route path="overview" element={<Overview />} />
                        </Routes>
                    </MainContainer>
                </Form>
            </Formik>
        </>
    )
}
