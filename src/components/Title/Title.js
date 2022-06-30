import React from 'react'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
    flexContainer: {
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
    },
    typography: {
        marginBottom: '0px !important',
        marginLeft: '5px !important',
    },
})

export const Title = ({ text, iconRender, ...props }) => {
    const classes = useStyles()
    return (
        <div className={classes.flexContainer}>
            {iconRender}
            <Typography
                variant="h6"
                gutterBottom
                component="div"
                className={classes.typography}
                {...props}
            >
                {text}
            </Typography>
        </div>
    )
}
Title.propTypes = {
    text: PropTypes.string.isRequired,
    iconRender: PropTypes.element.isRequired,
}
