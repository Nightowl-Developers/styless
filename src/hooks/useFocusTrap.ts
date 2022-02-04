import * as React from 'react';

/**
 * 
 * @param refs 
 * @returns 
 */
const useFocusTrap = (
    refs: React.RefObject<HTMLElement[]>,
    focusLastKey: string,
    focusNextKey: string
): (event: KeyboardEvent) => void => {
    const memoizedRefs = React.useMemo(() => refs, [refs]);
    const [activeRef, setActiveRef] = React.useState(0);

    React.useEffect(() => {
        if (memoizedRefs.current[activeRef].focus) {
            memoizedRefs.current[activeRef].focus();
        }
    }, [memoizedRefs, activeRef]);

    /**
     * 
     * @param event - the synthetic react event.
     */
    const handleKeyDown = React.useCallback((event: KeyboardEvent) => {
        const firstValidIndex = 0;
        const lastValidIndex = refs.current.length;

        // if the first item is focused
        if (activeRef === firstValidIndex) {
            if (event.key === focusLastKey) {
                // go back one
                setActiveRef(lastValidIndex);
            }
    
            if (event.key === focusNextKey) {
                // go forward one
                setActiveRef(activeRef + 1);
            }
        }

        // if the last item is focused
        if (activeRef === lastValidIndex) {
            if (event.key === focusLastKey) {
                // go back one
                setActiveRef(activeRef - 1);
            }
    
            if (event.key === focusNextKey) {
                // go forward one
                setActiveRef(firstValidIndex);
            }
        }
    }, [activeRef, setActiveRef]);

    return handleKeyDown;
};

export default useFocusTrap;