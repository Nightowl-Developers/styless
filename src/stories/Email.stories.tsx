import * as React from 'react';

import Email from '../components/Email';

export default {
    title: 'Styless/Email',
    component: Email,
};

export const DefaultEmail = () => {
    return <Email
        hint={'Email Address'}
        id={'email'}
        label={'Email Address'}
    />;
};
