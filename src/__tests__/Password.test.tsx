/**
 * @jest-environment jsdom
 */
 import * as React from 'react';

 import {
     fireEvent,
     render
 } from '@testing-library/react';
 import Password from '../components/Password';

 describe('Password component', () => {
     it('should render', () => {
         const { getByPlaceholderText, getByLabelText } = render(<Password id='password' label='Password' placeholder='Password' />);

         const input = getByPlaceholderText('Password');
         const label = getByLabelText('Password');

         expect(input).toBeInTheDocument();
         expect(label).toBeInTheDocument();
     });

     it('should have a label that explains the input', () => {
         const { getByPlaceholderText, getByLabelText } = render(<Password id='password' label='Password' placeholder='Password' />);

         const input = getByPlaceholderText('Password');
         const label = getByLabelText('Password');

         expect(input.id).toEqual('password');
        //  expect(label.attributes['htmlFor'])toEqual('password');
     });

     it('should fire change event on input', () => {
        const handlers = {
            change: () => {}
        };

        const handlerSpy = jest.spyOn(handlers, 'change');

        const { getByPlaceholderText } = render(<Password
            id='password'
            label='Password'
            onChange={handlers.change}
            placeholder='Password'
        />);

        const input = getByPlaceholderText('Password');

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

        const { getByPlaceholderText } = render(<Password
            id='password'
            label='Password'
            onFocus={handlers.focus}
            placeholder='Password'
        />);

        const input = getByPlaceholderText('Password');

        fireEvent.focus(input);

        expect(handlerSpy).toHaveBeenCalledTimes(1);
     });

     it('should fire blur event on input', () => {
        const handlers = {
            blur: () => {}
        };

        const handlerSpy = jest.spyOn(handlers, 'blur');

        const { getByPlaceholderText } = render(<Password
            id='password'
            label='Password'
            onBlur={handlers.blur}
            placeholder='Password'
        />);

        const input = getByPlaceholderText('Password');

        fireEvent.blur(input);

        expect(handlerSpy).toHaveBeenCalledTimes(1);
     });

     it('should not fire click event on disabled input', () => {
        const handlers = {
            click: () => {}
        };

        const handlerSpy = jest.spyOn(handlers, 'click');

        const { getByPlaceholderText } = render(<Password
            id='password'
            label='Password'
            onClick={handlers.click}
            placeholder='Password'
            disabled
        />);

        const input = getByPlaceholderText('Password');

        fireEvent.click(input);

        expect(handlerSpy).toHaveBeenCalledTimes(0);
     });

     it('should not fire focus event on disabled input', () => {
        const handlers = {
            focus: () => {}
        };

        const handlerSpy = jest.spyOn(handlers, 'focus');

        const { getByPlaceholderText } = render(<Password
            id='password'
            label='Password'
            onFocus={handlers.focus}
            placeholder='Password'
            disabled
        />);

        const input = getByPlaceholderText('Password');

        fireEvent.focus(input);

        expect(handlerSpy).toHaveBeenCalledTimes(0);
     });
 });