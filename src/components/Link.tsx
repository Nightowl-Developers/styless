import * as React from 'react';
import PropTypes from 'prop-types';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
    return <a {...props} ref={ref}>
        { props.children }
    </a>;
});

Link.displayName = 'Link';

Link.propTypes = {
    children: PropTypes.any
};

export default Link;
