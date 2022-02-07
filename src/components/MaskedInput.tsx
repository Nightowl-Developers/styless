import * as React from 'react';
import PropTypes from 'prop-types';

import {
    useCreateBlurHandler,
    useCreateChangeHandler,
    useCreateClickHandler,
    useCreateFocusHandler,
    useCreateMaskedInput
} from '../hooks';

type propsToOmit = 'id' | 'value';

export interface MaskedInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, propsToOmit> {
    hint?: string;
    id: string;
    label: string;
    labelProps?: React.HTMLAttributes<HTMLLabelElement>;
    mask: string;
    maskDelimiter: string;
    value?: string;
};

const MaskedInput = React.forwardRef<HTMLInputElement, MaskedInputProps>(({
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
    ...props
}, ref) => {
    const {
        maxLength,
        value
    } = useCreateMaskedInput(
        mask,
        maskDelimiter,
        props.value
    );

    const handleOnBlur = useCreateBlurHandler<HTMLInputElement>(
        onBlur,
        disabled
    );
    
    const handleOnChange = useCreateChangeHandler<HTMLInputElement>(
        onChange,
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
            id={id}
            maxLength={maxLength}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            onClick={handleOnClick}
            onFocus={handleOnFocus}
            value={value}
            ref={ref}
        />
    </>;
});

MaskedInput.displayName = 'MaskedInput';

MaskedInput.propTypes = {
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
    value: PropTypes.string
};

export default MaskedInput;