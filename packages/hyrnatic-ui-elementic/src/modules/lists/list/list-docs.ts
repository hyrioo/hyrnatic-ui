import { ComponentAPIDescriptor } from '../../../utils/docs';

const docs: ComponentAPIDescriptor = {
    slots: [
        {
            name: 'default',
            description: 'Container for the items.',
            props: null,
        },
    ],
    events: [],
    props: [
        {
            property: 'animate',
            origin: 'elementic',
            description: 'Determines if the should animate add/remove.',
            type: 'boolean',
            values: null,
            default: true,
        },
    ]
};

export default docs;