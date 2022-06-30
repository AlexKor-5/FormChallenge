import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import ListItemText from '@mui/material/ListItemText'
import React from 'react'
import { makeStyles } from '@mui/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
    iconFile: {
        color: '#888',
        fontSize: '42px !important',
    },
    fullBlock: {
        width: '100%',
    },
}))

export const FilesList = ({ dataList = [], ...props }) => {
    const styles = useStyles()
    return (
        <List
            sx={{ width: '100%', maxWidth: '100%' }}
            className={styles.fullBlock}
            {...props}
        >
            {dataList.map((file, i) => (
                <ListItem key={i}>
                    <ListItemAvatar>
                        <InsertDriveFileIcon className={styles.iconFile} />
                    </ListItemAvatar>
                    <ListItemText primary={file.path} secondary={file.size} />
                </ListItem>
            ))}
        </List>
    )
}
FilesList.propTypes = {
    dataList: PropTypes.array,
}
