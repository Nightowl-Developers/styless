import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

import {
    useControlled,
    useCreateBlurHandler,
    useCreateChangeHandler,
    useCreateClickHandler,
    useCreateFocusHandler
} from '../hooks';
import Hint from "./Hint";
import Error from "./Error";

type propsToOmit = 'defaultValue' | 'id';

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
    className,
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
    const [value, setValueIfUncontrolled] = useControlled<string>({
        controlled: valueProp,
        default: defaultValue,
        name: 'Input'
    });

    const handleOnBlur = useCreateBlurHandler<HTMLInputElement>(
        onBlur,
        disabled
    );
    
    const handleOnChange = useCreateChangeHandler<HTMLInputElement>(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            if (onChange) {
                onChange(event);
            }

            setValueIfUncontrolled(event.currentTarget.value);
        },
        disabled
    );
    
    const handleOnClick = useCreateClickHandler<HTMLInputElement>(
        onClick,
        disabled
    );
    
    const handleOnFocus = useCreateFocusHandler<HTMLInputElement>(
        onFocus,
        disabled
    );

    return <>
        <label
            {...labelProps}
            htmlFor={id}
        >
            { label }
        </label>

        <input
            {...props}
            className={classNames('input', className)}
            id={id}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            onClick={handleOnClick}
            onFocus={handleOnFocus}
            value={value}
            ref={ref}
        />

        { hint && <Hint id={`${id}-hint`} hint={hint} /> }

        { error && <Error id={`${id}-error`} message={error} /> }
    </>;
});

Input.displayName = 'Input';

Input.propTypes = {
    className: PropTypes.string,
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
