import * as React from 'react';

import Slider from '../components/Slider';

export default {
    title: 'Styless/Slider',
    component: Slider,
};

export const DefaultNumericInput = () => {
    return <Slider
        id={'age'}
        label={'Age'}
    />;
};
