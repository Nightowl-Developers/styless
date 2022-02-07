/**
 * @jest-environment jsdom
 */
 import * as React from 'react';

 import {
     fireEvent,
     render
 } from '@testing-library/react';
 import Input from '../components/Input';

 describe('Input component', () => {
     it('should render', () => {
        const { getByLabelText, getByPlaceholderText } = render(<Input
            id='input'
            label='Input'
            placeholder='Input'
        />);

        expect(getByLabelText('Input')).toBeInTheDocument();
        expect(getByPlaceholderText('Input')).toBeInTheDocument();
     });
 });