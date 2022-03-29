import * as React from 'react';

const useCreateBlurHandler = <ElementType>(
    onBlur: (event: React.FocusEvent<ElementType>) => void,
    disabled: boolean
) => {
    return React.useCallback((event: React.FocusEvent<ElementType>) => {
        if (!disabled) {
            if (onBlur) {
                onBlur(event);
            }
        }
    }, [
        disabled,
        onBlur
    ]);
};

export default useCreateBlurHandler;
