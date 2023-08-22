export type ComponentAPIDescriptor = {
    slots?: Array<{
        name: string;
        description: string;
        props?: Array<{
            property: string;
            description: string;
            value: string;
        }> | null;
    }>;

    events?: Array<{
        name: string;
        description: string;
        parameters?: Array<string> | null;
    }>;

    props: Array<{
        origin: string;
        property: string;
        description: string;
        type: Array<string> | string;
        values?: Array<string> | null;
        default?: string | boolean | null | number;
        required?: boolean;
    }>;
}

export const DocsAsProp = {
    property: 'as',
    origin: 'core',
    description: 'Render the core component as tag',
    type: 'string',
    default: null,
}
export const DocsAsPropsProp = {
    property: 'as-props',
    origin: 'core',
    description: 'Callback to set props on the rendered tag',
    type: 'function',
    default: null,
}