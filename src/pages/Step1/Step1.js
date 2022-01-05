import React from 'react'
import { Input } from '../../components/Input/Input'
import { Title } from '../../components/Title/Title'

export const Step1 = () => {
    return (
        <>
            <Title text={'Step 1'} />
            <Input inputName={'Name'} variantValue={'outlined'} />
            <Input inputName={'Last Name'} variantValue={'outlined'} />
        </>
    )
}
