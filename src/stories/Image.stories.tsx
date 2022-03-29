import * as React from 'react';

import Image from '../components/Image';

export default {
    title: 'Styless/Image',
    component: Image,
};

export const DefaultImage = () => {
    return <Image
        src={'https://i.redd.it/7turwx10r3k61.png'}
        alt={'Cute doggos'}
    />;
};
