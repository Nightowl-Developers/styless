import * as React from 'react';

import Input from '../components/Input';

export default {
    title: 'Styless/Input',
    component: Input,
};

export const DefaultInput = () => {
    return <Input
        id={'input'}
        label={'Name'}
    />;
};
