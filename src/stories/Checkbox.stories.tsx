import * as React from 'react';

import Checkbox from '../components/Checkbox';

export default {
    title: 'Styless/Checkbox',
    component: Checkbox,
};

export const DefaultCheckbox = () => {
    return <Checkbox
        id={'input'}
        label={'Name'}
    />;
};
