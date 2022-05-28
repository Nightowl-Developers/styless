import * as React from "react";
import PropTypes from "prop-types";

export interface HintProps {
    id: string;
    hint: string;
}

const Hint: React.FC<HintProps> = ({
    id,
    hint
}) => {
    return <span id={id}>
        {hint}
    </span>
};

Hint.displayName = 'Hint';

Hint.propTypes = {
    id: PropTypes.string,
    hint: PropTypes.string,
};

export default Hint;
