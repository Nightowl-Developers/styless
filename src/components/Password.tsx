import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {
    useControlled,
    useCreateBlurHandler,
    useCreateChangeHandler,
    useCreateClickHandler,
    useCreateFocusHandler
} from '../hooks';
import Error from "./Error";
import Hint from "./Hint";

type propsToOmit = 'defaultValue' | 'id';

export interface PasswordProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, propsToOmit> {
    defaultValue?: string;
    error?: string;
    hint?: string;
    id: string;
    label: string;
    labelProps?: React.HTMLAttributes<HTMLLabelElement>;
    passwordToggleIcon: React.ReactNode;
    value?: string;
}

const Password = React.forwardRef<HTMLInputElement, PasswordProps>(({
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
    passwordToggleIcon,
    value: valueProp,
    ...props
}, ref) => {
    const [value, setValueIfUncontrolled] = useControlled({
        controlled: valueProp,
        default: defaultValue,
        name: 'Password'
    });

    const [passwordVisibility, setPasswordVisibility] = React.useState(false);

    const handleTogglePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility);
    };

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
        <div className={'label-wrapper'}>
            <label
                {...labelProps}
                id={`${id}-label`}
            >
                { label }
            </label>

            <button
                aria-label={`${passwordVisibility ? 'Hide' : 'Show'} password`}
                className={'password-visibility-button'}
                onClick={handleTogglePasswordVisibility}
            >
                { passwordToggleIcon }
            </button>
        </div>

        <input
            {...props}
            aria-describedby={`${id}-hint`}
            aria-labelledby={`${id}-label`}
            aria-errormessage={`${id}-error`}
            aria-invalid={!!error}
            className={clsx('password-input', className)}
            id={id}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            onClick={handleOnClick}
            onFocus={handleOnFocus}
            type={passwordVisibility ? 'text' : 'password'}
            value={value}
            ref={ref}
        />

        { hint && <Hint id={`${id}-hint`} hint={hint} /> }

        { error && <Error id={`${id}-error`} message={error} /> }
    </>;
});

Password.displayName = 'Password';

Password.propTypes = {
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
    passwordToggleIcon: PropTypes.any,
    value: PropTypes.string,
};

export default Password;
