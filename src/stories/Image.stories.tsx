import * as React from 'react';

import Image from '../components/Image';

export default {
    title: 'Components/Image',
    component: Image
};

export const DefaultImage = () => {
    return <Image src={''} alt={''} />
};