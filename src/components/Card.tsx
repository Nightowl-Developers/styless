import * as React from 'react';
import PropTypes from 'prop-types';

export interface CardProps {
    children: React.ReactNode;
};

const Card: React.FC<CardProps> = (props) => (
  <div>
    { props.children }
  </div>
);

Card.displayName = 'Card';

Card.propTypes = {
    children: PropTypes.node.isRequired
};

export default Card;
