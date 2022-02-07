import * as React from 'react';
import PropTypes from 'prop-types';

import {
    useCreateBlurHandler,
    useCreateChangeHandler,
    useCreateClickHandler,
    useCreateFocusHandler
} from '../hooks';

type propsToOmit = 'id';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, propsToOmit> {
    hint?: string;
    id: string;
    label: string;
    labelProps?: React.HTMLAttributes<HTMLLabelElement>;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(({
    disabled = false,
    id,
    label,
    labelProps,
    onBlur,
    onChange,
    onClick,
    onFocus,
    ...props
}, ref) => {
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
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            onClick={handleOnClick}
            onFocus={handleOnFocus}
            ref={ref}
        />
    </>;
});

Input.displayName = 'Input';

Input.propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    labelProps: PropTypes.any,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func
};

export default Input;