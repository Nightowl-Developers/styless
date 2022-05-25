import * as React from 'react';
import clsx from "clsx";
import PropTypes from "prop-types";

export interface AccordionGroupProps {
    children: React.ReactNode;
}

const AccordionGroup: React.FC<AccordionGroupProps> = ({
    children
}) => {
    const [
        accordionRefs,
        setAccordionRefs
    ] = React.useState<React.MutableRefObject<any>[]>([]);

    const [focusedIndex, setFocusedIndex] = React.useState(-1);

    const handleAccordionKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        const lastRefIndex = accordionRefs.length - 1;

        switch (event.code) {
            case 'HOME':
                if (accordionRefs[0]?.current?.focus) {
                    accordionRefs[0].current.focus();
                }
                break;

            case 'END':
                if (accordionRefs[lastRefIndex]?.current?.focus) {
                    accordionRefs[lastRefIndex].current.focus();
                }
                break;

            case 'ArrowUp':
                break;

            case 'ArrowDown':
                break;

            default:
                break;
        }
    };

    return <div
        role={'region'}
    >
        {
            React.Children.map(children as React.ReactElement, (child) => {
                return React.cloneElement(child, {
                    ...child.props,
                    onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => {
                        handleAccordionKeyDown(event);

                        if (child.props.onKeyDown) {
                            child.props.onKeyDown(event);
                        }
                    },
                    ref: setAccordionRefs
                })
            })
        }
    </div>
}

AccordionGroup.displayName = 'AccordionGroup';

AccordionGroup.propTypes = {
    children: PropTypes.element,
}

export default AccordionGroup;
