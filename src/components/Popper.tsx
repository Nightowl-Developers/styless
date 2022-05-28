import * as React from 'react';
import {usePopper} from "react-popper";

import Portal from "./Portal";

export interface PopperProps {
    children: React.ReactNode;
    usePortal?: boolean;
    selector?: string;
}

const Popper: React.FC<PopperProps> = ({
    children,
    usePortal = false,
    selector = 'portal'
}) => {
    const [referenceElement, setReferenceElement] = React.useState(null);
    const [popperElement, setPopperElement] = React.useState(null);

    const defaultModifiers = React.useMemo(() => {
        return [
            {}
        ];
    }, []);

    const {
        attributes,
        styles
    } = usePopper(
        referenceElement,
        popperElement,
        {
            modifiers: [
                ...defaultModifiers
            ]
        }
    );

    const clonedElement = React.cloneElement((children as React.ReactElement), {
        style: styles.popper,
        ...attributes.popper,
        ref: setPopperElement
    });

    return <div
        ref={setReferenceElement}
    >
        {
            usePortal
                ? <Portal selector={selector}>
                    { clonedElement }
                </Portal>
                : clonedElement
        }
    </div>;
};

Popper.displayName = 'Popper';

export default Popper;
