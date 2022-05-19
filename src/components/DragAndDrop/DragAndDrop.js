import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { makeStyles } from '@mui/styles'
import Paper from '@mui/material/Paper'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import Typography from '@mui/material/Typography'
import { FilesList } from '../FIlesList/FilesList'
import { useFormikContext } from 'formik'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#EEE !important',
        textAlign: 'center',
        cursor: 'pointer',
        color: '#333 !important',
        padding: '20px',
    },
    icon: {
        marginTop: '16px',
        color: '#888',
        fontSize: '42px !important',
    },
    iconFile: {
        color: '#888',
        fontSize: '42px !important',
    },
    text: {
        fontSize: '13px !important',
    },
    fullBlock: {
        width: '100%',
    },
    borderRed: {
        border: '3px solid red !important',
    },
}))

export const DragAndDrop = ({ name, setFieldValue = f => f, ...props }) => {
    const styles = useStyles()
    const { values } = useFormikContext()

    const onDrop = useCallback(
        acceptedFiles => {
            setFieldValue(name, acceptedFiles)
        },
        [name, setFieldValue]
    )
    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    return (
        <>
            <div className={styles.fullBlock}>
                <Paper
                    {...getRootProps({ className: 'dropzone' })}
                    className={styles.root}
                    {...props}
                >
                    <input {...getInputProps()} name={name} />
                    <CloudUploadIcon className={styles.icon} />
                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="p"
                        className={styles.text}
                    >
                        Drag and drop some files here, or click to select files
                    </Typography>
                </Paper>
            </div>

            <aside className={styles.fullBlock}>
                <FilesList dataList={values.files} />
            </aside>
        </>
    )
}
