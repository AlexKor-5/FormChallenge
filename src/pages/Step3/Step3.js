import React from 'react'
import { Title } from '../../components/Title/Title'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import { MyButton } from '../../components/MyButton/MyButton'
import { DragAndDrop } from '../../components/DragAndDrop/DragAndDrop'
import { useFormikContext } from 'formik'

export const Step3 = () => {
    const { setFieldValue } = useFormikContext()
    return (
        <>
            <Title text={'Step 3'} iconRender={<AccountCircleRoundedIcon />} />
            <DragAndDrop name={'files'} setFieldValue={setFieldValue} />
            <MyButton linkTo={'/overview'}>Next</MyButton>
        </>
    )
}
