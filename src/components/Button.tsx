import * as React from 'react';
import PropTypes from 'prop-types';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    iconAfter?: React.ReactNode;
    iconAfterSubmitting?: React.ReactNode;
    iconBefore?: React.ReactNode;
    iconBeforeSubmitting?: React.ReactNode;
    isSubmitting?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <button {...props} ref={ref}>
    { props.iconBefore && props.iconBefore }
    { props.isSubmitting && props.iconBeforeSubmitting && props.iconBeforeSubmitting }
    { props.children }
    { props.isSubmitting && props.iconAfterSubmitting && props.iconAfterSubmitting }
    { props.iconAfter && props.iconAfter }
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
