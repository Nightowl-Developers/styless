import * as React from 'react';

import Search from '../components/Search';

export default {
    title: 'Components/Password',
    component: Search
};

export const DefaultPassword = () => {
    return <Search label={'label'} id={'email-input'} />
};