/**
 * @jest-environment jsdom
 */
 import * as React from 'react';

 import {
     fireEvent,
     render
 } from '@testing-library/react';
 import NumericInput from '../components/NumericInput';

 describe('Input component', () => {
     it('should render', () => {
        const { getByLabelText, getByPlaceholderText } = render(<NumericInput
            id='input'
            label='Input'
            placeholder='Input'
        />);

        expect(getByLabelText('Input')).toBeInTheDocument();
        expect(getByPlaceholderText('Input')).toBeInTheDocument();
     });
 });