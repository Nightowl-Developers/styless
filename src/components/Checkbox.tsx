import * as React from 'react';
import PropTypes from 'prop-types';

import {
    useControlled,
    useCreateBlurHandler,
    useCreateChangeHandler,
    useCreateClickHandler,
    useCreateFocusHandler
} from '../hooks';
import Hint from "./Hint";
import Error from "./Error";
import clsx from "clsx";

type propsToOmit = 'id';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, propsToOmit> {
    defaultChecked?: boolean;
    hint?: string;
    id: string;
    label: string;
    labelProps?: React.HTMLAttributes<HTMLLabelElement>;
};

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({
    checked,
    className,
    defaultChecked,
    disabled = false,
    id,
    label,
    labelProps,
    onBlur,
    onClick,
    onChange,
    onFocus,
    ...props
}, ref) => {
    const [value, setValueIfUncontrolled] = useControlled<boolean>({
        controlled: checked,
        default: defaultChecked,
        name: 'Checkbox'
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

            setValueIfUncontrolled(Boolean(event.currentTarget.value));
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
        <input
            {...props}
            aria-labelledby={`${id}-label`}
            className={clsx(
                'checkbox',
                className
            )}
            id={id}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            onClick={handleOnClick}
            onFocus={handleOnFocus}
            type='checkbox'
            value={String(value)}
            ref={ref}
        />

        <label
            {...labelProps}
            id={`${id}-label`}
        >
            { label }
        </label>
    </>;
});

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    labelProps: PropTypes.any,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func
};

export default Checkbox;
