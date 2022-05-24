import * as React from 'react';
import PropTypes from 'prop-types';
import {InputProps} from "./Input";
import {useControlled, useCreateBlurHandler, useCreateFocusHandler} from "../hooks";
import useMask from "@ryuuji3/react-mask-hook";
import clsx from "clsx";
import Hint from "./Hint";
import Error from "./Error";

type propsToOmit = 'onChange';

export interface MaskedInputProps extends Omit<InputProps, propsToOmit> {
    error?: string;
    hint?: string;
    mask: RegExp[];
    onChange?: (value: string) => void;
}

const MaskedInput = React.forwardRef<HTMLInputElement, MaskedInputProps>(({
    className,
    defaultValue,
    disabled = false,
    error,
    hint,
    id,
    label,
    labelProps,
    mask,
    onBlur,
    onChange,
    onClick,
    onFocus,
    placeholder,
    value: valueProp,
    ...props
}, ref) => {
    const [value, setValueIfUncontrolled] = useControlled({
        controlled: valueProp,
        default: defaultValue,
        name: 'MaskedInput'
    });

    const handleOnBlur = useCreateBlurHandler<HTMLInputElement>(
        onBlur,
        disabled
    );

    const handleOnChange = (value: string) => {
        if (disabled) return;

        setValueIfUncontrolled(value);

        if (onChange) {
            onChange(value);
        }
    };

    const handleOnFocus = useCreateFocusHandler<HTMLInputElement>(
        onFocus,
        disabled
    );

    const maskProps = useMask({
        value,
        onChange: handleOnChange,
        mask,
        placeholder
    });

    return <>
        <label
            {...labelProps}
            id={`${id}-label`}
        >
            { label }
        </label>

        <input
            {...props}
            aria-describedby={`${id}-hint`}
            aria-labelledby={`${id}-label`}
            className={clsx(
                'masked-input',
                className
            )}
            id={id}
            onBlur={handleOnBlur}
            onFocus={handleOnFocus}
            {...maskProps}
            ref={ref}
        />

        { hint && <Hint id={`${id}-hint`} hint={hint} /> }

        { error && <Error id={`${id}-error`} message={error} /> }
    </>;
});

MaskedInput.displayName = 'MaskedInput';

MaskedInput.propTypes = {
    className: PropTypes.string,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    hint: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    labelProps: PropTypes.any,
    mask: PropTypes.any,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
};

export default MaskedInput;
