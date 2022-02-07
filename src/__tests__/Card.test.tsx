/**
 * @jest-environment jsdom
 */
 import * as React from 'react';

 import {
     fireEvent,
     render
 } from '@testing-library/react';

 import Button from '../components/Button';
 import Card from '../components/Card';

 describe('Card component', () => {
     it('should render', () => {
        const { getByText } = render(<Card>
            <Button>click me</Button>
        </Card>);

        expect(getByText('click me')).toBeInTheDocument();
     });
 });