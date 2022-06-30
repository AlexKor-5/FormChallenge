import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { fireEvent } from '@testing-library/react'
import { App } from './App'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

//https://testing-playground.com/ -> the helper to find a right role of element in HTML
const mockSubmit = jest.fn()

describe('App', () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App submit={mockSubmit} />
            </MemoryRouter>
        )
    })

    it('submits data', async () => {
        // first page
        await holdOn(enterIntoField(getFirstName(), 'Alexander'))
        expect(getFirstName()).toHaveValue('Alexander')

        await holdOn(enterIntoField(getLastName(), 'Kor'))
        expect(getLastName()).toHaveValue('Kor')

        expect(getButton()).toBeInTheDocument()

        await clickOnNextButton()
        expect(getEmail()).toBeInTheDocument()

        // step2
        await holdOn(
            fireEvent.change(getEmail(), {
                target: { value: '218855@ukr.net' },
            })
        )
        expect(getEmail()).toHaveValue('218855@ukr.net')

        await holdOn(fireEvent.click(getCheckBox()))
        expect(getCheckBox()).toBeChecked()
        expect(getPhoneNum()).toBeInTheDocument()
        await holdOn(fireEvent.click(getCheckBox()))
        expect(getCheckBox()).not.toBeChecked()

        await holdOn(fireEvent.click(getCheckBox()))
        expect(getPhoneNum()).toBeInTheDocument()
        await holdOn(userEvent.type(getPhoneNum(), '0960029972'))
        expect(getPhoneNum()).toHaveValue('+380 096 002 9972')
        expect(getButton()).toBeInTheDocument()
        await clickOnNextButton()

        //step3
        await clickOnNextButton()

        //overview
        expect(getSubmitBtn()).toBeInTheDocument()
        await holdOn(fireEvent.click(getSubmitBtn()))
        expect(mockSubmit).toHaveBeenCalledTimes(1)
        expect(mockSubmit).toHaveBeenLastCalledWith({
            availablePhoneNumber: true,
            email: '218855@ukr.net',
            files: [],
            firstName: 'Alexander',
            lastName: 'Kor',
            phoneNumber: '+380960029972',
        })
    })

    it('has 2 required fields on first page', async () => {
        await clickOnNextButton()
        expect(getAllRequireErrorMessages().length).toBe(2)
        getAllRequireErrorMessages().forEach((oneMessage) => {
            expect(oneMessage).toBeInTheDocument()
        })
    })

    it('has 1 required fields on Step2 page', async () => {
        await holdOn(enterIntoField(getFirstName(), 'Alexander'))
        await holdOn(enterIntoField(getLastName(), 'Kor'))
        await clickOnNextButton()
        // Step 2
        await clickOnNextButton()
        expect(getRequiredMessage()).toBeInTheDocument()
    })
})

const holdOn = async (code) => await waitFor(() => code)

const enterIntoField = (field, value) =>
    fireEvent.change(field, { target: { value } })

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

const getEmail = () =>
    screen.getByRole('textbox', {
        name: /email/i,
    })
const getCheckBox = () =>
    screen.getByRole('checkbox', {
        name: /do you have a phone number\?/i,
    })
const getPhoneNum = () =>
    screen.getByRole('textbox', {
        name: /phone number/i,
    })
const getSubmitBtn = () =>
    screen.getByRole('button', {
        name: /submit/i,
    })

const getRequiredMessage = () => screen.getByText(/required\./i)

const getAllRequireErrorMessages = () => screen.getAllByText(/required/i)
const clickOnNextButton = async () =>
    await waitFor(() => userEvent.click(getButton()))
