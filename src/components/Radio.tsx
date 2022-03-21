import * as React from 'react';
import PropTypes from 'prop-types';

import {
    useControlled
} from '../hooks';
import Hint from "./Hint";
import Error from "./Error";

type propsToOmit = 'id' | 'value';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, propsToOmit> {
    error?: string;
    hint?: string;
    id: string;
    label: string;
    labelProps?: React.HTMLAttributes<HTMLLabelElement>;
    value?: boolean;
};

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(({
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
    const [value, setValue] = useControlled<boolean>({
        controlled: valueProp,
        default: false,
        name: 'Radio'
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

    const handleOnClick = (event: React.MouseEvent<HTMLInputElement>) => {
        if (disabled) return;

        if (onClick) {
            onClick(event);
        }
    }

    const handleOnFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        if (disabled) return;

        if (onFocus) {
            onFocus(event);
        }
    };

    return <>
        <input
            {...props}
            id={id}
            aria-invalid={!!error}
            aria-describedby={`${id}-hint`}
            aria-errormessage={`${id}-error`}
            aria-labelledby={`${id}-label`}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            onClick={handleOnClick}
            onFocus={handleOnFocus}
            type='radio'
            value={value.toString()}
            ref={ref}
        />

        <label
            {...labelProps}
            htmlFor={id}
        >
            { label }
        </label>

        <Hint id={id} hint={hint} />

        <Error id={id} message={error} />
    </>;
});

Radio.displayName = 'Radio';

Radio.propTypes = {
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

export default Radio;