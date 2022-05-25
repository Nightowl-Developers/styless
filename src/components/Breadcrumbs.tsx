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
    return <ul
        className={clsx(
            'crumb-list',
            className
        )}
    >
        {
            crumbs.map(({
                current,
                label,
            }: Breadcrumb) => {
                return <li
                    key={label}
                    aria-current={current}
                    className={'crumb'}
                >
                    { label }
                </li>;
            })
        }
    </ul>;
};

Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs;
