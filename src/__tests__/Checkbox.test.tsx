/**
 * @jest-environment jsdom
 */
 import * as React from 'react';

 import {
     fireEvent,
     render
 } from '@testing-library/react';
 import Checkbox from '../components/Checkbox';

 describe('Checkbox component', () => {
     it('should render', () => {
        const { getByLabelText, getByPlaceholderText } = render(<Checkbox
            id='checkbox'
            label='Checkbox'
            placeholder='Checkbox'
        />);

        expect(getByLabelText('Checkbox')).toBeInTheDocument();
        expect(getByPlaceholderText('Checkbox')).toBeInTheDocument();
     });
 });