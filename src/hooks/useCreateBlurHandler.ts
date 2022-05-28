import * as React from 'react';

const useCreateBlurHandler = <ElementType>(
    onBlur: (event: React.FocusEvent<ElementType>) => void,
    disabled: boolean,
    deps?: React.DependencyList,
) => {
    return React.useCallback((event: React.FocusEvent<ElementType>) => {
        if (!disabled) {
            if (onBlur) {
                onBlur(event);
            }
        }
    }, [
        disabled,
        deps,
    ]);
};

export default useCreateBlurHandler;
