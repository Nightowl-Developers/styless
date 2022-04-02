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

type propsToOmit = 'defaultValue' | 'id' | 'type';

export interface NumericInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, propsToOmit> {
    defaultValue?: number;
    error?: string;
    hint?: string;
    id: string;
    label: string;
    labelProps?: React.HTMLAttributes<HTMLLabelElement>;
    value?: number;
}

const NumericInput = React.forwardRef<HTMLInputElement, NumericInputProps>(({
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
    const [value, setValueIfUncontrolled] = useControlled<number>({
        controlled: valueProp,
        default: defaultValue,
        name: 'NumericInput'
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

            setValueIfUncontrolled(Number(event.currentTarget.value));
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
            className={classNames('input', 'numeric-input', className)}
            id={id}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            onClick={handleOnClick}
            onFocus={handleOnFocus}
            type='number'
            value={value}
            ref={ref}
        />

        { hint && <Hint id={`${id}-hint`} hint={hint} /> }

        { error && <Error id={`${id}-error`} message={error} /> }
    </>;
});

NumericInput.displayName = 'Input';

NumericInput.propTypes = {
    className: PropTypes.string,
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

export default NumericInput;
