import * as React from 'react';
import PropTypes from 'prop-types';

import {
    useCreateBlurHandler,
    useCreateChangeHandler,
    useCreateClickHandler,
    useCreateFocusHandler
} from '../hooks';

type propsToOmit = 'id';

export interface EmailProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, propsToOmit> {
    hint?: string;
    id: string;
    label: string;
    labelProps?: React.HTMLAttributes<HTMLLabelElement>;
};

const Email = React.forwardRef<HTMLInputElement, EmailProps>(({
    disabled = false,
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
            {...props.labelProps}
            htmlFor={props.id}
        >
            { props.label }
        </label>

        <input
            {...props}
            disabled={disabled}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            onClick={handleOnClick}
            onFocus={handleOnFocus}
            type='email'
            ref={ref}
        />
    </>;
});

Email.displayName = 'Email';

Email.propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    labelProps: PropTypes.any,
    onBlur: PropTypes.any,
    onChange: PropTypes.any,
    onClick: PropTypes.any,
    onFocus: PropTypes.any,
};

export default Email;