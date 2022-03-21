import * as React from 'react';

import Password from '../components/Password';

export default {
    title: 'Components/Password',
    component: Password
};

export const DefaultPassword = () => {
    return <Password label={'label'} id={'email-input'} />
};