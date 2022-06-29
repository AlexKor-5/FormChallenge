import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { fireEvent } from '@testing-library/react'
import { App } from './App'
import { BrowserRouter, MemoryRouter, useLocation } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

//https://testing-playground.com/ -> helper to find a right role of element in HTML

describe('App', () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        )
    })

    it('calls submit', async () => {
        // const location = useLocation()

        await waitFor(() =>
            fireEvent.change(getFirstName(), { target: { value: 'Alexander' } })
        )
        expect(getFirstName()).toHaveValue('Alexander')

        await waitFor(() =>
            fireEvent.change(getLastName(), { target: { value: 'Kor' } })
        )
        expect(getLastName()).toHaveValue('Kor')

        expect(getButton()).toBeInTheDocument()
        // console.log(location.pathname)

        // const email = await screen.findByRole('textbox', {
        //     name: /email/i,
        // })
        // console.log(email)

        // fireEvent.change(await findEmail(), {
        //     target: { value: '218855@ukr.net' },
        // })
        // expect(await findEmail()).toHaveValue('218855@ukr.net')
    })
})

const getFirstName = () =>
    screen.getByRole('textbox', {
        name: /first name/i,
    })

const getLastName = () =>
    screen.getByRole('textbox', {
        name: /last name/i,
    })

const getButton = () =>
    screen.getByRole('button', {
        name: /next/i,
    })

const findEmail = () =>
    screen.getByRole('textbox', {
        name: /email/i,
    })
