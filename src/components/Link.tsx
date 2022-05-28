import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";

export interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
    href: string;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(({
    children,
    className,
    href,
    ...props
}, ref) => {
    return <a
        {...props}
        className={clsx(
            'link',
            className
        )}
        href={href}
        ref={ref}
    >
        { children }
    </a>;
});

Link.displayName = 'Link';

Link.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
};

export default Link;
