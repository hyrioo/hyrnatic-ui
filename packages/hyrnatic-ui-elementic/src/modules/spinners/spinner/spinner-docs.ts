import { ComponentAPIDescriptor } from '../../../utils/docs';

const docs: ComponentAPIDescriptor = {
    slots: [],
    events: [],
    props: [
        {
            property: 'size',
            origin: 'elementic',
            description: 'The size of the spinner',
            type: ['string'],
            values: ['Any value compatible with css width and height'],
            default: '32px',
        },
        {
            property: 'color',
            origin: 'elementic',
            description: 'The color of the spinner',
            type: ['string'],
            values: ['primary', 'negative', 'success', 'warning', 'danger', 'current'],
            default: 'primary',
        },
    ]
};

export default docs;