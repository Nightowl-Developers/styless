import * as React from 'react';
import { createPortal } from "react-dom";

export interface PortalProps {
    children: React.ReactNode;
    selector: string;
}

const Portal: React.FC<PortalProps> = ({
    children,
    selector
}) => {
    const ref = React.useRef(null);

    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        ref.current = document.querySelector(selector);
        setMounted(true);
    }, [selector]);

    return mounted
        ? createPortal(children, ref.current)
        : null;
};

export default Portal;
