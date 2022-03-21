import * as React from 'react';

import NumericInput from '../components/NumericInput';

export default {
    title: 'Components/NumericInput',
    component: NumericInput
};

export const DefaultNumericInput = () => {
    return <NumericInput label={'label'} id={'email-input'} />
};