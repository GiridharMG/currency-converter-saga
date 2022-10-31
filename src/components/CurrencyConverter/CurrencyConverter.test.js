import React from 'react'
import { render, screen } from '@testing-library/react'
import CurrencyConverter from './CurrencyConverter'

it('renders header', () => {
    render(
        <CurrencyConverter />
    )
    const element = screen.getByText(/Currency Converter/)
    expect(element).toBeInTheDocument()
})

it('renders lable', () => {
    render(
        <CurrencyConverter />
    )
    const element = screen.getByText(/Select currencies to convert/)
    expect(element).toBeInTheDocument()
})