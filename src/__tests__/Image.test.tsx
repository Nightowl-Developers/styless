/**
 * @jest-environment jsdom
 */
 import * as React from 'react';

 import {
     fireEvent,
     render
 } from '@testing-library/react';
 import Image from '../components/Image';

 describe('Link component', () => {
     it('it should render', async () => {
         const { getByAltText, getByText } = render(<Image
            src=''
            alt='alt text'
         />);

         expect(getByAltText('alt text')).toBeInTheDocument();
         expect(getByText('alt text')).toBeInTheDocument();
     });
 });