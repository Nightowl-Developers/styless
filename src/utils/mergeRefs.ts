import * as React from 'react';

const mergeRefs = <ElementType = any>(
    refs: Array<React.MutableRefObject<ElementType> | React.LegacyRef<ElementType>>
) => {
    return (value: any) => {
        refs.forEach(ref => {
            if (typeof ref === 'function') {
                ref(value);
            } else if (ref !== null) {
                (ref as React.MutableRefObject<ElementType | null>).current = value;
            }
        });
    };
};

export default mergeRefs;