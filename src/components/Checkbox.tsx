import * as React from 'react';
import PropTypes from 'prop-types';

import {
    useControlled,
    useCreateBlurHandler,
    useCreateChangeHandler,
    useCreateClickHandler,
    useCreateFocusHandler
} from '../hooks';

type propsToOmit = 'id';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, propsToOmit> {
    defaultChecked?: boolean;
    checked?: boolean;
    hint?: string;
    id: string;
    label: string;
    labelProps?: React.HTMLAttributes<HTMLLabelElement>;
};

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({
    checked,
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
            htmlFor={id}
        >
            { label }
        </label>
    </>;
});

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
    checked: PropTypes.bool,
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
