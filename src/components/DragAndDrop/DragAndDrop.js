import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { makeStyles } from '@mui/styles'
import Paper from '@mui/material/Paper'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import Typography from '@mui/material/Typography'
// import { FieldArray } from 'formik'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'

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

export const DragAndDrop = ({ name, setFieldValue = f => f, currentFiles }) => {
    const styles = useStyles()

    const onDrop = useCallback(
        acceptedFiles => {
            acceptedFiles.forEach(file => {
                setFieldValue(name, [...currentFiles, file])
            })
        },
        [name, setFieldValue, currentFiles]
    )
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({ onDrop })

    return (
        <>
            <div className={styles.fullBlock}>
                <Paper {...getRootProps({ className: 'dropzone' })} className={styles.root}>
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
                <List sx={{ width: '100%', maxWidth: '100%' }} className={styles.fullBlock}>
                    {acceptedFiles.map((file, i) => (
                        <ListItem key={i}>
                            <ListItemAvatar>
                                <InsertDriveFileIcon className={styles.iconFile} />
                            </ListItemAvatar>
                            <ListItemText primary={file.path} secondary={file.size} />
                        </ListItem>
                    ))}
                </List>
            </aside>
        </>
    )
}
