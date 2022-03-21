import * as React from 'react';

import Accordion from '../components/Accordion';
import {useState} from "react";

export default {
    title: 'Components/Accordion',
    component: Accordion
};

export const ControlledAccordion = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleChange = (value: boolean) => {
        console.log('changed');
        setOpen(value);
    };

    return <Accordion className={'accordion'} title={'Title'} onChange={handleChange} open={open}>
        Content
    </Accordion>;
};

export const UncontrolledAccordion = () => {
    return <Accordion title={'Title'}>
        Content
    </Accordion>;
}