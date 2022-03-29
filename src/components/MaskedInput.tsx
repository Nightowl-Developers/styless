import * as React from 'react';
import PropTypes from 'prop-types';

import {
    useControlled,
    useCreateMaskedInput
} from '../hooks';

type propsToOmit = 'defaultValue' | 'id' | 'value';

export interface MaskedInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, propsToOmit> {
    defaultValue?: string;
    hint?: string;
    id: string;
    label: string;
    labelProps?: React.HTMLAttributes<HTMLLabelElement>;
    mask: string;
    maskDelimiter: string;
    value?: string;
};

const MaskedInput = React.forwardRef<HTMLInputElement, MaskedInputProps>(({
    defaultValue,
    disabled = false,
    id,
    label,
    labelProps,
    mask,
    maskDelimiter,
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
        name: 'MaskedInput'
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
            {...labelProps}
            htmlFor={id}
        >
            { label }
        </label>

        <input
            {...props}
            id={id}
            // maxLength={maxLength}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            onFocus={handleOnFocus}
            value={value}
            ref={ref}
        />
    </>;
});

MaskedInput.displayName = 'MaskedInput';

MaskedInput.propTypes = {
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    labelProps: PropTypes.any,
    mask: PropTypes.string.isRequired,
    maskDelimiter: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string,
};

export default MaskedInput;