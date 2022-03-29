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

type propsToOmit = 'defaultValue' | 'id';

export interface EmailProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, propsToOmit> {
    defaultValue?: string;
    hint?: string;
    id: string;
    label: string;
    labelProps?: React.HTMLAttributes<HTMLLabelElement>;
    value?: string;
};

const Email = React.forwardRef<HTMLInputElement, EmailProps>(({
    className,
    defaultValue,
    disabled = false,
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
        name: 'Email'
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
            {...props.labelProps}
            htmlFor={props.id}
        >
            { props.label }
        </label>

        <input
            {...props}
            className={classNames('input', 'email-input', className)}
            disabled={disabled}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            onClick={handleOnClick}
            onFocus={handleOnFocus}
            type='email'
            value={value}
            ref={ref}
        />
    </>;
});

Email.displayName = 'Email';

Email.propTypes = {
    className: PropTypes.string,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
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
