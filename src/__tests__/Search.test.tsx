/**
 * @jest-environment jsdom
 */
 import * as React from 'react';

 import {
     fireEvent,
     render
 } from '@testing-library/react';
 import Search from '../components/Search';

 describe('Search component', () => {
     it('should render', () => {
        const { getByLabelText, getByPlaceholderText } = render(<Search
            id='search'
            label='Search'
            placeholder='Search'
        />);

        expect(getByLabelText('Search')).toBeInTheDocument();
        expect(getByPlaceholderText('Search')).toBeInTheDocument();
     });
 });