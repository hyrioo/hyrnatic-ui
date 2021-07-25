import { ComponentAPIDescriptor } from '../../../utils/docs';

const docs: ComponentAPIDescriptor = {
    slots: [],
    events: [
        {
            name: 'focus',
            description: 'Emitted when the input field gets focus',
        },
        {
            name: 'blur',
            description: 'Emitted when the input field gets blur',
        }
    ],
    props: [
        {
            property: 'model-value',
            origin: 'core',
            description: '-',
            type: 'Luxon date',
            required: true,
        },
        {
            property: 'value-format',
            origin: 'core',
            description: 'The format to use when updating model-value.',
            type: 'string',
            default: null,
        },
        {
            property: 'disabled',
            origin: 'core',
            description: 'Determines if the date picker is disabled.',
            type: 'boolean',
            default: false,
        },
        {
            property: 'visible',
            origin: 'core',
            description: 'Determines if the date picker is visible. Use this instead of v-show.',
            type: 'boolean',
            default: true,
        },
        {
            property: 'multiple',
            origin: 'core',
            description: 'Allow selecting multiple dates.',
            type: 'boolean',
            default: false,
        },
        {
            property: 'clearable',
            origin: 'core',
            description: 'Allow clearing the date.',
            type: 'boolean',
            default: false,
        },
        {
            property: 'disabledDate',
            origin: 'core',
            description: 'Callback function to mark dates as disabled.',
            type: 'function',
            default: null,
        },
        {
            property: 'firstDayOfWeek',
            origin: 'elementic',
            description: 'Determines the first day of week. 0=monday, 6=sunday.',
            type: 'number',
            default: 0,
        },
        {
            property: 'highlightToday',
            origin: 'elementic',
            description: 'Highlight current date in the calendar',
            type: 'boolean',
            default: true,
        },
        {
            property: 'display-format',
            origin: 'elementic',
            description: 'The format used to display the selected date.',
            type: 'string',
            default: 'yyyy-MM-dd',
        },
    ]
};

export default docs;