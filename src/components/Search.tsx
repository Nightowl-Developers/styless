import * as React from 'react';
import PropTypes from 'prop-types';

import {
    useCreateBlurHandler,
    useCreateChangeHandler,
    useCreateClickHandler,
    useCreateFocusHandler
} from '../hooks';

type propsToOmit = 'id';

export interface SearchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, propsToOmit> {
    hint?: string;
    id: string;
    label: string;
    labelProps?: React.HTMLAttributes<HTMLLabelElement>;
};

const Search = React.forwardRef<HTMLInputElement, SearchProps>(({
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
            type='search'
            ref={ref}
        />
    </>;
});

Search.displayName = 'Input';

Search.propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    labelProps: PropTypes.any,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func
};

export default Search;