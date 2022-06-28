import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { fireEvent } from '@testing-library/react'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

//https://testing-playground.com/ -> helper to find a right role of element in HTML

describe('App', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )
    })

    it('calls submit', async () => {
        await waitFor(() =>
            fireEvent.change(getFirstName(), { target: { value: 'Alexander' } })
        )
        expect(getFirstName()).toHaveValue('Alexander')

        await waitFor(() =>
            fireEvent.change(getLastName(), { target: { value: 'Kor' } })
        )
        expect(getLastName()).toHaveValue('Kor')

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
const findEmail = () => screen.findByLabelText(/email/i)
