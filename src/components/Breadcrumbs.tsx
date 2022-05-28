import * as React from 'react';
import clsx from "clsx";

export type Breadcrumb = {
    href?: string;
    label?: string;
    current?: boolean;
}

export interface BreadcrumbsProps {
    className?: string;
    crumbs: Breadcrumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
    className,
    crumbs
}) => {
    return <nav
        aria-label={'Breadcrumbs'}
        className={clsx(
            'crumb__nav',
            className
        )}
    >
        <ul
            className={'crumb__list'}
        >
            {
                crumbs.map(({
                    current,
                    href,
                    label,
                }: Breadcrumb) => {
                    return !current
                        ?  <li
                            className={'crumb__current'}
                            key={label}
                        >
                            <a
                                className={'crumb__link'}
                                key={label}
                                href={href}
                            >
                                { label }
                            </a>
                        </li>
                        : <li
                            aria-current={"location"}
                            className={'crumb__current'}
                            key={label}
                        >
                            { label }
                        </li>;
                })
            }
        </ul>
    </nav>;
};

Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs;
