import * as React from 'react';
import clsx from "clsx";

export interface BadgeProps {
    anchor?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
    className?: string;
}

const Badge: React.FC<BadgeProps> = ({
    anchor = 'bottom-left',
    className
}) => {
    return <div
        className={clsx(
            'badge',
            anchor,
            className
        )}
    />;
};

Badge.displayName = 'Badge';

export default Badge;
