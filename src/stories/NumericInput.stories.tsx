import * as React from 'react';

import NumericInput from '../components/NumericInput';

export default {
    title: 'Styless/NumericInput',
    component: NumericInput,
};

export const DefaultNumericInput = () => {
    return <NumericInput
        hint={'Age'}
        id={'age'}
        label={'Age'}
    />;
};
