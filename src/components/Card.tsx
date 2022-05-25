import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

export interface CardProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

const Card: React.FC<CardProps> = ({
   children,
   className,
   id
}) => (
  <div
      className={classNames(
          'card',
          className
      )}
      id={id}
  >
    { children }
  </div>
);

Card.displayName = 'Card';

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    id: PropTypes.string,
};

export default Card;
