import { ComponentAPIDescriptor } from '../../../utils/docs';

const docs: ComponentAPIDescriptor = {
    slots: [
        {
            name: 'default',
            description: 'The content of the collapse.',
            props: null,
        },
        {
            name: 'header',
            description: 'Custom content for the header.',
            props: null,
        }
    ],
    events: [],
    props: [
        {
            property: 'id',
            origin: 'core',
            description: 'Id used in model-value of collapse.',
            type: 'string',
            required: true,
        },
        {
            property: 'header',
            origin: 'elementic',
            description: 'Content to show in the header',
            type: 'string',
        },
    ]
};

export default docs;