import * as React from 'react';
import clsx from 'clsx';

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
    const handleOnBlur = (event: React.FocusEvent<HTMLButtonElement>) => {
        if (onBlur) {
            onBlur(event);
        }
    };

    const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (onClick) {
            onClick(event);
        }
    };
    
    const handleOnFocus = (event: React.FocusEvent<HTMLButtonElement>) => {
        if (onFocus) {
            onFocus(event);
        }
    };

    const handleOnClose = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (onClose) {
            onClose(event);
        }
    };

    const handleOnKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (onKeyDown) {
            onKeyDown(event);
        }
    }

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

export default Chip;
