import React from 'react'
import { Title } from '../../components/Title/Title'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import { MyButton } from '../../components/MyButton/MyButton'
import { DragAndDrop } from '../../components/DragAndDrop/DragAndDrop'

export const Step3 = () => {
    return (
        <>
            <Title text={'Step 3'} iconRender={<AccountCircleRoundedIcon />} />
            <DragAndDrop />
            <MyButton>Next</MyButton>
        </>
    )
}
