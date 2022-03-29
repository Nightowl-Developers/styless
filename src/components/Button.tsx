import * as React from 'react';
import PropTypes from 'prop-types';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    iconAfter?: React.ReactNode;
    iconAfterSubmitting?: React.ReactNode;
    iconBefore?: React.ReactNode;
    iconBeforeSubmitting?: React.ReactNode;
    isSubmitting?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
    iconAfter,
    iconAfterSubmitting,
    iconBefore,
    iconBeforeSubmitting,
    children,
    ...props
}, ref) => (
  <button {...props} ref={ref}>
    { iconBefore && iconBefore }
    { iconBeforeSubmitting && iconBeforeSubmitting }
    { children }
    { iconAfterSubmitting && iconAfterSubmitting }
    { iconAfter && iconAfter }
  </button>
));

Button.displayName = 'Button';

Button.propTypes = {
    children: PropTypes.node.isRequired,
    iconAfter: PropTypes.node,
    iconAfterSubmitting: PropTypes.node,
    iconBefore: PropTypes.node,
    iconBeforeSubmitting: PropTypes.node,
    isSubmitting: PropTypes.bool
};

export default Button;
