import * as React from 'react';
import classNames from 'classnames';

export interface ChipProps {
    children: React.ReactNode;
    closable?: boolean;
    closeIcon?: React.ReactNode;
    disabled?: boolean;
    iconAfter?: React.ReactNode;
    iconBefore?: React.ReactNode;
    onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
};

const Chip: React.FC<ChipProps> = ({
    children,
    closable = false,
    closeIcon,
    disabled = false,
    iconAfter,
    iconBefore,
    onBlur,
    onClick,
    onFocus
}) => {
    const handleOnBlur = (event: React.FocusEvent<HTMLButtonElement>) => {
        if (onBlur) {
            onBlur(event);
        }
    };

    const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
            onClick(event);
        }
    };
    
    const handleOnFocus = (event: React.FocusEvent<HTMLButtonElement>) => {
        if (onFocus) {
            onFocus(event);
        }
    };

    return <div
        className='chip'
    >
        { iconBefore && iconBefore }
        { children }
        { iconAfter && iconAfter }

        {
            closable &&
            closeIcon &&
            <button
                className={classNames('chip-close-button')}
                onBlur={handleOnBlur}
                onClick={handleOnClick}
                onFocus={handleOnFocus}
            >
                { closeIcon }
            </button>
        }
    </div>;
};

export default Chip;