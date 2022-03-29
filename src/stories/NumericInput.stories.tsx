import * as React from 'react';

import NumericInput from '../components/NumericInput';

export default {
    title: 'Styless/NumericInput',
    component: NumericInput,
};

export const DefaultNumericInput = () => {
    return <NumericInput
        id={'age'}
        label={'Age'}
    />;
};
