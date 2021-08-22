import { ComponentAPIDescriptor } from '../../../utils/docs';

const docs: ComponentAPIDescriptor = {
    slots: [
        {
            name: 'prefix',
            description: 'Override the prefix.',
            props: null,
        },
        {
            name: 'suffix',
            description: 'Override the suffix.',
            props: null,
        }
    ],
    events: [
        {
            name: 'focus',
            description: 'Emitted when the input receives focus.',
            parameters: null,
        },
        {
            name: 'blur',
            description: 'Emitted when the input gets blur.',
            parameters: null,
        }
    ],
    props: [
        {
            property: 'disabled',
            origin: 'core',
            description: 'Determines if the input is disabled.',
            type: 'boolean',
            default: false,
        },
        /*{
            property: 'visible',
            origin: 'core',
            description: 'Determines if the button is visible. This will also disable interactivity during transition. Use this instead of v-show.',
            type: 'boolean',
            default: true,
        },*/
        {
            property: 'readonly',
            origin: 'core',
            description: 'Determines if the input is readonly.',
            type: 'boolean',
            values: null,
            default: false,
        },
        {
            property: 'model-value',
            origin: 'core',
            description: 'The model-value',
            type: ['string', 'number', 'null'],
            values: null,
            default: null,
        },
        {
            property: 'model-modifiers',
            origin: 'core',
            description: 'Modifiers for the model-value',
            type: ['array'],
            values: ['capitalize'],
            default: null,
        },
        {
            property: 'placeholder',
            origin: 'elementic',
            description: 'The placeholder for the input',
            type: 'string',
            values: null,
            default: null,
        },
        {
            property: 'type',
            origin: 'elementic',
            description: 'HTML input type',
            type: 'string',
            values: ['any HTML input type'],
            default: null,
        },
        {
            property: 'autocomplete',
            origin: 'elementic',
            description: 'The HTML autocomplete attribute',
            type: 'string',
            values: null,
            default: null,
        },
        {
            property: 'min-length',
            origin: 'elementic',
            description: 'The HTML min-length attribute',
            type: ['number'],
            values: null,
            default: null,
        },
        {
            property: 'max-length',
            origin: 'elementic',
            description: 'The HTML max-length attribute',
            type: ['number'],
            values: null,
            default: null,
        },
        {
            property: 'prefix',
            origin: 'elementic',
            description: 'The prefix label',
            type: ['string'],
            values: null,
            default: null,
        },
        {
            property: 'suffix',
            origin: 'elementic',
            description: 'The suffix label',
            type: ['string'],
            values: null,
            default: null,
        },
        {
            property: 'prefix-icon',
            origin: 'elementic',
            description: 'The prefix icon',
            type: ['string'],
            values: null,
            default: null,
        },
        {
            property: 'suffix-icon',
            origin: 'elementic',
            description: 'The suffix icon',
            type: ['string'],
            values: null,
            default: null,
        },
    ]
};

export default docs;