import { ComponentAPIDescriptor } from '../../../utils/docs';

const docs: ComponentAPIDescriptor = {
    slots: [],
    events: [],
    props: [
        {
            property: 'icon',
            origin: 'elementic',
            description: 'Key of the icon from the icon registry',
            type: 'string',
            required: true,
        },
        {
            property: 'width',
            origin: 'elementic',
            description: 'The width of the icon',
            type: ['string'],
            values: ['Any css values'],
        },
        {
            property: 'height',
            origin: 'elementic',
            description: 'The height of the icon',
            type: ['string'],
            values: ['Any css values'],
        },
        {
            property: 'size',
            origin: 'elementic',
            description: 'An easier way to set both width and height to the same.',
            type: ['string'],
            values: ['Any css values'],
        },
        {
            property: 'strokes',
            origin: 'elementic',
            description: 'Color of the strokes if the icon contains any. If an array is passed, you can control the color of each child individually.',
            type: ['string', 'array'],
        },
        {
            property: 'fills',
            origin: 'elementic',
            description: 'Color of the fills if the icon contains any. If an array is passed, you can control the color of each child individually.',
            type: ['string', 'array'],
            default: 'currentColor',
        },
        {
            property: 'spin',
            origin: 'elementic',
            description: 'Determines if the icon should be spinning.',
            type: 'boolean',
            default: false,
        },
    ]
};

export default docs;