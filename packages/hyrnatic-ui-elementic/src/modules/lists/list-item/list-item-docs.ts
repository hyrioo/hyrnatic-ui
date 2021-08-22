import { ComponentAPIDescriptor } from '../../../utils/docs';

const docs: ComponentAPIDescriptor = {
    slots: [
        {
            name: 'default',
            description: 'Override the item content',
            props: null,
        },
    ],
    events: [],
    props: [
        {
            property: 'text',
            origin: 'elementic',
            description: 'The default label.',
            type: 'string',
            values: null,
            default: null,
        },
        {
            property: 'sub-text',
            origin: 'elementic',
            description: 'The subtext label.',
            type: 'string',
            values: null,
            default: null,
        },
    ]
};

export default docs;