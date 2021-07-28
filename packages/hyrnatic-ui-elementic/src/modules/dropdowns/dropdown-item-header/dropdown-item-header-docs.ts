import { ComponentAPIDescriptor } from '../../../utils/docs';

const docs: ComponentAPIDescriptor = {
    slots: [
        {
            name: 'default',
            description: 'Override the header',
            props: null,
        },
    ],
    events: [
    ],
    props: [
        {
            property: 'label',
            origin: 'elementic',
            description: 'The label of the header',
            type: ['string'],
            values: null,
            default: '',
        },
        {
            property: 'icon',
            origin: 'elementic',
            description: 'Icon registered in the IconRegistry',
            type: ['string'],
            values: null,
            default: null,
        },
    ]
};

export default docs;