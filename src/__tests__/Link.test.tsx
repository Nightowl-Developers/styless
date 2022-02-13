/**
 * @jest-environment jsdom
 */
 import * as React from 'react';

 import {
     fireEvent,
     render
 } from '@testing-library/react';
 import Link from '../components/Link';

 describe('Link component', () => {
     it('it should render', async () => {
         const { getByText } = render(<Link href='/somewhere'>
            Click here
         </Link>);

         expect(getByText('Click here')).toBeInTheDocument();
     });
 })