import * as React from "react";
import PropTypes from "prop-types";

export interface ErrorProps {
    id: string;
    message: string;
}

const Error: React.FC<ErrorProps> = ({
    id,
    message
}) => {
    if (!message) return null;

    return <span
        aria-live={'polite'}
        id={`${id}-error`}
        role={'alert'}
    >
        {message}
    </span>
};

Error.displayName = 'Error';

Error.propTypes = {
    id: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
};

export default Error;
