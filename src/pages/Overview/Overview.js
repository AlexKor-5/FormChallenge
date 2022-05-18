import { Title } from '../../components/Title/Title'
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import { MyButton } from '../../components/MyButton/MyButton'
import React from 'react'
import { DataTable } from '../../components/DataTable/DataTable'
import { FilesList } from '../../components/FIlesList/FilesList'
import { useFormikContext } from 'formik'
import { Link as Linker } from 'react-router-dom'

export const Overview = () => {
    const { values } = useFormikContext()
    return (
        <>
            <Title text={'Form Values'} iconRender={<FormatAlignJustifyIcon />} />
            <DataTable tableValues={values} />
            <Title
                text={values.files.length === 0 ? 'No files added' : 'Files'}
                iconRender={<InsertDriveFileIcon />}
            />
            <FilesList dataList={values.files} />
            <MyButton type={'submit'}>Submit</MyButton>
            <Linker to={'/'}>{'Start over'}</Linker>
        </>
    )
}
