import { ComponentAPIDescriptor, DocsAsProp, DocsAsPropsProp } from '../../../utils/docs';

const docs: ComponentAPIDescriptor = {
    slots: [
    ],
    events: [
    ],
    props: [
        DocsAsProp,
        DocsAsPropsProp,
        {
            property: 'model-value',
            origin: 'core',
            description: 'If an array is passed the value will be added/remove when the checkbox is checked/unchecked. If a string is passed the value will be set when check, and null when unchecked.',
            type: ['array', 'boolean', 'string'],
            values: null,
            default: null,
        },
        {
            property: 'value',
            origin: 'core',
            description: 'The value to use when is checkbox is checked.',
            type: ['any'],
            values: null,
            default: true,
        },
        {
            property: 'disabled',
            origin: 'core',
            description: 'Determines if the button is disabled.',
            type: 'boolean',
            default: false,
        },
        {
            property: 'visible',
            origin: 'core',
            description: 'Determines if the button is visible. Use this instead of v-show.',
            type: 'boolean',
            default: true,
        },
        {
            property: 'indeterminate',
            origin: 'core',
            description: 'Override the visible state of the checkbox no matter if it\'s checked or not.',
            type: 'boolean',
            values: null,
            default: false,
        },
        {
            property: 'bordered',
            origin: 'elementic',
            description: 'Adds a border around the checkbox and label.',
            type: ['boolean'],
            values: null,
            default: false,
        },
        {
            property: 'label',
            origin: 'elementic',
            description: 'A label shown next to the checkbox.',
            type: ['string'],
            values: null,
            default: null,
        },
    ]
};

export default docs;