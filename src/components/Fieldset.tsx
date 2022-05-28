import * as React from 'react';
import clsx from 'clsx';
import PropTypes from "prop-types";

export interface FieldsetProps {
    children: React.ReactNode;
    className?: string;
    legend: string;
}

const Fieldset: React.FC<FieldsetProps> = ({
    children,
    className,
    legend
}) => {
    return <fieldset
        className={clsx(
            'fieldset',
            className
        )}
    >
        <legend>
            { legend }
        </legend>

        { children }
    </fieldset>;
};

Fieldset.displayName = 'Fieldset';

Fieldset.propTypes = {
    children: PropTypes.element.isRequired,
    className: PropTypes.string,
    legend: PropTypes.string.isRequired,
}

export default Fieldset;
