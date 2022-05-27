import * as React from 'react';
import clsx from 'clsx';

export interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement> {
    align?: 'left' | 'center' | 'right';
    variant?: 'heading' | 'sub-heading' | 'sub-sub-heading' | 'body' | 'body-tertiary';
};

const Typography: React.FC<TypographyProps> = ({
    align = 'left',
    variant = 'body',
    ...props
}) => {
    const getElementByVariant = React.useMemo(() => {
        return (variant: TypographyProps['variant']): string[] => {
            switch (variant) {
                case 'body':
                    return ['p'];
                case 'body-tertiary':
                    return ['p', 'modifier--tertiary'];
                case 'heading':
                    return ['h1'];
                case 'sub-heading':
                    return ['h2'];
                case 'sub-sub-heading':
                    return ['h3'];
                default:
                    return ['p'];
            }
        };
    }, [
        variant
    ]);

    const [element, elementClass] = getElementByVariant(variant);

    return React.createElement(element, {
        className: clsx(
            'typography',
            `variant--${variant}`,
            `align--${align}`,
            { [elementClass]: variant === 'body-tertiary' }
        ),
        ...props
    });
};

export default Typography;
