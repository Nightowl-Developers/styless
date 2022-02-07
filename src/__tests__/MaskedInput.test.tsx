/**
 * @jest-environment jsdom
 */
 import * as React from 'react';

 import {
     fireEvent,
     render
 } from '@testing-library/react';
 import MaskedInput from '../components/MaskedInput';

 describe('Checkbox component', () => {
     it('should render', () => {
        const { getByLabelText, getByPlaceholderText } = render(<MaskedInput
            id='input'
            label='MaskedInput'
            mask='xxx-xxx-xxxx'
            maskDelimiter='-'
            placeholder='MaskedInput'
            value='333'
        />);

        expect(getByLabelText('MaskedInput')).toBeInTheDocument();
        expect(getByPlaceholderText('MaskedInput')).toBeInTheDocument();
     });
 });