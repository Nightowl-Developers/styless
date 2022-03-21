import * as React from 'react';

import MaskedInput from '../components/MaskedInput';

export default {
    title: 'Components/MaskedInput',
    component: MaskedInput
};

export const DefaultMaskedInput = () => {
    return <MaskedInput
        label={''}
        id={'masked-input'}
        mask={'mm/dd/yyyy'}
        maskDelimiter={'/'}
    />
};