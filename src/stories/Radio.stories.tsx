import * as React from 'react';

import Radio from '../components/Radio';

export default {
    title: 'Components/Radio',
    component: Radio
};

export const DefaultRadio = () => {
    return <Radio label={'label'} id={'email-input'} />
};