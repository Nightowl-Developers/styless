import * as React from 'react';
import clsx from 'clsx';
import {useCreateBlurHandler, useCreateClickHandler, useCreateFocusHandler} from "../hooks";
import PropTypes from "prop-types";

export interface ChipProps {
    children: React.ReactNode;
    className?: string;
    closable?: boolean;
    closeIcon?: React.ReactNode;
    disabled?: boolean;
    iconAfter?: React.ReactNode;
    iconBefore?: React.ReactNode;
    onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
};

const Chip: React.FC<ChipProps> = ({
    children,
    className,
    closable = false,
    closeIcon,
    disabled = false,
    iconAfter,
    iconBefore,
    onBlur,
    onClick,
    onClose,
    onFocus,
    onKeyDown
}) => {
    const handleOnBlur = useCreateBlurHandler<HTMLInputElement>(
        onBlur,
        disabled
    );

    const handleOnClick = useCreateClickHandler<HTMLInputElement>(
        onClick,
        disabled
    );

    const handleOnClose = useCreateClickHandler<HTMLInputElement>(
        onClose,
        disabled
    );

    const handleOnFocus = useCreateFocusHandler<HTMLInputElement>(
        onFocus,
        disabled
    );

    const handleOnKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (onKeyDown) {
            onKeyDown(event);
        }
    };

    return <div
        className={clsx(
            'chip',
            className
        )}
        onClick={handleOnClick}
    >
        { iconBefore && iconBefore }
        { children }
        { iconAfter && iconAfter }

        {
            closable &&
            closeIcon &&
            <button
                className={'chip-close-button'}
                onBlur={handleOnBlur}
                onClick={handleOnClose}
                onFocus={handleOnFocus}
                onKeyDown={handleOnKeyDown}
            >
                { closeIcon }
            </button>
        }
    </div>;
};

Chip.displayName = 'Chip';

Chip.propTypes = {
    children: PropTypes.element.isRequired,
    className: PropTypes.string,
    closable: PropTypes.bool,
    closeIcon: PropTypes.element,
    disabled: PropTypes.bool,
    iconAfter: PropTypes.element,
    iconBefore: PropTypes.element,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onClose: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func
}

export default Chip;
