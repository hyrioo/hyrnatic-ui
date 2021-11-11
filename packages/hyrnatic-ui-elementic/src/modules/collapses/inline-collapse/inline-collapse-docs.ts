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
            description: 'Determines if the collapse is expanded or not.',
            type: 'boolean',
            default: false,
        },
        {
            property: 'expand-text',
            origin: 'elementic',
            description: 'Label to show when collapsed.',
            type: 'string',
            default: '"Show more"',
        },
        {
            property: 'collapse-text',
            origin: 'elementic',
            description: 'Label to show when expanded.',
            type: 'string',
            default: '"Hide"',
        },
        {
            property: 'text-align',
            origin: 'elementic',
            description: 'Label to show when expanded.',
            type: 'string',
            values: ['left', 'right'],
            default: 'left',
        },
        {
            property: 'animate',
            origin: 'elementic',
            description: 'Whether or not the collapse should animate.',
            type: 'boolean',
            default: true,
        },
    ]
};

export default docs;