import * as React from 'react';
import PropTypes from 'prop-types';
import {useControlled} from "../hooks";
import Error from "./Error";
import Hint from "./Hint";

type propsToOmit = 'defaultValue' | 'id' | 'value';

export interface EmailProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, propsToOmit> {
    defaultValue?: string;
    error?: string;
    hint?: string;
    id: string;
    label: string;
    labelProps?: React.HTMLAttributes<HTMLLabelElement>;
    value?: string;
};

const Email = React.forwardRef<HTMLInputElement, EmailProps>(({
    defaultValue,
    disabled = false,
    error,
    hint,
    id,
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
        name: 'Email'
    });

    const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        if (disabled) return;

        if (onBlur) {
            onBlur(event);
        }
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (disabled) return;

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
            {...props.labelProps}
            id={`${id}-label`}
        >
            { props.label }
        </label>

        <input
            {...props}
            aria-invalid={!!error}
            aria-describedby={`${id}-hint`}
            aria-errormessage={`${id}-error`}
            aria-labelledby={`${id}-label`}
            disabled={disabled}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            onFocus={handleOnFocus}
            type='email'
            value={value}
            ref={ref}
        />

        <Hint id={id} hint={hint} />

        <Error id={id} message={error} />
    </>;
});

Email.displayName = 'Email';

Email.propTypes = {
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    hint: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    labelProps: PropTypes.any,
    onBlur: PropTypes.any,
    onChange: PropTypes.any,
    onClick: PropTypes.any,
    onFocus: PropTypes.any,
    value: PropTypes.string,
};

export default Email;