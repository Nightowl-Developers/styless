import * as React from 'react';

import Link from '../components/Link';

export default {
    title: 'Styless/Link',
    component: Link,
};

export const DefaultLink = () => {
    return <Link href={'https://www.google.com'}>
        Link text
    </Link>
}
