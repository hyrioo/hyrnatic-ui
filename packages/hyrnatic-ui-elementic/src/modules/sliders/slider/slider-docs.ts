import { ComponentAPIDescriptor } from '../../../utils/docs';

const docs: ComponentAPIDescriptor = {
    slots: [],
    events: [],
    props: [
        {
            property: 'value',
            origin: 'core',
            description: 'The current value',
            type: 'number',
            required: true,
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
            property: 'show-overflow-indicator',
            origin: 'elementic',
            description: 'Adds an indicator if current value exceeds maximum',
            type: 'boolean',
            default: false,
        },
        {
            property: 'striped',
            origin: 'elementic',
            description: 'Add stripes to the progress bar',
            type: 'boolean',
            default: false,
        },
        {
            property: 'animated',
            origin: 'elementic',
            description: 'Animate the stripes',
            type: 'boolean',
            default: false,
        },
        {
            property: 'styling',
            origin: 'elementic',
            description: 'The style of the progress bar',
            type: 'string',
            values: ['primary', 'danger'],
            default: 'primary',
        },
        {
            property: 'size',
            origin: 'elementic',
            description: 'Modifiers for the model-value',
            type: 'string',
            values: ['normal', 'large'],
            default: 'normal',
        },
        {
            property: 'show-percentage',
            origin: 'elementic',
            description: 'Show the calculated percentage next to or inside the progress bar',
            type: 'boolean',
            default: false,
        },
        {
            property: 'show-value',
            origin: 'elementic',
            description: 'Show the current next to or inside the progress bar',
            type: 'boolean',
            default: false,
        },
    ]
};

export default docs;