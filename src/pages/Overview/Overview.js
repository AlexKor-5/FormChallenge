import { Title } from '../../components/Title/Title'
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import { MyButton } from '../../components/MyButton/MyButton'
import React from 'react'
import { DataTable } from '../../components/DataTable/DataTable'
import { FilesList } from '../../components/FIlesList/FilesList'

export const Overview = ({ context }) => {
    const { values } = context
    // console.log(context)
    return (
        <>
            <Title text={'Form Values'} iconRender={<FormatAlignJustifyIcon />} />
            <DataTable tableValues={values} />
            <Title text={'Files'} iconRender={<InsertDriveFileIcon />} />
            <FilesList dataList={values.files} />
            <MyButton type={'submit'}>Submit</MyButton>
        </>
    )
}
