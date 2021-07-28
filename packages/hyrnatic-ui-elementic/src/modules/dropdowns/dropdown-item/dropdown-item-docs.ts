import { ComponentAPIDescriptor } from '../../../utils/docs';

const docs: ComponentAPIDescriptor = {
    slots: [
        {
            name: 'default',
            description: 'Container for the items.',
            props: null,
        },
        {
            name: 'label',
            description: 'Override the label.',
            props: null,
        },
        {
            name: 'arrow',
            description: 'Override the arrow.',
            props: null,
        },
    ],
    events: [
        {
            name: 'click',
            description: 'Emitted when clicked on the main part of the button while spilt-button is enabled.',
            parameters: null,
        },
        {
            name: 'focusedItemChanged',
            description: 'Emitted when the focused item changes from key input.',
            parameters: null,
        },
    ],
    props: [
        {
            property: 'disabled',
            origin: 'core',
            description: 'Determines if the dropdown is disabled.',
            type: 'boolean',
            default: false,
        },
        {
            property: 'visible',
            origin: 'core',
            description: 'Determines if the dropdown is visible. This will also disable interactivity during transition. Use this instead of v-show.',
            type: 'boolean',
            default: true,
        },
        {
            property: 'split-button',
            origin: 'core',
            description: 'Determines if the dropdown should be a separate part of the button.',
            type: 'boolean',
            values: null,
            default: false,
        },
        {
            property: 'hide-on-click',
            origin: 'core',
            description: 'Determines if the dropdown should be hidden when an item is clicked.',
            type: 'boolean',
            values: null,
            default: true,
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