import * as React from 'react';

import Search from '../components/Search';

export default {
    title: 'Styless/Search',
    component: Search,
};

export const DefaultSearch = () => {
    return <Search
        id={'input'}
        label={'Name'}
    />;
};
