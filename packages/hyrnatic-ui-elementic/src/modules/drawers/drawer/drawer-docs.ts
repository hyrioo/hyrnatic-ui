import { ComponentAPIDescriptor } from '../../../utils/docs';

const docs: ComponentAPIDescriptor = {
    slots: [
        {
            name: 'default',
            description: 'The content of the drawer.',
            props: null,
        },
        {
            name: 'title',
            description: 'Override the title content.',
            props: null,
        },
        {
            name: 'footer',
            description: 'Customize the footer.',
            props: null,
        },
    ],
    events: [
        /*{
            name: 'reject',
            description: 'INTERNAL USE. Emitted when the drawer is rejected by clicking the close button.',
            parameters: null,
        },
        {
            name: 'resolve',
            description: 'INTERNAL USE. Emitted when the drawer is rejected by clicking the close button.',
            parameters: null,
        },
        {
            name: 'transitionEnd',
            description: 'INTERNAL USE. Emitted when the drawer is rejected by clicking the close button.',
            parameters: null,
        },*/
    ],
    props: [
        /*{
            property: 'visible',
            origin: 'core',
            description: 'INTERNAL USE. Used to show the drawer.',
            type: 'boolean',
            values: null,
            default: false,
        },*/
        {
            property: 'title',
            origin: 'elementic',
            description: 'Optional title of the drawer',
            type: 'string',
            values: null,
            default: null,
        },
        {
            property: 'color',
            origin: 'elementic',
            description: 'The color used by the styling',
            type: ['string'],
            values: ['primary', 'danger'],
            default: 'primary',
        },
        {
            property: 'placement',
            origin: 'elementic',
            description: 'Which side the drawer should be in.',
            type: 'string',
            values: ['right', 'left'],
            default: 'right',
        },
    ]
};

export default docs;