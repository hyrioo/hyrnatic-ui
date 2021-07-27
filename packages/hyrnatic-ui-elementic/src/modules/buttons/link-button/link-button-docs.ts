import { ComponentAPIDescriptor, DocsAsProp, DocsAsPropsProp } from '../../../utils/docs';

const docs: ComponentAPIDescriptor = {
    slots: [],
    events: [
        {
            name: 'click',
            description: 'Emitted when clicked, while not in loading or disabled state.',
            parameters: null,
        }
    ],
    props: [
        DocsAsProp,
        DocsAsPropsProp,
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
            property: 'color',
            origin: 'elementic',
            description: 'The color used by the styling',
            type: ['string'],
            values: ['primary', 'negative', 'success', 'warning', 'danger', 'none'],
            default: 'primary',
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