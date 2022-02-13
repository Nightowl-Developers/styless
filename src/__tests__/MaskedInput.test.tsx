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

     it('should have a mask that reads `123-45-xxxx`', () => {
         const { container } = render(<MaskedInput
            id='input'
            label='MaskedInput'
            mask='xxx-xxx-xxxx'
            maskDelimiter='-'
            placeholder='MaskedInput'
            value='123'
         />);

         const input = container.querySelector('input');

         fireEvent.change(input, {
             target: {
                 value: '123-45'
             }
         });

         expect(input.value).toEqual('123-45-xxxx');
     });
 });