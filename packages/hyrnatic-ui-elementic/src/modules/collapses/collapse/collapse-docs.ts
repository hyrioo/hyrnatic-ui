import { ComponentAPIDescriptor } from '../../../utils/docs';

const docs: ComponentAPIDescriptor = {
    slots: [
        {
            name: 'default',
            description: 'The content of the collapse.',
            props: null,
        }
    ],
    events: [],
    props: [
        {
            property: 'model-value',
            origin: 'core',
            description: 'Currently open collapse-item(s).',
            type: ['array', 'string', 'number'],
            required: true,
        },
        {
            property: 'accordion',
            origin: 'core',
            description: 'In accordion mode only one collapse-item can be open at once.',
            type: 'boolean',
            default: false,
        },
    ]
};

export default docs;