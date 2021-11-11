import { ComponentAPIDescriptor } from '../../../utils/docs';

const docs: ComponentAPIDescriptor = {
    slots: [],
    events: [],
    props: [
        {
            property: 'model-value',
            origin: 'core',
            description: 'The active page number.',
            type: 'number',
            values: null,
            required: true,
        },
        {
            property: 'count',
            origin: 'core',
            description: 'The total number of items.',
            type: 'number',
            values: null,
            required: true,
        },
        {
            property: 'page-size',
            origin: 'core',
            description: 'Number of items on each page.',
            type: 'number',
            values: null,
            required: true,
        },
        {
            property: 'delta',
            origin: 'core',
            description: 'Higher number increases the amount of buttons.',
            type: 'number',
            values: null,
            default: 1,
        },
    ]
};

export default docs;