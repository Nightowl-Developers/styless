import * as React from 'react';

const useCreateBlurHandler = <ElementType>(
    onChange: (event: React.ChangeEvent<ElementType>) => void,
    disabled: boolean
) => {
    return React.useCallback((event: React.ChangeEvent<ElementType>) => {
        if (!disabled) {
            if (onChange) {
                onChange(event);
            }
        }
    }, [
        disabled,
        onChange
    ]);
};

export default useCreateBlurHandler;
