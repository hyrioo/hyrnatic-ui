declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (ObjectConstructor | {
            new (): FileList;
            prototype: FileList;
        })[];
    };
    multiple: {
        type: BooleanConstructor;
    };
    accept: {
        type: StringConstructor;
        default: any;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
}, {
    selectedFiles: import("vue").Ref<any>;
    filesChanged: (e: InputEvent) => void;
    text: import("vue").ComputedRef<string>;
    css_root: import("vue").ComputedRef<string>;
    css_ec: (element: any) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    label: string;
    multiple: boolean;
    accept: string;
} & {
    modelValue?: unknown;
}>, {
    label: string;
    multiple: boolean;
    accept: string;
}>;
export default _default;
