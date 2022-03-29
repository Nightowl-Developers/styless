import * as React from 'react';

export interface UseFocusTrapProps<ElementType> {
    defaultFocusableIndex?: number;
    defaultOpen?: boolean;
    escapeKeyCode?: string;
    firstKeyCode?: string;
    lastKeyCode?: string;
    nextKeyCode?: string;
    previousKeyCode?: string;
    refs: (React.RefObject<ElementType> | React.MutableRefObject<ElementType>)[];
}

const useFocusTrap = <ElementType>({
    defaultFocusableIndex = 0,
    defaultOpen = false,
    escapeKeyCode = 'ArrowUp',
    firstKeyCode = 'Home',
    lastKeyCode = 'End',
    nextKeyCode = 'ArrowUp',
    previousKeyCode = 'ArrowDown',
    refs
}: UseFocusTrapProps<ElementType>) => {
    // if the focus is trapped
    const [trapOpen, setTrapOpen] = React.useState(defaultOpen);
    // the index of the focusable element
    const [focused, setFocused] = React.useState(defaultFocusableIndex);

    /**
     * The `onKeyDown` handler that needs to be passed to all items that will have their focus
     * trapped.
     *
     * @param event
     */
    const handleOnKeyDown = (event: React.KeyboardEvent<ElementType>) => {
        if (!trapOpen) {
            if (event.key === escapeKeyCode) {
                setTrapOpen(false);
            }
            return;
        }

        switch (event.key) {
            case previousKeyCode:
                setFocused(focused - 1);
                break;
            case nextKeyCode:
                setFocused(focused + 1);
                break;
            case firstKeyCode:
                setFocused(0);
                break;
            case lastKeyCode:
                setFocused(refs.length - 1);
                break;
            default:
                // no-op
                break;
        }
    };

    return {
        handleOnKeyDown,
        setTrapOpen,
        trapOpen,
    };
};

export default useFocusTrap;
