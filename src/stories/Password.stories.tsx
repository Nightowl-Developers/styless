import * as React from 'react';

import Password from '../components/Password';

export default {
    title: 'Styless/Password',
    component: Password,
};

export const DefaultPassword = () => {
    return <Password
        hint={'Password'}
        id={'password'}
        label={'Password'}
        passwordToggleIcon={null}
    />;
};
