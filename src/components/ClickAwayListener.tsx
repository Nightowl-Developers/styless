import * as React from "react";
import mergeRefs from "../utils/mergeRefs";

type Events = React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>;

export interface ClickAwayListenerProps {
    children?: React.ReactElement;
    onClickAway: (event: Events) => void;
}

const ClickAwayListener = React.forwardRef<
    HTMLElement,
    ClickAwayListenerProps
>(({
    // eslint-disable-next-line react/prop-types
    children,
    // eslint-disable-next-line react/prop-types
    onClickAway
}, ref) => {
    const node = React.useRef<HTMLElement>(null);
    const handleRef = mergeRefs([ref, node]);

    const handleClickAway = React.useCallback((event: React.MouseEvent<HTMLElement>) => {
        if (!node?.current?.contains(event.currentTarget)) {
            onClickAway(event);
        }
    }, [onClickAway]);

    const handleTouchAway = React.useCallback((event: React.TouchEvent<HTMLElement>) => {
        if (!node?.current?.contains(event.currentTarget)) {
            onClickAway(event);
        }
    }, []);

    return React.cloneElement(children, {
        ref: handleRef,
        // eslint-disable-next-line react/prop-types
        ...children.props,
        onClick: handleClickAway,
    });
});

ClickAwayListener.displayName = 'ClickAwayListener';

export default ClickAwayListener;