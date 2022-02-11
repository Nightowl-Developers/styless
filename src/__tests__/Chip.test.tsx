/**
 * @jest-environment jsdom
 */
 import * as React from 'react';

 import {
     fireEvent,
     render
 } from '@testing-library/react';
 import Chip from '../components/Chip';

 describe('Chip component', () => {
     it('should render', () => {
         const {
            container
         } = render(<Chip
            closeIcon={<>
                something
            </>}
         >
             Chip
         </Chip>);

         expect(container.querySelector('.chip')).toBeInTheDocument();
     });

     it('should not render close icon', () => {
         const {
            container
         } = render(<Chip>
             Chip
         </Chip>);

         expect(container.querySelector('.chip')).toBeInTheDocument();
     });

     it('should fire the onBlur prop when the Close Button is clicked', () => {
        const handlers = {
            blur: () => {}
        };

        const eventSpy = jest.spyOn(handlers, 'blur');

        const {
           container
        } = render(<Chip
            closable
            closeIcon={<>
               something
           </>}
           onBlur={handlers.blur}
           onClick={() => {}}
           onFocus={() => {}}
        >
            Chip
        </Chip>);

        const chipButton = container.querySelector('.chip-close-button');

        fireEvent.focus(chipButton);
        fireEvent.blur(chipButton);

        expect(eventSpy).toHaveBeenCalledTimes(1);
     });

     it('should fire the onClick prop when the Close Button is clicked', () => {
        const handlers = {
            click: () => {}
        };

        const eventSpy = jest.spyOn(handlers, 'click');

        const {
           container
        } = render(<Chip
            closable
            closeIcon={<>
               something
           </>}
           onClick={handlers.click}
        >
            Chip
        </Chip>);

        const chipButton = container.querySelector('.chip-close-button');

        fireEvent.click(chipButton);

        expect(eventSpy).toHaveBeenCalledTimes(1);
     });

     it('should fire the onFocus prop when the Close Button is focused', () => {
        const handlers = {
            focus: () => {}
        };

        const eventSpy = jest.spyOn(handlers, 'focus');

        const {
           container
        } = render(<Chip
            closable
            closeIcon={<>
               something
           </>}
           onBlur={() => {}}
           onClick={() => {}}
           onFocus={handlers.focus}
        >
            Chip
        </Chip>);

        const chipButton = container.querySelector('.chip-close-button');

        fireEvent.focus(chipButton);

        expect(eventSpy).toHaveBeenCalledTimes(1);
     });
 });