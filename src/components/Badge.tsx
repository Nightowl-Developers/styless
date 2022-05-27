import * as React from 'react';
import clsx from "clsx";

export interface BadgeProps {
    anchor?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
    children?: React.ReactNode;
    className?: string;
}

const Badge: React.FC<BadgeProps> = ({
    anchor = 'bottom-left',
    children,
    className
}) => {
    return <div
        className={clsx(
            'badge',
            anchor,
            className
        )}
    >
        { children }
    </div>;
};

Badge.displayName = 'Badge';

export default Badge;
