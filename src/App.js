import React from 'react'
import { Step1 } from './pages/Step1/Step1'
import { Formik, Form } from 'formik'
import { TextInput } from './components/TextInput/TextInput'

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
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        setSubmitting(false)
                    }, 400)
                }}
            >
                <Form>
                    <TextInput text={'First Name'} />
                    <TextInput text={'Last Name'} />
                </Form>
            </Formik>
        </>
    )
}
