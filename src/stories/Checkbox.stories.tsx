import * as React from 'react';

import Checkbox from '../components/Checkbox';

export default {
    title: 'Components/Checkbox',
    component: Checkbox
};

export const DefaultCheckbox = () => {
    return <Checkbox label={'label'} id={'email-input'} />
};