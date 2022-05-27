import * as React from 'react';

import Breadcrumbs from '../components/Breadcrumbs';

export default {
    title: 'Styless/Breadcrumbs',
    component: Breadcrumbs
};

export const DefaultBreadcrumbs = () => {
    return <Breadcrumbs
        crumbs={[
            {
                label: 'One',
                href: '/one',
            },
            {
                label: 'Two',
                href: '/two',
                current: true,
            },
        ]}
    />;
}
