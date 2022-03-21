import * as React from 'react';

import Input from '../components/Input';

export default {
    title: 'Components/Input',
    component: Input
};

export const DefaultInput = () => {
    return <Input label={'label'} id={'email-input'} />
};