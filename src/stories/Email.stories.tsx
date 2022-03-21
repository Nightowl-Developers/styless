import * as React from 'react';

import Email from '../components/Email';

export default {
    title: 'Components/Email',
    component: Email
};

export const DefaultEmail = () => {
    return <Email label={'label'} id={'email-input'} />
};