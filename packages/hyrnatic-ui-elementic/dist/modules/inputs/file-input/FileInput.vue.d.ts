declare const _sfc_main: import("vue").DefineComponent<{
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
        default: null;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
}, {
    selectedFiles: import("vue").Ref<any>;
    filesChanged: (e: InputEvent) => void;
    text: import("vue").ComputedRef<string | null>;
    css_root: import("vue").ComputedRef<string | null | undefined>;
    css_ec: (element: string) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        default: null;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    label: string;
    multiple: boolean;
    accept: string;
}>;
export default _sfc_main;
