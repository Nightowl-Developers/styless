import * as React from 'react';

import Card from '../components/Card';
import {Button} from "../components";

export default {
    title: 'Components/Card',
    component: Card
};

export const DefaultCard = () => {
    return <Card>
        <Button>
            Click me
        </Button>
    </Card>
};