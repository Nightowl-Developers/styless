import * as React from 'react';

const useCreateClickHandler = <ElementType>(
    onClick: (event: React.MouseEvent<ElementType>) => void,
    disabled: boolean,
    deps?: React.DependencyList,
) => {
    return React.useCallback((event: React.MouseEvent<ElementType>) => {
        if (!disabled) {
            if (onClick) {
                onClick(event);
            }
        }
    }, [
        disabled,
        deps,
    ]);
};

export default useCreateClickHandler;
