import * as React from 'react';

const useCursorPosition = (
    ref: React.RefObject<HTMLInputElement> |
        React.MutableRefObject<HTMLInputElement>
) => {
    return React.useCallback((event: React.KeyboardEvent<any>) => {
        if (ref?.current?.focus) {
            ref.current.focus();
        }

        switch (event.key) {
            case "ArrowRight":
                // move cursor to the right by one character
                ref.current.selectionStart = ref.current.selectionStart + 1;
                ref.current.selectionEnd = ref.current.selectionEnd + 1;
                break;
            case "ArrowLeft":
                // move cursor to the left by one character
                ref.current.selectionStart = ref.current.selectionStart - 1;
                ref.current.selectionEnd = ref.current.selectionEnd - 1;
                break;
            case "Home":
                // move cursor to the beginning of the string typed
                ref.current.selectionStart = 0;
                ref.current.selectionEnd = 0;
                break;
            case "End":
                // move cursor to the end of the string typed
                ref.current.selectionStart = ref.current.value.length - 1;
                ref.current.selectionEnd = ref.current.value.length - 1;
                break;
            default:
                // no-op
                break;
        }
    }, [
        ref
    ]);
};


export default useCursorPosition;
