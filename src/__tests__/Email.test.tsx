/**
 * @jest-environment jsdom
 */
 import * as React from 'react';

 import {
     fireEvent,
     render
 } from '@testing-library/react';
 import Email from '../components/Email';

 describe('Email component', () => {
     it('should render', () => {
         const { getByPlaceholderText, getByLabelText } = render(<Email id='email' label='Email Address' placeholder='Email Address' />);

         const input = getByPlaceholderText('Email Address');
         const label = getByLabelText('Email Address');

         expect(input).toBeInTheDocument();
         expect(label).toBeInTheDocument();
     });

     it('should have a label that explains the input', () => {
         const { getByPlaceholderText, getByLabelText } = render(
             <Email id='email' label='Email Address' placeholder='Email Address' />
         );

         const input = getByPlaceholderText('Email Address');
         const label = getByLabelText('Email Address');

         expect(getByPlaceholderText('Email Address')).toHaveAttribute('id', 'email');
     });

     it('should fire change event on input', () => {
        const handlers = {
            change: () => {}
        };

        const handlerSpy = jest.spyOn(handlers, 'change');

        const { getByPlaceholderText } = render(<Email
            id='email'
            label='Email Address'
            onChange={handlers.change}
            placeholder='Email Address'
        />);

        const input = getByPlaceholderText('Email Address');

        fireEvent.change(input, {
            target: {
                value: 'Hello'
            }
        });

        expect(handlerSpy).toHaveBeenCalledTimes(1);
     });

     it('should fire focus event on input', () => {
        const handlers = {
            focus: () => {}
        };

        const handlerSpy = jest.spyOn(handlers, 'focus');

        const { getByPlaceholderText } = render(<Email
            id='email'
            label='Email Address'
            onFocus={handlers.focus}
            placeholder='Email Address'
        />);

        const input = getByPlaceholderText('Email Address');

        fireEvent.focus(input);

        expect(handlerSpy).toHaveBeenCalledTimes(1);
     });

     it('should fire blur event on input', () => {
        const handlers = {
            blur: () => {}
        };

        const handlerSpy = jest.spyOn(handlers, 'blur');

        const { getByPlaceholderText } = render(<Email
            id='email'
            label='Email Address'
            onBlur={handlers.blur}
            placeholder='Email Address'
        />);

        const input = getByPlaceholderText('Email Address');

        fireEvent.blur(input);

        expect(handlerSpy).toHaveBeenCalledTimes(1);
     });

     it('should not fire click event on disabled input', () => {
        const handlers = {
            click: () => {}
        };

        const handlerSpy = jest.spyOn(handlers, 'click');

        const { getByPlaceholderText } = render(<Email
            id='email'
            label='Email Address'
            onClick={handlers.click}
            placeholder='Email Address'
            disabled
        />);

        const input = getByPlaceholderText('Email Address');

        fireEvent.click(input);

        expect(handlerSpy).toHaveBeenCalledTimes(0);
     });

     it('should not fire focus event on disabled input', () => {
        const handlers = {
            focus: () => {}
        };

        const handlerSpy = jest.spyOn(handlers, 'focus');

        const { getByPlaceholderText } = render(<Email
            id='email'
            label='Email Address'
            onFocus={handlers.focus}
            placeholder='Email Address'
            disabled
        />);

        const input = getByPlaceholderText('Email Address');

        fireEvent.focus(input);

        expect(handlerSpy).toHaveBeenCalledTimes(0);
     });
 });