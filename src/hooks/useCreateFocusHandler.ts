import * as React from 'react';

const useCreateFocusHandler = <ElementType>(
    onFocus: (event: React.FocusEvent<ElementType>) => void,
    disabled: boolean
) => {
    return React.useCallback((event: React.FocusEvent<ElementType>) => {
        if (!disabled) {
            if (onFocus) {
                onFocus(event);
            }
        }
    }, [
        disabled,
        onFocus
    ]);
};

export default useCreateFocusHandler;
