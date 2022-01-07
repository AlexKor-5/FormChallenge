import React from 'react'
import { Container } from '@mui/material'
import './mainContainer.scss'
export const MainContainer = ({ children }) => {
    return (
        <Container
            maxWidth={'xs'}
            className="default"
            style={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'center' }}
        >
            {children}
        </Container>
    )
}
