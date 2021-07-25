import { ComponentAPIDescriptor } from '../../../utils/docs';

const docs: ComponentAPIDescriptor = {
    slots: [
        {
            name: 'default',
            description: 'Override the content of the button.',
            props: null,
        }
    ],
    events: [
        {
            name: 'click',
            description: 'Emitted when clicked, while not in loading or disabled state.',
            parameters: null,
        }
    ],
    props: [
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
            property: 'loading',
            origin: 'core',
            description: 'Determines if the button is in loading state.',
            type: 'boolean',
            values: null,
            default: false,
        },
        {
            property: 'label',
            origin: 'elementic',
            description: 'A simple way to define the content',
            type: ['string', 'number'],
            values: null,
            default: null,
        },
        {
            property: 'icon',
            origin: 'elementic',
            description: 'Key for the icon registered in the IconRegistry',
            type: ['string'],
            values: null,
            default: null,
        },
        {
            property: 'rounded',
            origin: 'elementic',
            description: 'Style the button as rounded',
            type: 'boolean',
            values: null,
            default: false,
        },
        {
            property: 'color',
            origin: 'elementic',
            description: 'The color used by the styling',
            type: ['string'],
            values: ['primary', 'negative', 'success', 'warning', 'danger', 'none'],
            default: 'primary',
        },
        {
            property: 'styling',
            origin: 'elementic',
            description: 'The styling of the button',
            type: ['string'],
            values: ['subtle', 'simple', 'block', 'none'],
            default: 'simple',
        },
        {
            property: 'size',
            origin: 'elementic',
            description: 'The size of the button',
            type: ['string'],
            values: ['small', 'normal'],
            default: 'normal',
        },
        {
            property: 'type',
            origin: 'elementic',
            description: 'The HTML type set on the button',
            type: ['string'],
            values: ['button', 'submit', 'reset'],
            default: 'button',
        },
    ]
};

export default docs;