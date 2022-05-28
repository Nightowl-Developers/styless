import * as React from 'react';

import Fieldset from '../components/Fieldset';
import {Checkbox} from "../components";
import Radio from "../components/Radio";

export default {
    title: 'Styless/Fieldset',
    component: Fieldset,
};

export const CheckboxFieldset = () => {
    return <Fieldset
        legend={'Fieldset Checkboxes'}
    >
        <Checkbox
            id={'one'}
            label={'One'}
        />
        <Checkbox
            id={'two'}
            label={'Two'}
        />
        <Checkbox
            id={'three'}
            label={'Three'}
        />
    </Fieldset>
};

export const RadioFieldset = () => {
    return <Fieldset
        legend={'Fieldset Checkboxes'}
    >
        <Radio
            id={'one'}
            label={'One'}
        />
        <Radio
            id={'two'}
            label={'Two'}
        />
        <Radio
            id={'three'}
            label={'Three'}
        />
    </Fieldset>
};
