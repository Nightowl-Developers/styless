import * as React from "react";
import PropTypes from "prop-types";
import clsx from 'clsx';

import {Button} from ".";
import {useControlled} from "../hooks";

export interface AccordionProps {
    children?: React.ReactNode;
    className?: string;
    defaultOpen?: boolean;
    disabled?: boolean;
    id: string;
    open?: boolean;
    title?: string;
    onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    onChange?: (open: boolean) => void;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(({
    children,
    className,
    defaultOpen,
    disabled = false,
    id,
    open: openProp,
    title,
    onBlur,
    onChange,
    onClick,
    onFocus
}, ref) => {
    const [open, setOpen] = useControlled<boolean>({
        controlled: openProp,
        default: defaultOpen,
        name: 'Accordion'
    });

    const handleTitleBlur = (event: React.FocusEvent<HTMLButtonElement>) => {
        if (disabled) return;

        if (onBlur) {
            onBlur(event);
        }
    };

    const handleTitleClick = React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) return;

        setOpen(!open);

        if (onClick) {
            onClick(event);
        }
    }, [
        disabled,
        onClick,
        open
    ]);

    const handleTitleFocus = (event: React.FocusEvent<HTMLButtonElement>) => {
        if (disabled) return;

        if (onFocus) {
            onFocus(event);
        }
    };

    React.useEffect(() => {
        if (onChange) {
            onChange(open);
        }
    }, [open]);

    return <div
        className={clsx(
            `accordion__wrapper`,
            className
        )}
        ref={ref}
    >
        <Button
            aria-expanded={open ? 'true' : 'false'}
            aria-controls={`${id}-accordion-content`}
            className={clsx(
                'accordion__header',
                `${className}-header`
            )}
            disabled={disabled}
            id={`${id}-accordion-header`}
            onBlur={handleTitleBlur}
            onClick={handleTitleClick}
            onFocus={handleTitleFocus}
            role={''}
        >
            { title }
        </Button>

        <div
            aria-labelledby={`${id}-accordion-header`}
            className={clsx(
                'accordion__content',
                `content__${open ? 'visible' : 'hidden'}`,
                `${className}-content`
            )}
            id={`${id}-accordion-content`}
        >
            { children }
        </div>
    </div>
})

Accordion.displayName = 'Accordion';

Accordion.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    defaultOpen: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    open: PropTypes.bool,
    title: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
}

export default Accordion;
