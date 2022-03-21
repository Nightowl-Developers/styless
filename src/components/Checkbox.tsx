import * as React from 'react';
import PropTypes from 'prop-types';

import {
    useControlled
} from '../hooks';
import Error from "./Error";
import Hint from "./Hint";

type propsToOmit = 'id' | 'value';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, propsToOmit> {
    error?: string;
    hint?: string;
    id: string;
    label: string;
    labelProps?: React.HTMLAttributes<HTMLLabelElement>;
    value?: boolean;
};

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({
    defaultChecked = false,
    disabled = false,
    error,
    hint,
    id,
    label,
    labelProps,
    onBlur,
    onClick,
    onChange,
    onFocus,
    value: valueProp,
    ...props
}, ref) => {
    const [value, setValue] = useControlled<boolean>({
        controlled: valueProp,
        default: defaultChecked,
        name: 'Checkbox'
    });

    const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        if (disabled) return;

        if (onBlur) {
            onBlur(event);
        }
    };
    
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Boolean(event.currentTarget.value));

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
        <input
            {...props}
            aria-invalid={!!error}
            aria-describedby={`${id}-hint`}
            aria-errormessage={`${id}-error`}
            aria-label={label}
            aria-labelledby={`${id}-label`}
            id={id}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            onFocus={handleOnFocus}
            type='checkbox'
            value={value.toString()}
            ref={ref}
        />

        <label
            {...labelProps}
            id={`${id}-label`}
        >
            { label }
        </label>

        <Hint id={id} hint={hint} />

        <Error id={id} message={error} />
    </>;
});

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
    defaultChecked: PropTypes.bool,
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
    value: PropTypes.bool,
};

export default Checkbox;