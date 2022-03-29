/**
 * @jest-environment jsdom
 */
 import * as React from 'react';

 import {
     act,
     fireEvent, getByTitle,
    render
} from '@testing-library/react';
 import Accordion from '../components/Accordion';
 
 describe('Accordion component', () => {
     it('should render', () => {
         const {container} = render(<Accordion title={'Accordion Title'}>
             Content
         </Accordion>);

         expect(container).toBeInTheDocument();
     });

     it('should open', () => {
         const {container, getByText} = render(<Accordion className={'test'} title={'Accordion Title'}>
             Content
         </Accordion>);

        const title = getByText('Accordion Title');


        act(() => {
            fireEvent.click(title);
        });

        expect(container.querySelector('.accordion__content').classList).toContain('content-visible');
     })
 });