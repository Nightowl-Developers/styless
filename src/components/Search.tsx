import * as React from 'react';
import PropTypes from 'prop-types';

import {
    useControlled,
    useCreateBlurHandler,
    useCreateChangeHandler,
    useCreateClickHandler,
    useCreateFocusHandler
} from '../hooks';
import clsx from "clsx";

type propsToOmit = 'defaultValue' | 'id';

export interface SearchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, propsToOmit> {
    className?: string;
    defaultValue?: string;
    hint?: string;
    id: string;
    label: string;
    labelProps?: React.HTMLAttributes<HTMLLabelElement>;
    value?: string;
}

const Search = React.forwardRef<HTMLInputElement, SearchProps>(({
    className,
    defaultValue,
    disabled = false,
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
    const [value, setValueIfUncontrolled] = useControlled<string>({
        controlled: valueProp,
        default: defaultValue,
        name: 'Search'
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
            {...labelProps}
            htmlFor={id}
        >
            { label }
        </label>

        <input
            {...props}
            className={clsx(
                'search',
                className
            )}
            id={id}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            onClick={handleOnClick}
            onFocus={handleOnFocus}
            type='search'
            value={value}
            ref={ref}
        />

        {/*  @TODO: add clear button and functionality  */}
    </>;
});

Search.displayName = 'Search';

Search.propTypes = {
    className: PropTypes.string,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    labelProps: PropTypes.any,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string,
};

export default Search;
