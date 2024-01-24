import { ComponentAPIDescriptor } from '../../../utils/docs';

const docs: ComponentAPIDescriptor = {
    slots: [],
    events: [
        {
            name: 'focus',
            description: 'Emitted when the input field gets focus',
            parameters: null,
        },
        {
            name: 'blur',
            description: 'Emitted when the input field gets blur',
            parameters: null,
        }
    ],
    props: [
        {
            property: 'model-value',
            origin: 'core',
            description: '-',
            type: 'Luxon date',
            required: true,
            values: null,
            default: null,
        },
        {
            property: 'value-format',
            origin: 'core',
            description: 'The format to use when updating model-value.',
            type: 'string',
            values: null,
            default: null,
        },
        {
            property: 'disabled',
            origin: 'core',
            description: 'Determines if the date picker is disabled.',
            type: 'boolean',
            values: null,
            default: false,
        },
        {
            property: 'visible',
            origin: 'core',
            description: 'Determines if the date picker is visible. Use this instead of v-show.',
            type: 'boolean',
            values: null,
            default: true,
        },
        {
            property: 'multiple',
            origin: 'core',
            description: 'Allow selecting multiple dates.',
            type: 'boolean',
            values: null,
            default: false,
        },
        {
            property: 'clearable',
            origin: 'core',
            description: 'Allow clearing the date.',
            type: 'boolean',
            values: null,
            default: false,
        },
        {
            property: 'disabled-date',
            origin: 'core',
            description: 'Callback function to mark dates as disabled.',
            type: 'function',
            values: null,
            default: null,
        },
        {
            property: 'first-day-of-week',
            origin: 'elementic',
            description: 'Determines the first day of week. 0=monday, 6=sunday.',
            type: 'number',
            values: null,
            default: 0,
        },
        {
            property: 'highlight-today',
            origin: 'elementic',
            description: 'Highlight current date in the calendar',
            type: 'boolean',
            values: null,
            default: true,
        },
        {
            property: 'display-format',
            origin: 'elementic',
            description: 'The format used to display the selected date.',
            type: 'string',
            values: null,
            default: 'yyyy-MM-dd',
        },
    ]
};

export default docs;