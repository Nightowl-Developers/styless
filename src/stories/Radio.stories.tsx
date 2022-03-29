import * as React from 'react';

import Radio from '../components/Radio';

export default {
    title: 'Styless/Radio',
    component: Radio,
};

export const DefaultRadio = () => {
    return <Radio
        id={'input'}
        label={'Name'}
    />;
};
