import * as React from 'react';
import PropTypes from 'prop-types';

import {
    useControlled
} from '../hooks';
import Hint from "./Hint";
import Error from "./Error";

type propsToOmit = 'defaultValue' | 'id' | 'value';

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, propsToOmit> {
    defaultValue?: number;
    error?: string;
    hint?: string;
    id: string;
    label: string;
    labelProps?: React.HTMLAttributes<HTMLLabelElement>;
    value?: number;
};

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(({
    defaultValue,
    disabled = false,
    error,
    hint,
    id,
    label,
    labelProps,
    onBlur,
    onChange,
    onClick,
    onFocus,
    value: valueProp,
    ...props
}, ref) => {
    const [value, setValue] = useControlled<number>({
        controlled: valueProp,
        default: defaultValue,
        name: 'Slider'
    });

    const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        if (disabled) return;

        if (onBlur) {
            onBlur(event);
        }
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.currentTarget.value));

        if (onChange) {
            onChange(event);
        }
    };

    const handleOnFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        if (disabled) return;

        if (onFocus) {
            onFocus(event);
        }
    };

    return <>
        <label
            {...labelProps}
            htmlFor={id}
        >
            { label }
        </label>

        <input
            {...props}
            aria-invalid={!!error}
            aria-describedby={`${id}-hint`}
            aria-errormessage={`${id}-error`}
            aria-labelledby={`${id}-label`}
            id={id}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            onFocus={handleOnFocus}
            type='range'
            value={value}
            ref={ref}
        />

        <Hint id={id} hint={hint} />

        <Error id={id} message={error} />
    </>;
});

Slider.displayName = 'Slider';

Slider.propTypes = {
    defaultValue: PropTypes.number,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    hint: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    labelProps: PropTypes.any,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.number,
};

export default Slider;