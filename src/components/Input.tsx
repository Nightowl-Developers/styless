import * as React from 'react';
import PropTypes from 'prop-types';

import {
    useControlled
} from '../hooks';
import Error from "./Error";
import Hint from "./Hint";

type propsToOmit = 'defaultValue' | 'id' | 'value';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, propsToOmit> {
    defaultValue?: string;
    error?: string;
    hint?: string;
    id: string;
    label: string;
    labelProps?: React.HTMLAttributes<HTMLLabelElement>;
    value?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(({
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
    const [value, setValue] = useControlled<string>({
        controlled: valueProp,
        default: defaultValue,
        name: 'Input'
    })

    const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        if (disabled) return;

        if (onBlur) {
            onBlur(event);
        }
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);

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
            value={value}
            ref={ref}
        />

        <Hint id={id} hint={hint} />

        <Error id={id} message={error} />
    </>;
});

Input.displayName = 'Input';

Input.propTypes = {
    defaultValue: PropTypes.string,
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
    value: PropTypes.string,
};

export default Input;