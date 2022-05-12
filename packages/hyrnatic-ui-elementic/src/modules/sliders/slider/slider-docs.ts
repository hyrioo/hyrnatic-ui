import { ComponentAPIDescriptor } from '../../../utils/docs';

const docs: ComponentAPIDescriptor = {
    slots: [],
    events: [],
    props: [
        {
            property: 'model-value',
            origin: 'core',
            description: 'The model-value',
            type: 'number',
            required: true,
        },
        {
            property: 'disabled',
            origin: 'core',
            description: 'Determines if the slider is disabled.',
            type: 'boolean',
            default: false,
        },
        {
            property: 'minimum',
            origin: 'core',
            description: 'The minimum value',
            type: 'number',
            default: 0,
        },
        {
            property: 'maximum',
            origin: 'core',
            description: 'The maximum value',
            type: 'number',
            default: 100,
        },
        {
            property: 'step-size',
            origin: 'core',
            description: 'Specifies which increments the value is rounded to',
            type: 'number',
            default: 1,
        },
        {
            property: 'show-steps',
            origin: 'elementic',
            description: 'Shows breakpoint for each step',
            type: 'boolean',
            default: false,
        },
    ]
};

export default docs;