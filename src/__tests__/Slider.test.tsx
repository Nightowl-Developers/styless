/**
 * @jest-environment jsdom
 */
 import * as React from 'react';

 import {
     fireEvent,
     render
 } from '@testing-library/react';
 import Slider from '../components/Slider';

 describe('Slider component', () => {
     it('should render', () => {
        const { getByLabelText, getByPlaceholderText } = render(<Slider
            id='slider'
            label='Slider'
            placeholder='Slider'
        />);

        expect(getByLabelText('Slider')).toBeInTheDocument();
        expect(getByPlaceholderText('Slider')).toBeInTheDocument();
     });
 });