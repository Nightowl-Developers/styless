/**
 * @jest-environment jsdom
 */
import * as React from 'react';

import {
    fireEvent,
    render
} from '@testing-library/react';
import Button from '../components/Button';

describe('Button component', () => {
    it('should render', () => {
        const { getByText } = render(<Button>click me</Button>);

        expect(getByText('click me')).toBeInTheDocument();
    });

    it('should call the click handler prop on click', () => {
        const handlers = {
            click: () => {}
        };

        const handlerSpy = jest.spyOn(handlers, 'click');

        const { getByText } = render(<Button
            onClick={handlers.click}
        >
            click me
        </Button>);

        const button = getByText('click me');

        fireEvent.click(button);

        expect(handlerSpy).toHaveBeenCalledTimes(1);
    });

    it('should call the focus handler prop on focus', () => {
        const handlers = {
            focus: () => {}
        };

        const handlerSpy = jest.spyOn(handlers, 'focus');

        const { getByText } = render(<Button
            onFocus={handlers.focus}
        >
            click me
        </Button>);

        const button = getByText('click me');

        fireEvent.focus(button);

        expect(handlerSpy).toHaveBeenCalledTimes(1);
    });

    it('should call the blur handler prop on blur', () => {
        const handlers = {
            blur: () => {}
        };

        const handlerSpy = jest.spyOn(handlers, 'blur');

        const { getByText } = render(<Button
            onBlur={handlers.blur}
        >
            click me
        </Button>);

        const button = getByText('click me');

        fireEvent.blur(button);

        expect(handlerSpy).toHaveBeenCalledTimes(1);
    });

    it('should not handle click events when disabled', () => {
        const handlers = {
            click: () => {}
        };

        const handlerSpy = jest.spyOn(handlers, 'click');

        const { getByText } = render(<Button
            onClick={handlers.click}
            disabled
        >
            click me
        </Button>);

        const button = getByText('click me');

        fireEvent.click(button);

        expect(handlerSpy).toHaveBeenCalledTimes(0);
    });

    it('should not be focus-able when disabled', () => {
        const handlers = {
            focus: () => {}
        };

        const handlerSpy = jest.spyOn(handlers, 'focus');

        const { getByText } = render(<Button
            onBlur={handlers.focus}
            disabled
        >
            click me
        </Button>);

        const button = getByText('click me');

        fireEvent.focus(button);

        expect(handlerSpy).toHaveBeenCalledTimes(0);
    });
});