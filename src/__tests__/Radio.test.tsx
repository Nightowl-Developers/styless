/**
 * @jest-environment jsdom
 */
 import * as React from 'react';

 import {
     fireEvent,
     render
 } from '@testing-library/react';
 import Radio from '../components/Radio';

 describe('Input component', () => {
     it('should render', () => {
        const { getByLabelText, getByPlaceholderText } = render(<Radio
            id='radio'
            label='Radio'
            placeholder='Radio'
        />);

        expect(getByLabelText('Radio')).toBeInTheDocument();
        expect(getByPlaceholderText('Radio')).toBeInTheDocument();
     });
 });