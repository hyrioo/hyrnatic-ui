import { SetupContext, ComputedRef, PropType } from 'vue';
import { CoreSelectItemInstance } from './SelectItem';
export declare const coreSelectModelValueProp: {
    modelValue: {
        type: any;
    };
};
export declare const coreSelectDisabledProp: {
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreSelectMultipleProp: {
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreSelectAllowClearProp: {
    allowClear: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreSelectHideOnSelectProp: {
    hideOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreSelectCompareProp: {
    compare: {
        type: PropType<string | ((modelValue: any[], itemValue: any) => boolean)>;
        default: any;
    };
};
export declare type CoreSelectSlotProps = {
    modelValue: ComputedRef;
    disabled: ComputedRef<boolean>;
    allowClear: ComputedRef<boolean>;
    menuVisible: ComputedRef<boolean>;
    focusedItem: ComputedRef<CoreSelectItemInstance>;
    clearFocusedItem: (e: any) => any;
    anythingSelected: ComputedRef<boolean>;
    selectedItems: ComputedRef<CoreSelectItemInstance[]>;
    selectedText: ComputedRef<string>;
    clearValue: (e: any) => any;
    close: (e: any) => any;
    onButtonClick: (e: any) => any;
    onItemClick: (e: any) => any;
    onKeyEvents: (e: any) => any;
    onMenuTransitioning: (state: boolean) => void;
};
export declare function coreSelectSetup(): {
    as(tag: string, func?: (slotProps: CoreSelectSlotProps) => any): any;
    props(proxies: string[]): any;
    setProp(key: string, value: any): any;
    events(events: string[]): any;
    build(): {
        props: any;
        listeners: any;
    };
};
declare const _default: import("vue").DefineComponent<{
    compare: {
        type: PropType<string | ((modelValue: any[], itemValue: any) => boolean)>;
        default: any;
    };
    modelValue: {
        type: any;
    };
    hideOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowClear: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    asProps: {
        type: PropType<(slotProps: any) => any>;
        default: any;
    };
    as: {
        type: StringConstructor;
        default: any;
    };
}, {
    close: () => void;
    slotProps: {
        modelValue: any;
        disabled: boolean;
        allowClear: boolean;
        menuVisible: boolean;
        focusedItem: {
            value: any;
            label: string;
            disabled: boolean;
            component?: {
                uid: number;
                type: import("vue").FunctionalComponent<{}, any> | {
                    [x: string]: any;
                    setup?: (this: void, props: {}, ctx: SetupContext<any>) => any;
                    name?: string;
                    template?: string | (object & {});
                    render?: Function;
                    components?: {
                        [x: string]: import("vue").FunctionalComponent<any, any> | {
                            new (...args: any[]): any;
                            __isFragment?: never;
                            __isTeleport?: never;
                            __isSuspense?: never;
                        } | {
                            [x: string]: any;
                            setup?: (this: void, props: any, ctx: SetupContext<any>) => any;
                            name?: string;
                            template?: string | (object & {});
                            render?: Function;
                            components?: any;
                            directives?: {
                                [x: string]: import("vue").FunctionDirective<any, any> | {
                                    created?: import("vue").DirectiveHook<any, null, any>;
                                    beforeMount?: import("vue").DirectiveHook<any, null, any>;
                                    mounted?: import("vue").DirectiveHook<any, null, any>;
                                    beforeUpdate?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                        [key: string]: any;
                                    }>, any>;
                                    updated?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                        [key: string]: any;
                                    }>, any>;
                                    beforeUnmount?: import("vue").DirectiveHook<any, null, any>;
                                    unmounted?: import("vue").DirectiveHook<any, null, any>;
                                    getSSRProps?: (binding: import("vue").DirectiveBinding<any>, vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                                        [key: string]: any;
                                    }>) => {
                                        [x: string]: unknown;
                                    };
                                };
                            };
                            inheritAttrs?: boolean;
                            emits?: any;
                            expose?: string[];
                            serverPrefetch?: () => Promise<any>;
                            call?: (this: unknown, ...args: unknown[]) => never;
                            __isFragment?: never;
                            __isTeleport?: never;
                            __isSuspense?: never;
                            __defaults?: {};
                            data?: (this: any, vm: any) => any;
                            computed?: {
                                [x: string]: import("@vue/reactivity").ComputedGetter<any> | {
                                    get: import("@vue/reactivity").ComputedGetter<any>;
                                    set: import("@vue/reactivity").ComputedSetter<any>;
                                };
                            };
                            methods?: {
                                [x: string]: Function;
                            };
                            watch?: {
                                [x: string]: string | import("vue").WatchCallback<any, any> | {
                                    handler: string | import("vue").WatchCallback<any, any>;
                                    immediate?: boolean;
                                    deep?: boolean;
                                    flush?: "pre" | "post" | "sync";
                                    onTrack?: (event: import("vue").DebuggerEvent) => void;
                                    onTrigger?: (event: import("vue").DebuggerEvent) => void;
                                } | (string | import("vue").WatchCallback<any, any> | {
                                    handler: string | import("vue").WatchCallback<any, any>;
                                    immediate?: boolean;
                                    deep?: boolean;
                                    flush?: "pre" | "post" | "sync";
                                    onTrack?: (event: import("vue").DebuggerEvent) => void;
                                    onTrigger?: (event: import("vue").DebuggerEvent) => void;
                                })[];
                            };
                            provide?: Function | {
                                [x: string]: unknown;
                            };
                            inject?: string[] | {
                                [x: string]: string | symbol | {
                                    from?: string | symbol;
                                    default?: unknown;
                                };
                            };
                            mixins?: any[];
                            extends?: any;
                            beforeCreate?: () => void;
                            created?: () => void;
                            beforeMount?: () => void;
                            mounted?: () => void;
                            beforeUpdate?: () => void;
                            updated?: () => void;
                            activated?: () => void;
                            deactivated?: () => void;
                            beforeDestroy?: () => void;
                            beforeUnmount?: () => void;
                            destroyed?: () => void;
                            unmounted?: () => void;
                            renderTracked?: (e: import("vue").DebuggerEvent) => void;
                            renderTriggered?: (e: import("vue").DebuggerEvent) => void;
                            errorCaptured?: (err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void;
                            delimiters?: [string, string];
                            __file?: string;
                        };
                    };
                    directives?: {
                        [x: string]: import("vue").FunctionDirective<any, any> | {
                            created?: import("vue").DirectiveHook<any, null, any>;
                            beforeMount?: import("vue").DirectiveHook<any, null, any>;
                            mounted?: import("vue").DirectiveHook<any, null, any>;
                            beforeUpdate?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                [key: string]: any;
                            }>, any>;
                            updated?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                [key: string]: any;
                            }>, any>;
                            beforeUnmount?: import("vue").DirectiveHook<any, null, any>;
                            unmounted?: import("vue").DirectiveHook<any, null, any>;
                            getSSRProps?: (binding: import("vue").DirectiveBinding<any>, vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                                [key: string]: any;
                            }>) => {
                                [x: string]: unknown;
                            };
                        };
                    };
                    inheritAttrs?: boolean;
                    emits?: any;
                    expose?: string[];
                    serverPrefetch?: () => Promise<any>;
                    call?: (this: unknown, ...args: unknown[]) => never;
                    __isFragment?: never;
                    __isTeleport?: never;
                    __isSuspense?: never;
                    __defaults?: {};
                    data?: (this: {
                        $: import("vue").ComponentInternalInstance;
                        $data: {};
                        $props: {};
                        $attrs: {
                            [x: string]: unknown;
                        };
                        $refs: {
                            [x: string]: unknown;
                        };
                        $slots: Readonly<{
                            [name: string]: import("vue").Slot;
                        }>;
                        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                        $emit: (event: string, ...args: any[]) => void;
                        $el: any;
                        $options: import("vue").ComponentOptionsBase<{}, {}, {}, {}, import("vue").MethodOptions, any, any, {}, string, {}>;
                        $forceUpdate: import("vue").ReactiveEffect<any>;
                        $nextTick: typeof import("vue").nextTick;
                        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
                    } & import("vue").ShallowUnwrapRef<{}> & {
                        [x: string]: never;
                    } & import("vue").MethodOptions & import("vue").ComponentCustomProperties, vm: {
                        $: import("vue").ComponentInternalInstance;
                        $data: {};
                        $props: {};
                        $attrs: {
                            [x: string]: unknown;
                        };
                        $refs: {
                            [x: string]: unknown;
                        };
                        $slots: Readonly<{
                            [name: string]: import("vue").Slot;
                        }>;
                        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                        $emit: (event: string, ...args: any[]) => void;
                        $el: any;
                        $options: import("vue").ComponentOptionsBase<{}, {}, {}, {}, import("vue").MethodOptions, any, any, {}, string, {}>;
                        $forceUpdate: import("vue").ReactiveEffect<any>;
                        $nextTick: typeof import("vue").nextTick;
                        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
                    } & import("vue").ShallowUnwrapRef<{}> & {
                        [x: string]: never;
                    } & import("vue").MethodOptions & import("vue").ComponentCustomProperties) => any;
                    computed?: {
                        [x: string]: import("@vue/reactivity").ComputedGetter<any> | {
                            get: import("@vue/reactivity").ComputedGetter<any>;
                            set: import("@vue/reactivity").ComputedSetter<any>;
                        };
                    };
                    methods?: {
                        [x: string]: Function;
                    };
                    watch?: {
                        [x: string]: string | import("vue").WatchCallback<any, any> | {
                            handler: string | import("vue").WatchCallback<any, any>;
                            immediate?: boolean;
                            deep?: boolean;
                            flush?: "pre" | "post" | "sync";
                            onTrack?: (event: import("vue").DebuggerEvent) => void;
                            onTrigger?: (event: import("vue").DebuggerEvent) => void;
                        } | (string | import("vue").WatchCallback<any, any> | {
                            handler: string | import("vue").WatchCallback<any, any>;
                            immediate?: boolean;
                            deep?: boolean;
                            flush?: "pre" | "post" | "sync";
                            onTrack?: (event: import("vue").DebuggerEvent) => void;
                            onTrigger?: (event: import("vue").DebuggerEvent) => void;
                        })[];
                    };
                    provide?: Function | {
                        [x: string]: unknown;
                    };
                    inject?: string[] | {
                        [x: string]: string | symbol | {
                            from?: string | symbol;
                            default?: unknown;
                        };
                    };
                    mixins?: any[];
                    extends?: any;
                    beforeCreate?: () => void;
                    created?: () => void;
                    beforeMount?: () => void;
                    mounted?: () => void;
                    beforeUpdate?: () => void;
                    updated?: () => void;
                    activated?: () => void;
                    deactivated?: () => void;
                    beforeDestroy?: () => void;
                    beforeUnmount?: () => void;
                    destroyed?: () => void;
                    unmounted?: () => void;
                    renderTracked?: (e: import("vue").DebuggerEvent) => void;
                    renderTriggered?: (e: import("vue").DebuggerEvent) => void;
                    errorCaptured?: (err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void;
                    delimiters?: [string, string];
                    __file?: string;
                };
                parent: any;
                root: any;
                appContext: {
                    app: {
                        version: string;
                        config: {
                            readonly isNativeTag?: (tag: string) => boolean;
                            performance: boolean;
                            optionMergeStrategies: {
                                [x: string]: import("vue").OptionMergeFunction;
                            };
                            globalProperties: {
                                [x: string]: any;
                            };
                            isCustomElement: (tag: string) => boolean;
                            errorHandler?: (err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => void;
                            warnHandler?: (msg: string, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, trace: string) => void;
                        };
                        use: (plugin: import("@vue/runtime-core").Plugin, ...options: any[]) => import("vue").App<any>;
                        mixin: (mixin: import("vue").ComponentOptions<{}, any, any, any, any, any, any, any>) => import("vue").App<any>;
                        component: {
                            (name: string): import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
                            (name: string, component: import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>): import("vue").App<any>;
                        };
                        directive: {
                            (name: string): import("vue").Directive<any, any>;
                            (name: string, directive: import("vue").Directive<any, any>): import("vue").App<any>;
                        };
                        mount: (rootContainer: any, isHydrate?: boolean) => import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                        unmount: () => void;
                        provide: <T>(key: string | import("vue").InjectionKey<T>, value: T) => import("vue").App<any>;
                        _uid: number;
                        _component: import("vue").FunctionalComponent<{}, any> | {
                            [x: string]: any;
                            setup?: (this: void, props: {}, ctx: SetupContext<any>) => any;
                            name?: string;
                            template?: string | (object & {});
                            render?: Function;
                            components?: {
                                [x: string]: import("vue").FunctionalComponent<any, any> | {
                                    new (...args: any[]): any;
                                    __isFragment?: never;
                                    __isTeleport?: never;
                                    __isSuspense?: never;
                                } | {
                                    [x: string]: any;
                                    setup?: (this: void, props: any, ctx: SetupContext<any>) => any;
                                    name?: string;
                                    template?: string | (object & {});
                                    render?: Function;
                                    components?: any;
                                    directives?: {
                                        [x: string]: import("vue").FunctionDirective<any, any> | {
                                            created?: import("vue").DirectiveHook<any, null, any>;
                                            beforeMount?: import("vue").DirectiveHook<any, null, any>;
                                            mounted?: import("vue").DirectiveHook<any, null, any>;
                                            beforeUpdate?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                                [key: string]: any;
                                            }>, any>;
                                            updated?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                                [key: string]: any;
                                            }>, any>;
                                            beforeUnmount?: import("vue").DirectiveHook<any, null, any>;
                                            unmounted?: import("vue").DirectiveHook<any, null, any>;
                                            getSSRProps?: (binding: import("vue").DirectiveBinding<any>, vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                                                [key: string]: any;
                                            }>) => {
                                                [x: string]: unknown;
                                            };
                                        };
                                    };
                                    inheritAttrs?: boolean;
                                    emits?: any;
                                    expose?: string[];
                                    serverPrefetch?: () => Promise<any>;
                                    call?: (this: unknown, ...args: unknown[]) => never;
                                    __isFragment?: never;
                                    __isTeleport?: never;
                                    __isSuspense?: never;
                                    __defaults?: {};
                                    data?: (this: any, vm: any) => any;
                                    computed?: {
                                        [x: string]: import("@vue/reactivity").ComputedGetter<any> | {
                                            get: import("@vue/reactivity").ComputedGetter<any>;
                                            set: import("@vue/reactivity").ComputedSetter<any>;
                                        };
                                    };
                                    methods?: {
                                        [x: string]: Function;
                                    };
                                    watch?: {
                                        [x: string]: string | import("vue").WatchCallback<any, any> | {
                                            handler: string | import("vue").WatchCallback<any, any>;
                                            immediate?: boolean;
                                            deep?: boolean;
                                            flush?: "pre" | "post" | "sync";
                                            onTrack?: (event: import("vue").DebuggerEvent) => void;
                                            onTrigger?: (event: import("vue").DebuggerEvent) => void;
                                        } | (string | import("vue").WatchCallback<any, any> | {
                                            handler: string | import("vue").WatchCallback<any, any>;
                                            immediate?: boolean;
                                            deep?: boolean;
                                            flush?: "pre" | "post" | "sync";
                                            onTrack?: (event: import("vue").DebuggerEvent) => void;
                                            onTrigger?: (event: import("vue").DebuggerEvent) => void;
                                        })[];
                                    };
                                    provide?: Function | {
                                        [x: string]: unknown;
                                    };
                                    inject?: string[] | {
                                        [x: string]: string | symbol | {
                                            from?: string | symbol;
                                            default?: unknown;
                                        };
                                    };
                                    mixins?: any[];
                                    extends?: any;
                                    beforeCreate?: () => void;
                                    created?: () => void;
                                    beforeMount?: () => void;
                                    mounted?: () => void;
                                    beforeUpdate?: () => void;
                                    updated?: () => void;
                                    activated?: () => void;
                                    deactivated?: () => void;
                                    beforeDestroy?: () => void;
                                    beforeUnmount?: () => void;
                                    destroyed?: () => void;
                                    unmounted?: () => void;
                                    renderTracked?: (e: import("vue").DebuggerEvent) => void;
                                    renderTriggered?: (e: import("vue").DebuggerEvent) => void;
                                    errorCaptured?: (err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void;
                                    delimiters?: [string, string];
                                    __file?: string;
                                };
                            };
                            directives?: {
                                [x: string]: import("vue").FunctionDirective<any, any> | {
                                    created?: import("vue").DirectiveHook<any, null, any>;
                                    beforeMount?: import("vue").DirectiveHook<any, null, any>;
                                    mounted?: import("vue").DirectiveHook<any, null, any>;
                                    beforeUpdate?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                        [key: string]: any;
                                    }>, any>;
                                    updated?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                        [key: string]: any;
                                    }>, any>;
                                    beforeUnmount?: import("vue").DirectiveHook<any, null, any>;
                                    unmounted?: import("vue").DirectiveHook<any, null, any>;
                                    getSSRProps?: (binding: import("vue").DirectiveBinding<any>, vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                                        [key: string]: any;
                                    }>) => {
                                        [x: string]: unknown;
                                    };
                                };
                            };
                            inheritAttrs?: boolean;
                            emits?: any;
                            expose?: string[];
                            serverPrefetch?: () => Promise<any>;
                            call?: (this: unknown, ...args: unknown[]) => never;
                            __isFragment?: never;
                            __isTeleport?: never;
                            __isSuspense?: never;
                            __defaults?: {};
                            data?: (this: {
                                $: import("vue").ComponentInternalInstance;
                                $data: {};
                                $props: {};
                                $attrs: {
                                    [x: string]: unknown;
                                };
                                $refs: {
                                    [x: string]: unknown;
                                };
                                $slots: Readonly<{
                                    [name: string]: import("vue").Slot;
                                }>;
                                $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                                $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                                $emit: (event: string, ...args: any[]) => void;
                                $el: any;
                                $options: import("vue").ComponentOptionsBase<{}, {}, {}, {}, import("vue").MethodOptions, any, any, {}, string, {}>;
                                $forceUpdate: import("vue").ReactiveEffect<any>;
                                $nextTick: typeof import("vue").nextTick;
                                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
                            } & import("vue").ShallowUnwrapRef<{}> & {
                                [x: string]: never;
                            } & import("vue").MethodOptions & import("vue").ComponentCustomProperties, vm: {
                                $: import("vue").ComponentInternalInstance;
                                $data: {};
                                $props: {};
                                $attrs: {
                                    [x: string]: unknown;
                                };
                                $refs: {
                                    [x: string]: unknown;
                                };
                                $slots: Readonly<{
                                    [name: string]: import("vue").Slot;
                                }>;
                                $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                                $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                                $emit: (event: string, ...args: any[]) => void;
                                $el: any;
                                $options: import("vue").ComponentOptionsBase<{}, {}, {}, {}, import("vue").MethodOptions, any, any, {}, string, {}>;
                                $forceUpdate: import("vue").ReactiveEffect<any>;
                                $nextTick: typeof import("vue").nextTick;
                                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
                            } & import("vue").ShallowUnwrapRef<{}> & {
                                [x: string]: never;
                            } & import("vue").MethodOptions & import("vue").ComponentCustomProperties) => any;
                            computed?: {
                                [x: string]: import("@vue/reactivity").ComputedGetter<any> | {
                                    get: import("@vue/reactivity").ComputedGetter<any>;
                                    set: import("@vue/reactivity").ComputedSetter<any>;
                                };
                            };
                            methods?: {
                                [x: string]: Function;
                            };
                            watch?: {
                                [x: string]: string | import("vue").WatchCallback<any, any> | {
                                    handler: string | import("vue").WatchCallback<any, any>;
                                    immediate?: boolean;
                                    deep?: boolean;
                                    flush?: "pre" | "post" | "sync";
                                    onTrack?: (event: import("vue").DebuggerEvent) => void;
                                    onTrigger?: (event: import("vue").DebuggerEvent) => void;
                                } | (string | import("vue").WatchCallback<any, any> | {
                                    handler: string | import("vue").WatchCallback<any, any>;
                                    immediate?: boolean;
                                    deep?: boolean;
                                    flush?: "pre" | "post" | "sync";
                                    onTrack?: (event: import("vue").DebuggerEvent) => void;
                                    onTrigger?: (event: import("vue").DebuggerEvent) => void;
                                })[];
                            };
                            provide?: Function | {
                                [x: string]: unknown;
                            };
                            inject?: string[] | {
                                [x: string]: string | symbol | {
                                    from?: string | symbol;
                                    default?: unknown;
                                };
                            };
                            mixins?: any[];
                            extends?: any;
                            beforeCreate?: () => void;
                            created?: () => void;
                            beforeMount?: () => void;
                            mounted?: () => void;
                            beforeUpdate?: () => void;
                            updated?: () => void;
                            activated?: () => void;
                            deactivated?: () => void;
                            beforeDestroy?: () => void;
                            beforeUnmount?: () => void;
                            destroyed?: () => void;
                            unmounted?: () => void;
                            renderTracked?: (e: import("vue").DebuggerEvent) => void;
                            renderTriggered?: (e: import("vue").DebuggerEvent) => void;
                            errorCaptured?: (err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void;
                            delimiters?: [string, string];
                            __file?: string;
                        };
                        _props: {
                            [x: string]: unknown;
                        };
                        _container: any;
                        _context: any;
                    };
                    config: {
                        readonly isNativeTag?: (tag: string) => boolean;
                        performance: boolean;
                        optionMergeStrategies: {
                            [x: string]: import("vue").OptionMergeFunction;
                        };
                        globalProperties: {
                            [x: string]: any;
                        };
                        isCustomElement: (tag: string) => boolean;
                        errorHandler?: (err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => void;
                        warnHandler?: (msg: string, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, trace: string) => void;
                    };
                    mixins: {
                        [x: string]: any;
                        setup?: (this: void, props: {}, ctx: SetupContext<any>) => any;
                        name?: string;
                        template?: string | (object & {});
                        render?: Function;
                        components?: {
                            [x: string]: import("vue").FunctionalComponent<any, any> | {
                                new (...args: any[]): any;
                                __isFragment?: never;
                                __isTeleport?: never;
                                __isSuspense?: never;
                            } | {
                                [x: string]: any;
                                setup?: (this: void, props: any, ctx: SetupContext<any>) => any;
                                name?: string;
                                template?: string | (object & {});
                                render?: Function;
                                components?: any;
                                directives?: {
                                    [x: string]: import("vue").FunctionDirective<any, any> | {
                                        created?: import("vue").DirectiveHook<any, null, any>;
                                        beforeMount?: import("vue").DirectiveHook<any, null, any>;
                                        mounted?: import("vue").DirectiveHook<any, null, any>;
                                        beforeUpdate?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                            [key: string]: any;
                                        }>, any>;
                                        updated?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                            [key: string]: any;
                                        }>, any>;
                                        beforeUnmount?: import("vue").DirectiveHook<any, null, any>;
                                        unmounted?: import("vue").DirectiveHook<any, null, any>;
                                        getSSRProps?: (binding: import("vue").DirectiveBinding<any>, vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                                            [key: string]: any;
                                        }>) => {
                                            [x: string]: unknown;
                                        };
                                    };
                                };
                                inheritAttrs?: boolean;
                                emits?: any;
                                expose?: string[];
                                serverPrefetch?: () => Promise<any>;
                                call?: (this: unknown, ...args: unknown[]) => never;
                                __isFragment?: never;
                                __isTeleport?: never;
                                __isSuspense?: never;
                                __defaults?: {};
                                data?: (this: any, vm: any) => any;
                                computed?: {
                                    [x: string]: import("@vue/reactivity").ComputedGetter<any> | {
                                        get: import("@vue/reactivity").ComputedGetter<any>;
                                        set: import("@vue/reactivity").ComputedSetter<any>;
                                    };
                                };
                                methods?: {
                                    [x: string]: Function;
                                };
                                watch?: {
                                    [x: string]: string | import("vue").WatchCallback<any, any> | {
                                        handler: string | import("vue").WatchCallback<any, any>;
                                        immediate?: boolean;
                                        deep?: boolean;
                                        flush?: "pre" | "post" | "sync";
                                        onTrack?: (event: import("vue").DebuggerEvent) => void;
                                        onTrigger?: (event: import("vue").DebuggerEvent) => void;
                                    } | (string | import("vue").WatchCallback<any, any> | {
                                        handler: string | import("vue").WatchCallback<any, any>;
                                        immediate?: boolean;
                                        deep?: boolean;
                                        flush?: "pre" | "post" | "sync";
                                        onTrack?: (event: import("vue").DebuggerEvent) => void;
                                        onTrigger?: (event: import("vue").DebuggerEvent) => void;
                                    })[];
                                };
                                provide?: Function | {
                                    [x: string]: unknown;
                                };
                                inject?: string[] | {
                                    [x: string]: string | symbol | {
                                        from?: string | symbol;
                                        default?: unknown;
                                    };
                                };
                                mixins?: any[];
                                extends?: any;
                                beforeCreate?: () => void;
                                created?: () => void;
                                beforeMount?: () => void;
                                mounted?: () => void;
                                beforeUpdate?: () => void;
                                updated?: () => void;
                                activated?: () => void;
                                deactivated?: () => void;
                                beforeDestroy?: () => void;
                                beforeUnmount?: () => void;
                                destroyed?: () => void;
                                unmounted?: () => void;
                                renderTracked?: (e: import("vue").DebuggerEvent) => void;
                                renderTriggered?: (e: import("vue").DebuggerEvent) => void;
                                errorCaptured?: (err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void;
                                delimiters?: [string, string];
                                __file?: string;
                            };
                        };
                        directives?: {
                            [x: string]: import("vue").FunctionDirective<any, any> | {
                                created?: import("vue").DirectiveHook<any, null, any>;
                                beforeMount?: import("vue").DirectiveHook<any, null, any>;
                                mounted?: import("vue").DirectiveHook<any, null, any>;
                                beforeUpdate?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                    [key: string]: any;
                                }>, any>;
                                updated?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                    [key: string]: any;
                                }>, any>;
                                beforeUnmount?: import("vue").DirectiveHook<any, null, any>;
                                unmounted?: import("vue").DirectiveHook<any, null, any>;
                                getSSRProps?: (binding: import("vue").DirectiveBinding<any>, vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                                    [key: string]: any;
                                }>) => {
                                    [x: string]: unknown;
                                };
                            };
                        };
                        inheritAttrs?: boolean;
                        emits?: any;
                        expose?: string[];
                        serverPrefetch?: () => Promise<any>;
                        call?: (this: unknown, ...args: unknown[]) => never;
                        __isFragment?: never;
                        __isTeleport?: never;
                        __isSuspense?: never;
                        __defaults?: {};
                        data?: (this: {
                            $: import("vue").ComponentInternalInstance;
                            $data: {};
                            $props: {};
                            $attrs: {
                                [x: string]: unknown;
                            };
                            $refs: {
                                [x: string]: unknown;
                            };
                            $slots: Readonly<{
                                [name: string]: import("vue").Slot;
                            }>;
                            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                            $emit: (event: string, ...args: any[]) => void;
                            $el: any;
                            $options: import("vue").ComponentOptionsBase<{}, {}, {}, {}, import("vue").MethodOptions, any, any, {}, string, {}>;
                            $forceUpdate: import("vue").ReactiveEffect<any>;
                            $nextTick: typeof import("vue").nextTick;
                            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
                        } & import("vue").ShallowUnwrapRef<{}> & {
                            [x: string]: never;
                        } & import("vue").MethodOptions & import("vue").ComponentCustomProperties, vm: {
                            $: import("vue").ComponentInternalInstance;
                            $data: {};
                            $props: {};
                            $attrs: {
                                [x: string]: unknown;
                            };
                            $refs: {
                                [x: string]: unknown;
                            };
                            $slots: Readonly<{
                                [name: string]: import("vue").Slot;
                            }>;
                            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                            $emit: (event: string, ...args: any[]) => void;
                            $el: any;
                            $options: import("vue").ComponentOptionsBase<{}, {}, {}, {}, import("vue").MethodOptions, any, any, {}, string, {}>;
                            $forceUpdate: import("vue").ReactiveEffect<any>;
                            $nextTick: typeof import("vue").nextTick;
                            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
                        } & import("vue").ShallowUnwrapRef<{}> & {
                            [x: string]: never;
                        } & import("vue").MethodOptions & import("vue").ComponentCustomProperties) => any;
                        computed?: any;
                        methods?: any;
                        watch?: {
                            [x: string]: string | import("vue").WatchCallback<any, any> | {
                                handler: string | import("vue").WatchCallback<any, any>;
                                immediate?: boolean;
                                deep?: boolean;
                                flush?: "pre" | "post" | "sync";
                                onTrack?: (event: import("vue").DebuggerEvent) => void;
                                onTrigger?: (event: import("vue").DebuggerEvent) => void;
                            } | (string | import("vue").WatchCallback<any, any> | {
                                handler: string | import("vue").WatchCallback<any, any>;
                                immediate?: boolean;
                                deep?: boolean;
                                flush?: "pre" | "post" | "sync";
                                onTrack?: (event: import("vue").DebuggerEvent) => void;
                                onTrigger?: (event: import("vue").DebuggerEvent) => void;
                            })[];
                        };
                        provide?: Function | {
                            [x: string]: unknown;
                        };
                        inject?: string[] | {
                            [x: string]: string | symbol | {
                                from?: string | symbol;
                                default?: unknown;
                            };
                        };
                        mixins?: any[];
                        extends?: any;
                        beforeCreate?: () => void;
                        created?: () => void;
                        beforeMount?: () => void;
                        mounted?: () => void;
                        beforeUpdate?: () => void;
                        updated?: () => void;
                        activated?: () => void;
                        deactivated?: () => void;
                        beforeDestroy?: () => void;
                        beforeUnmount?: () => void;
                        destroyed?: () => void;
                        unmounted?: () => void;
                        renderTracked?: (e: import("vue").DebuggerEvent) => void;
                        renderTriggered?: (e: import("vue").DebuggerEvent) => void;
                        errorCaptured?: (err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void;
                        delimiters?: [string, string];
                        __file?: string;
                    }[];
                    components: {
                        [x: string]: import("vue").FunctionalComponent<any, any> | {
                            new (...args: any[]): any;
                            __isFragment?: never;
                            __isTeleport?: never;
                            __isSuspense?: never;
                        } | {
                            [x: string]: any;
                            setup?: (this: void, props: any, ctx: SetupContext<any>) => any;
                            name?: string;
                            template?: string | (object & {});
                            render?: Function;
                            components?: any;
                            directives?: {
                                [x: string]: import("vue").FunctionDirective<any, any> | {
                                    created?: import("vue").DirectiveHook<any, null, any>;
                                    beforeMount?: import("vue").DirectiveHook<any, null, any>;
                                    mounted?: import("vue").DirectiveHook<any, null, any>;
                                    beforeUpdate?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                        [key: string]: any;
                                    }>, any>;
                                    updated?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                        [key: string]: any;
                                    }>, any>;
                                    beforeUnmount?: import("vue").DirectiveHook<any, null, any>;
                                    unmounted?: import("vue").DirectiveHook<any, null, any>;
                                    getSSRProps?: (binding: import("vue").DirectiveBinding<any>, vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                                        [key: string]: any;
                                    }>) => {
                                        [x: string]: unknown;
                                    };
                                };
                            };
                            inheritAttrs?: boolean;
                            emits?: any;
                            expose?: string[];
                            serverPrefetch?: () => Promise<any>;
                            call?: (this: unknown, ...args: unknown[]) => never;
                            __isFragment?: never;
                            __isTeleport?: never;
                            __isSuspense?: never;
                            __defaults?: {};
                            data?: (this: any, vm: any) => any;
                            computed?: {
                                [x: string]: import("@vue/reactivity").ComputedGetter<any> | {
                                    get: import("@vue/reactivity").ComputedGetter<any>;
                                    set: import("@vue/reactivity").ComputedSetter<any>;
                                };
                            };
                            methods?: {
                                [x: string]: Function;
                            };
                            watch?: {
                                [x: string]: string | import("vue").WatchCallback<any, any> | {
                                    handler: string | import("vue").WatchCallback<any, any>;
                                    immediate?: boolean;
                                    deep?: boolean;
                                    flush?: "pre" | "post" | "sync";
                                    onTrack?: (event: import("vue").DebuggerEvent) => void;
                                    onTrigger?: (event: import("vue").DebuggerEvent) => void;
                                } | (string | import("vue").WatchCallback<any, any> | {
                                    handler: string | import("vue").WatchCallback<any, any>;
                                    immediate?: boolean;
                                    deep?: boolean;
                                    flush?: "pre" | "post" | "sync";
                                    onTrack?: (event: import("vue").DebuggerEvent) => void;
                                    onTrigger?: (event: import("vue").DebuggerEvent) => void;
                                })[];
                            };
                            provide?: Function | {
                                [x: string]: unknown;
                            };
                            inject?: string[] | {
                                [x: string]: string | symbol | {
                                    from?: string | symbol;
                                    default?: unknown;
                                };
                            };
                            mixins?: any[];
                            extends?: any;
                            beforeCreate?: () => void;
                            created?: () => void;
                            beforeMount?: () => void;
                            mounted?: () => void;
                            beforeUpdate?: () => void;
                            updated?: () => void;
                            activated?: () => void;
                            deactivated?: () => void;
                            beforeDestroy?: () => void;
                            beforeUnmount?: () => void;
                            destroyed?: () => void;
                            unmounted?: () => void;
                            renderTracked?: (e: import("vue").DebuggerEvent) => void;
                            renderTriggered?: (e: import("vue").DebuggerEvent) => void;
                            errorCaptured?: (err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void;
                            delimiters?: [string, string];
                            __file?: string;
                        };
                    };
                    directives: {
                        [x: string]: import("vue").FunctionDirective<any, any> | {
                            created?: import("vue").DirectiveHook<any, null, any>;
                            beforeMount?: import("vue").DirectiveHook<any, null, any>;
                            mounted?: import("vue").DirectiveHook<any, null, any>;
                            beforeUpdate?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                [key: string]: any;
                            }>, any>;
                            updated?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                [key: string]: any;
                            }>, any>;
                            beforeUnmount?: import("vue").DirectiveHook<any, null, any>;
                            unmounted?: import("vue").DirectiveHook<any, null, any>;
                            getSSRProps?: (binding: import("vue").DirectiveBinding<any>, vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                                [key: string]: any;
                            }>) => {
                                [x: string]: unknown;
                            };
                        };
                    };
                    provides: {
                        [x: string]: any;
                    };
                };
                vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>;
                subTree: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>;
                update: import("vue").ReactiveEffect<any>;
                proxy: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                exposed: {
                    [x: string]: any;
                };
                data: {
                    [x: string]: unknown;
                };
                props: {
                    [x: string]: unknown;
                };
                attrs: {
                    [x: string]: unknown;
                };
                slots: {
                    [x: string]: import("vue").Slot;
                };
                refs: {
                    [x: string]: unknown;
                };
                emit: (event: string, ...args: any[]) => void;
                isMounted: boolean;
                isUnmounted: boolean;
                isDeactivated: boolean;
            };
        };
        clearFocusedItem: (e: any) => any;
        anythingSelected: boolean;
        selectedItems: {
            value: any;
            label: string;
            disabled: boolean;
            component?: {
                uid: number;
                type: import("vue").FunctionalComponent<{}, any> | {
                    [x: string]: any;
                    setup?: (this: void, props: {}, ctx: SetupContext<any>) => any;
                    name?: string;
                    template?: string | (object & {});
                    render?: Function;
                    components?: {
                        [x: string]: import("vue").FunctionalComponent<any, any> | {
                            new (...args: any[]): any;
                            __isFragment?: never;
                            __isTeleport?: never;
                            __isSuspense?: never;
                        } | {
                            [x: string]: any;
                            setup?: (this: void, props: any, ctx: SetupContext<any>) => any;
                            name?: string;
                            template?: string | (object & {});
                            render?: Function;
                            components?: any;
                            directives?: {
                                [x: string]: import("vue").FunctionDirective<any, any> | {
                                    created?: import("vue").DirectiveHook<any, null, any>;
                                    beforeMount?: import("vue").DirectiveHook<any, null, any>;
                                    mounted?: import("vue").DirectiveHook<any, null, any>;
                                    beforeUpdate?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                        [key: string]: any;
                                    }>, any>;
                                    updated?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                        [key: string]: any;
                                    }>, any>;
                                    beforeUnmount?: import("vue").DirectiveHook<any, null, any>;
                                    unmounted?: import("vue").DirectiveHook<any, null, any>;
                                    getSSRProps?: (binding: import("vue").DirectiveBinding<any>, vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                                        [key: string]: any;
                                    }>) => {
                                        [x: string]: unknown;
                                    };
                                };
                            };
                            inheritAttrs?: boolean;
                            emits?: any;
                            expose?: string[];
                            serverPrefetch?: () => Promise<any>;
                            call?: (this: unknown, ...args: unknown[]) => never;
                            __isFragment?: never;
                            __isTeleport?: never;
                            __isSuspense?: never;
                            __defaults?: {};
                            data?: (this: any, vm: any) => any;
                            computed?: {
                                [x: string]: import("@vue/reactivity").ComputedGetter<any> | {
                                    get: import("@vue/reactivity").ComputedGetter<any>;
                                    set: import("@vue/reactivity").ComputedSetter<any>;
                                };
                            };
                            methods?: {
                                [x: string]: Function;
                            };
                            watch?: {
                                [x: string]: string | import("vue").WatchCallback<any, any> | {
                                    handler: string | import("vue").WatchCallback<any, any>;
                                    immediate?: boolean;
                                    deep?: boolean;
                                    flush?: "pre" | "post" | "sync";
                                    onTrack?: (event: import("vue").DebuggerEvent) => void;
                                    onTrigger?: (event: import("vue").DebuggerEvent) => void;
                                } | (string | import("vue").WatchCallback<any, any> | {
                                    handler: string | import("vue").WatchCallback<any, any>;
                                    immediate?: boolean;
                                    deep?: boolean;
                                    flush?: "pre" | "post" | "sync";
                                    onTrack?: (event: import("vue").DebuggerEvent) => void;
                                    onTrigger?: (event: import("vue").DebuggerEvent) => void;
                                })[];
                            };
                            provide?: Function | {
                                [x: string]: unknown;
                            };
                            inject?: string[] | {
                                [x: string]: string | symbol | {
                                    from?: string | symbol;
                                    default?: unknown;
                                };
                            };
                            mixins?: any[];
                            extends?: any;
                            beforeCreate?: () => void;
                            created?: () => void;
                            beforeMount?: () => void;
                            mounted?: () => void;
                            beforeUpdate?: () => void;
                            updated?: () => void;
                            activated?: () => void;
                            deactivated?: () => void;
                            beforeDestroy?: () => void;
                            beforeUnmount?: () => void;
                            destroyed?: () => void;
                            unmounted?: () => void;
                            renderTracked?: (e: import("vue").DebuggerEvent) => void;
                            renderTriggered?: (e: import("vue").DebuggerEvent) => void;
                            errorCaptured?: (err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void;
                            delimiters?: [string, string];
                            __file?: string;
                        };
                    };
                    directives?: {
                        [x: string]: import("vue").FunctionDirective<any, any> | {
                            created?: import("vue").DirectiveHook<any, null, any>;
                            beforeMount?: import("vue").DirectiveHook<any, null, any>;
                            mounted?: import("vue").DirectiveHook<any, null, any>;
                            beforeUpdate?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                [key: string]: any;
                            }>, any>;
                            updated?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                [key: string]: any;
                            }>, any>;
                            beforeUnmount?: import("vue").DirectiveHook<any, null, any>;
                            unmounted?: import("vue").DirectiveHook<any, null, any>;
                            getSSRProps?: (binding: import("vue").DirectiveBinding<any>, vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                                [key: string]: any;
                            }>) => {
                                [x: string]: unknown;
                            };
                        };
                    };
                    inheritAttrs?: boolean;
                    emits?: any;
                    expose?: string[];
                    serverPrefetch?: () => Promise<any>;
                    call?: (this: unknown, ...args: unknown[]) => never;
                    __isFragment?: never;
                    __isTeleport?: never;
                    __isSuspense?: never;
                    __defaults?: {};
                    data?: (this: {
                        $: import("vue").ComponentInternalInstance;
                        $data: {};
                        $props: {};
                        $attrs: {
                            [x: string]: unknown;
                        };
                        $refs: {
                            [x: string]: unknown;
                        };
                        $slots: Readonly<{
                            [name: string]: import("vue").Slot;
                        }>;
                        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                        $emit: (event: string, ...args: any[]) => void;
                        $el: any;
                        $options: import("vue").ComponentOptionsBase<{}, {}, {}, {}, import("vue").MethodOptions, any, any, {}, string, {}>;
                        $forceUpdate: import("vue").ReactiveEffect<any>;
                        $nextTick: typeof import("vue").nextTick;
                        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
                    } & import("vue").ShallowUnwrapRef<{}> & {
                        [x: string]: never;
                    } & import("vue").MethodOptions & import("vue").ComponentCustomProperties, vm: {
                        $: import("vue").ComponentInternalInstance;
                        $data: {};
                        $props: {};
                        $attrs: {
                            [x: string]: unknown;
                        };
                        $refs: {
                            [x: string]: unknown;
                        };
                        $slots: Readonly<{
                            [name: string]: import("vue").Slot;
                        }>;
                        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                        $emit: (event: string, ...args: any[]) => void;
                        $el: any;
                        $options: import("vue").ComponentOptionsBase<{}, {}, {}, {}, import("vue").MethodOptions, any, any, {}, string, {}>;
                        $forceUpdate: import("vue").ReactiveEffect<any>;
                        $nextTick: typeof import("vue").nextTick;
                        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
                    } & import("vue").ShallowUnwrapRef<{}> & {
                        [x: string]: never;
                    } & import("vue").MethodOptions & import("vue").ComponentCustomProperties) => any;
                    computed?: {
                        [x: string]: import("@vue/reactivity").ComputedGetter<any> | {
                            get: import("@vue/reactivity").ComputedGetter<any>;
                            set: import("@vue/reactivity").ComputedSetter<any>;
                        };
                    };
                    methods?: {
                        [x: string]: Function;
                    };
                    watch?: {
                        [x: string]: string | import("vue").WatchCallback<any, any> | {
                            handler: string | import("vue").WatchCallback<any, any>;
                            immediate?: boolean;
                            deep?: boolean;
                            flush?: "pre" | "post" | "sync";
                            onTrack?: (event: import("vue").DebuggerEvent) => void;
                            onTrigger?: (event: import("vue").DebuggerEvent) => void;
                        } | (string | import("vue").WatchCallback<any, any> | {
                            handler: string | import("vue").WatchCallback<any, any>;
                            immediate?: boolean;
                            deep?: boolean;
                            flush?: "pre" | "post" | "sync";
                            onTrack?: (event: import("vue").DebuggerEvent) => void;
                            onTrigger?: (event: import("vue").DebuggerEvent) => void;
                        })[];
                    };
                    provide?: Function | {
                        [x: string]: unknown;
                    };
                    inject?: string[] | {
                        [x: string]: string | symbol | {
                            from?: string | symbol;
                            default?: unknown;
                        };
                    };
                    mixins?: any[];
                    extends?: any;
                    beforeCreate?: () => void;
                    created?: () => void;
                    beforeMount?: () => void;
                    mounted?: () => void;
                    beforeUpdate?: () => void;
                    updated?: () => void;
                    activated?: () => void;
                    deactivated?: () => void;
                    beforeDestroy?: () => void;
                    beforeUnmount?: () => void;
                    destroyed?: () => void;
                    unmounted?: () => void;
                    renderTracked?: (e: import("vue").DebuggerEvent) => void;
                    renderTriggered?: (e: import("vue").DebuggerEvent) => void;
                    errorCaptured?: (err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void;
                    delimiters?: [string, string];
                    __file?: string;
                };
                parent: any;
                root: any;
                appContext: {
                    app: {
                        version: string;
                        config: {
                            readonly isNativeTag?: (tag: string) => boolean;
                            performance: boolean;
                            optionMergeStrategies: {
                                [x: string]: import("vue").OptionMergeFunction;
                            };
                            globalProperties: {
                                [x: string]: any;
                            };
                            isCustomElement: (tag: string) => boolean;
                            errorHandler?: (err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => void;
                            warnHandler?: (msg: string, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, trace: string) => void;
                        };
                        use: (plugin: import("@vue/runtime-core").Plugin, ...options: any[]) => import("vue").App<any>;
                        mixin: (mixin: import("vue").ComponentOptions<{}, any, any, any, any, any, any, any>) => import("vue").App<any>;
                        component: {
                            (name: string): import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
                            (name: string, component: import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>): import("vue").App<any>;
                        };
                        directive: {
                            (name: string): import("vue").Directive<any, any>;
                            (name: string, directive: import("vue").Directive<any, any>): import("vue").App<any>;
                        };
                        mount: (rootContainer: any, isHydrate?: boolean) => import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                        unmount: () => void;
                        provide: <T>(key: string | import("vue").InjectionKey<T>, value: T) => import("vue").App<any>;
                        _uid: number;
                        _component: import("vue").FunctionalComponent<{}, any> | {
                            [x: string]: any;
                            setup?: (this: void, props: {}, ctx: SetupContext<any>) => any;
                            name?: string;
                            template?: string | (object & {});
                            render?: Function;
                            components?: {
                                [x: string]: import("vue").FunctionalComponent<any, any> | {
                                    new (...args: any[]): any;
                                    __isFragment?: never;
                                    __isTeleport?: never;
                                    __isSuspense?: never;
                                } | {
                                    [x: string]: any;
                                    setup?: (this: void, props: any, ctx: SetupContext<any>) => any;
                                    name?: string;
                                    template?: string | (object & {});
                                    render?: Function;
                                    components?: any;
                                    directives?: {
                                        [x: string]: import("vue").FunctionDirective<any, any> | {
                                            created?: import("vue").DirectiveHook<any, null, any>;
                                            beforeMount?: import("vue").DirectiveHook<any, null, any>;
                                            mounted?: import("vue").DirectiveHook<any, null, any>;
                                            beforeUpdate?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                                [key: string]: any;
                                            }>, any>;
                                            updated?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                                [key: string]: any;
                                            }>, any>;
                                            beforeUnmount?: import("vue").DirectiveHook<any, null, any>;
                                            unmounted?: import("vue").DirectiveHook<any, null, any>;
                                            getSSRProps?: (binding: import("vue").DirectiveBinding<any>, vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                                                [key: string]: any;
                                            }>) => {
                                                [x: string]: unknown;
                                            };
                                        };
                                    };
                                    inheritAttrs?: boolean;
                                    emits?: any;
                                    expose?: string[];
                                    serverPrefetch?: () => Promise<any>;
                                    call?: (this: unknown, ...args: unknown[]) => never;
                                    __isFragment?: never;
                                    __isTeleport?: never;
                                    __isSuspense?: never;
                                    __defaults?: {};
                                    data?: (this: any, vm: any) => any;
                                    computed?: {
                                        [x: string]: import("@vue/reactivity").ComputedGetter<any> | {
                                            get: import("@vue/reactivity").ComputedGetter<any>;
                                            set: import("@vue/reactivity").ComputedSetter<any>;
                                        };
                                    };
                                    methods?: {
                                        [x: string]: Function;
                                    };
                                    watch?: {
                                        [x: string]: string | import("vue").WatchCallback<any, any> | {
                                            handler: string | import("vue").WatchCallback<any, any>;
                                            immediate?: boolean;
                                            deep?: boolean;
                                            flush?: "pre" | "post" | "sync";
                                            onTrack?: (event: import("vue").DebuggerEvent) => void;
                                            onTrigger?: (event: import("vue").DebuggerEvent) => void;
                                        } | (string | import("vue").WatchCallback<any, any> | {
                                            handler: string | import("vue").WatchCallback<any, any>;
                                            immediate?: boolean;
                                            deep?: boolean;
                                            flush?: "pre" | "post" | "sync";
                                            onTrack?: (event: import("vue").DebuggerEvent) => void;
                                            onTrigger?: (event: import("vue").DebuggerEvent) => void;
                                        })[];
                                    };
                                    provide?: Function | {
                                        [x: string]: unknown;
                                    };
                                    inject?: string[] | {
                                        [x: string]: string | symbol | {
                                            from?: string | symbol;
                                            default?: unknown;
                                        };
                                    };
                                    mixins?: any[];
                                    extends?: any;
                                    beforeCreate?: () => void;
                                    created?: () => void;
                                    beforeMount?: () => void;
                                    mounted?: () => void;
                                    beforeUpdate?: () => void;
                                    updated?: () => void;
                                    activated?: () => void;
                                    deactivated?: () => void;
                                    beforeDestroy?: () => void;
                                    beforeUnmount?: () => void;
                                    destroyed?: () => void;
                                    unmounted?: () => void;
                                    renderTracked?: (e: import("vue").DebuggerEvent) => void;
                                    renderTriggered?: (e: import("vue").DebuggerEvent) => void;
                                    errorCaptured?: (err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void;
                                    delimiters?: [string, string];
                                    __file?: string;
                                };
                            };
                            directives?: {
                                [x: string]: import("vue").FunctionDirective<any, any> | {
                                    created?: import("vue").DirectiveHook<any, null, any>;
                                    beforeMount?: import("vue").DirectiveHook<any, null, any>;
                                    mounted?: import("vue").DirectiveHook<any, null, any>;
                                    beforeUpdate?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                        [key: string]: any;
                                    }>, any>;
                                    updated?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                        [key: string]: any;
                                    }>, any>;
                                    beforeUnmount?: import("vue").DirectiveHook<any, null, any>;
                                    unmounted?: import("vue").DirectiveHook<any, null, any>;
                                    getSSRProps?: (binding: import("vue").DirectiveBinding<any>, vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                                        [key: string]: any;
                                    }>) => {
                                        [x: string]: unknown;
                                    };
                                };
                            };
                            inheritAttrs?: boolean;
                            emits?: any;
                            expose?: string[];
                            serverPrefetch?: () => Promise<any>;
                            call?: (this: unknown, ...args: unknown[]) => never;
                            __isFragment?: never;
                            __isTeleport?: never;
                            __isSuspense?: never;
                            __defaults?: {};
                            data?: (this: {
                                $: import("vue").ComponentInternalInstance;
                                $data: {};
                                $props: {};
                                $attrs: {
                                    [x: string]: unknown;
                                };
                                $refs: {
                                    [x: string]: unknown;
                                };
                                $slots: Readonly<{
                                    [name: string]: import("vue").Slot;
                                }>;
                                $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                                $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                                $emit: (event: string, ...args: any[]) => void;
                                $el: any;
                                $options: import("vue").ComponentOptionsBase<{}, {}, {}, {}, import("vue").MethodOptions, any, any, {}, string, {}>;
                                $forceUpdate: import("vue").ReactiveEffect<any>;
                                $nextTick: typeof import("vue").nextTick;
                                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
                            } & import("vue").ShallowUnwrapRef<{}> & {
                                [x: string]: never;
                            } & import("vue").MethodOptions & import("vue").ComponentCustomProperties, vm: {
                                $: import("vue").ComponentInternalInstance;
                                $data: {};
                                $props: {};
                                $attrs: {
                                    [x: string]: unknown;
                                };
                                $refs: {
                                    [x: string]: unknown;
                                };
                                $slots: Readonly<{
                                    [name: string]: import("vue").Slot;
                                }>;
                                $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                                $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                                $emit: (event: string, ...args: any[]) => void;
                                $el: any;
                                $options: import("vue").ComponentOptionsBase<{}, {}, {}, {}, import("vue").MethodOptions, any, any, {}, string, {}>;
                                $forceUpdate: import("vue").ReactiveEffect<any>;
                                $nextTick: typeof import("vue").nextTick;
                                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
                            } & import("vue").ShallowUnwrapRef<{}> & {
                                [x: string]: never;
                            } & import("vue").MethodOptions & import("vue").ComponentCustomProperties) => any;
                            computed?: {
                                [x: string]: import("@vue/reactivity").ComputedGetter<any> | {
                                    get: import("@vue/reactivity").ComputedGetter<any>;
                                    set: import("@vue/reactivity").ComputedSetter<any>;
                                };
                            };
                            methods?: {
                                [x: string]: Function;
                            };
                            watch?: {
                                [x: string]: string | import("vue").WatchCallback<any, any> | {
                                    handler: string | import("vue").WatchCallback<any, any>;
                                    immediate?: boolean;
                                    deep?: boolean;
                                    flush?: "pre" | "post" | "sync";
                                    onTrack?: (event: import("vue").DebuggerEvent) => void;
                                    onTrigger?: (event: import("vue").DebuggerEvent) => void;
                                } | (string | import("vue").WatchCallback<any, any> | {
                                    handler: string | import("vue").WatchCallback<any, any>;
                                    immediate?: boolean;
                                    deep?: boolean;
                                    flush?: "pre" | "post" | "sync";
                                    onTrack?: (event: import("vue").DebuggerEvent) => void;
                                    onTrigger?: (event: import("vue").DebuggerEvent) => void;
                                })[];
                            };
                            provide?: Function | {
                                [x: string]: unknown;
                            };
                            inject?: string[] | {
                                [x: string]: string | symbol | {
                                    from?: string | symbol;
                                    default?: unknown;
                                };
                            };
                            mixins?: any[];
                            extends?: any;
                            beforeCreate?: () => void;
                            created?: () => void;
                            beforeMount?: () => void;
                            mounted?: () => void;
                            beforeUpdate?: () => void;
                            updated?: () => void;
                            activated?: () => void;
                            deactivated?: () => void;
                            beforeDestroy?: () => void;
                            beforeUnmount?: () => void;
                            destroyed?: () => void;
                            unmounted?: () => void;
                            renderTracked?: (e: import("vue").DebuggerEvent) => void;
                            renderTriggered?: (e: import("vue").DebuggerEvent) => void;
                            errorCaptured?: (err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void;
                            delimiters?: [string, string];
                            __file?: string;
                        };
                        _props: {
                            [x: string]: unknown;
                        };
                        _container: any;
                        _context: any;
                    };
                    config: {
                        readonly isNativeTag?: (tag: string) => boolean;
                        performance: boolean;
                        optionMergeStrategies: {
                            [x: string]: import("vue").OptionMergeFunction;
                        };
                        globalProperties: {
                            [x: string]: any;
                        };
                        isCustomElement: (tag: string) => boolean;
                        errorHandler?: (err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => void;
                        warnHandler?: (msg: string, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, trace: string) => void;
                    };
                    mixins: {
                        [x: string]: any;
                        setup?: (this: void, props: {}, ctx: SetupContext<any>) => any;
                        name?: string;
                        template?: string | (object & {});
                        render?: Function;
                        components?: {
                            [x: string]: import("vue").FunctionalComponent<any, any> | {
                                new (...args: any[]): any;
                                __isFragment?: never;
                                __isTeleport?: never;
                                __isSuspense?: never;
                            } | {
                                [x: string]: any;
                                setup?: (this: void, props: any, ctx: SetupContext<any>) => any;
                                name?: string;
                                template?: string | (object & {});
                                render?: Function;
                                components?: any;
                                directives?: {
                                    [x: string]: import("vue").FunctionDirective<any, any> | {
                                        created?: import("vue").DirectiveHook<any, null, any>;
                                        beforeMount?: import("vue").DirectiveHook<any, null, any>;
                                        mounted?: import("vue").DirectiveHook<any, null, any>;
                                        beforeUpdate?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                            [key: string]: any;
                                        }>, any>;
                                        updated?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                            [key: string]: any;
                                        }>, any>;
                                        beforeUnmount?: import("vue").DirectiveHook<any, null, any>;
                                        unmounted?: import("vue").DirectiveHook<any, null, any>;
                                        getSSRProps?: (binding: import("vue").DirectiveBinding<any>, vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                                            [key: string]: any;
                                        }>) => {
                                            [x: string]: unknown;
                                        };
                                    };
                                };
                                inheritAttrs?: boolean;
                                emits?: any;
                                expose?: string[];
                                serverPrefetch?: () => Promise<any>;
                                call?: (this: unknown, ...args: unknown[]) => never;
                                __isFragment?: never;
                                __isTeleport?: never;
                                __isSuspense?: never;
                                __defaults?: {};
                                data?: (this: any, vm: any) => any;
                                computed?: {
                                    [x: string]: import("@vue/reactivity").ComputedGetter<any> | {
                                        get: import("@vue/reactivity").ComputedGetter<any>;
                                        set: import("@vue/reactivity").ComputedSetter<any>;
                                    };
                                };
                                methods?: {
                                    [x: string]: Function;
                                };
                                watch?: {
                                    [x: string]: string | import("vue").WatchCallback<any, any> | {
                                        handler: string | import("vue").WatchCallback<any, any>;
                                        immediate?: boolean;
                                        deep?: boolean;
                                        flush?: "pre" | "post" | "sync";
                                        onTrack?: (event: import("vue").DebuggerEvent) => void;
                                        onTrigger?: (event: import("vue").DebuggerEvent) => void;
                                    } | (string | import("vue").WatchCallback<any, any> | {
                                        handler: string | import("vue").WatchCallback<any, any>;
                                        immediate?: boolean;
                                        deep?: boolean;
                                        flush?: "pre" | "post" | "sync";
                                        onTrack?: (event: import("vue").DebuggerEvent) => void;
                                        onTrigger?: (event: import("vue").DebuggerEvent) => void;
                                    })[];
                                };
                                provide?: Function | {
                                    [x: string]: unknown;
                                };
                                inject?: string[] | {
                                    [x: string]: string | symbol | {
                                        from?: string | symbol;
                                        default?: unknown;
                                    };
                                };
                                mixins?: any[];
                                extends?: any;
                                beforeCreate?: () => void;
                                created?: () => void;
                                beforeMount?: () => void;
                                mounted?: () => void;
                                beforeUpdate?: () => void;
                                updated?: () => void;
                                activated?: () => void;
                                deactivated?: () => void;
                                beforeDestroy?: () => void;
                                beforeUnmount?: () => void;
                                destroyed?: () => void;
                                unmounted?: () => void;
                                renderTracked?: (e: import("vue").DebuggerEvent) => void;
                                renderTriggered?: (e: import("vue").DebuggerEvent) => void;
                                errorCaptured?: (err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void;
                                delimiters?: [string, string];
                                __file?: string;
                            };
                        };
                        directives?: {
                            [x: string]: import("vue").FunctionDirective<any, any> | {
                                created?: import("vue").DirectiveHook<any, null, any>;
                                beforeMount?: import("vue").DirectiveHook<any, null, any>;
                                mounted?: import("vue").DirectiveHook<any, null, any>;
                                beforeUpdate?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                    [key: string]: any;
                                }>, any>;
                                updated?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                    [key: string]: any;
                                }>, any>;
                                beforeUnmount?: import("vue").DirectiveHook<any, null, any>;
                                unmounted?: import("vue").DirectiveHook<any, null, any>;
                                getSSRProps?: (binding: import("vue").DirectiveBinding<any>, vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                                    [key: string]: any;
                                }>) => {
                                    [x: string]: unknown;
                                };
                            };
                        };
                        inheritAttrs?: boolean;
                        emits?: any;
                        expose?: string[];
                        serverPrefetch?: () => Promise<any>;
                        call?: (this: unknown, ...args: unknown[]) => never;
                        __isFragment?: never;
                        __isTeleport?: never;
                        __isSuspense?: never;
                        __defaults?: {};
                        data?: (this: {
                            $: import("vue").ComponentInternalInstance;
                            $data: {};
                            $props: {};
                            $attrs: {
                                [x: string]: unknown;
                            };
                            $refs: {
                                [x: string]: unknown;
                            };
                            $slots: Readonly<{
                                [name: string]: import("vue").Slot;
                            }>;
                            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                            $emit: (event: string, ...args: any[]) => void;
                            $el: any;
                            $options: import("vue").ComponentOptionsBase<{}, {}, {}, {}, import("vue").MethodOptions, any, any, {}, string, {}>;
                            $forceUpdate: import("vue").ReactiveEffect<any>;
                            $nextTick: typeof import("vue").nextTick;
                            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
                        } & import("vue").ShallowUnwrapRef<{}> & {
                            [x: string]: never;
                        } & import("vue").MethodOptions & import("vue").ComponentCustomProperties, vm: {
                            $: import("vue").ComponentInternalInstance;
                            $data: {};
                            $props: {};
                            $attrs: {
                                [x: string]: unknown;
                            };
                            $refs: {
                                [x: string]: unknown;
                            };
                            $slots: Readonly<{
                                [name: string]: import("vue").Slot;
                            }>;
                            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                            $emit: (event: string, ...args: any[]) => void;
                            $el: any;
                            $options: import("vue").ComponentOptionsBase<{}, {}, {}, {}, import("vue").MethodOptions, any, any, {}, string, {}>;
                            $forceUpdate: import("vue").ReactiveEffect<any>;
                            $nextTick: typeof import("vue").nextTick;
                            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
                        } & import("vue").ShallowUnwrapRef<{}> & {
                            [x: string]: never;
                        } & import("vue").MethodOptions & import("vue").ComponentCustomProperties) => any;
                        computed?: any;
                        methods?: any;
                        watch?: {
                            [x: string]: string | import("vue").WatchCallback<any, any> | {
                                handler: string | import("vue").WatchCallback<any, any>;
                                immediate?: boolean;
                                deep?: boolean;
                                flush?: "pre" | "post" | "sync";
                                onTrack?: (event: import("vue").DebuggerEvent) => void;
                                onTrigger?: (event: import("vue").DebuggerEvent) => void;
                            } | (string | import("vue").WatchCallback<any, any> | {
                                handler: string | import("vue").WatchCallback<any, any>;
                                immediate?: boolean;
                                deep?: boolean;
                                flush?: "pre" | "post" | "sync";
                                onTrack?: (event: import("vue").DebuggerEvent) => void;
                                onTrigger?: (event: import("vue").DebuggerEvent) => void;
                            })[];
                        };
                        provide?: Function | {
                            [x: string]: unknown;
                        };
                        inject?: string[] | {
                            [x: string]: string | symbol | {
                                from?: string | symbol;
                                default?: unknown;
                            };
                        };
                        mixins?: any[];
                        extends?: any;
                        beforeCreate?: () => void;
                        created?: () => void;
                        beforeMount?: () => void;
                        mounted?: () => void;
                        beforeUpdate?: () => void;
                        updated?: () => void;
                        activated?: () => void;
                        deactivated?: () => void;
                        beforeDestroy?: () => void;
                        beforeUnmount?: () => void;
                        destroyed?: () => void;
                        unmounted?: () => void;
                        renderTracked?: (e: import("vue").DebuggerEvent) => void;
                        renderTriggered?: (e: import("vue").DebuggerEvent) => void;
                        errorCaptured?: (err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void;
                        delimiters?: [string, string];
                        __file?: string;
                    }[];
                    components: {
                        [x: string]: import("vue").FunctionalComponent<any, any> | {
                            new (...args: any[]): any;
                            __isFragment?: never;
                            __isTeleport?: never;
                            __isSuspense?: never;
                        } | {
                            [x: string]: any;
                            setup?: (this: void, props: any, ctx: SetupContext<any>) => any;
                            name?: string;
                            template?: string | (object & {});
                            render?: Function;
                            components?: any;
                            directives?: {
                                [x: string]: import("vue").FunctionDirective<any, any> | {
                                    created?: import("vue").DirectiveHook<any, null, any>;
                                    beforeMount?: import("vue").DirectiveHook<any, null, any>;
                                    mounted?: import("vue").DirectiveHook<any, null, any>;
                                    beforeUpdate?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                        [key: string]: any;
                                    }>, any>;
                                    updated?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                        [key: string]: any;
                                    }>, any>;
                                    beforeUnmount?: import("vue").DirectiveHook<any, null, any>;
                                    unmounted?: import("vue").DirectiveHook<any, null, any>;
                                    getSSRProps?: (binding: import("vue").DirectiveBinding<any>, vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                                        [key: string]: any;
                                    }>) => {
                                        [x: string]: unknown;
                                    };
                                };
                            };
                            inheritAttrs?: boolean;
                            emits?: any;
                            expose?: string[];
                            serverPrefetch?: () => Promise<any>;
                            call?: (this: unknown, ...args: unknown[]) => never;
                            __isFragment?: never;
                            __isTeleport?: never;
                            __isSuspense?: never;
                            __defaults?: {};
                            data?: (this: any, vm: any) => any;
                            computed?: {
                                [x: string]: import("@vue/reactivity").ComputedGetter<any> | {
                                    get: import("@vue/reactivity").ComputedGetter<any>;
                                    set: import("@vue/reactivity").ComputedSetter<any>;
                                };
                            };
                            methods?: {
                                [x: string]: Function;
                            };
                            watch?: {
                                [x: string]: string | import("vue").WatchCallback<any, any> | {
                                    handler: string | import("vue").WatchCallback<any, any>;
                                    immediate?: boolean;
                                    deep?: boolean;
                                    flush?: "pre" | "post" | "sync";
                                    onTrack?: (event: import("vue").DebuggerEvent) => void;
                                    onTrigger?: (event: import("vue").DebuggerEvent) => void;
                                } | (string | import("vue").WatchCallback<any, any> | {
                                    handler: string | import("vue").WatchCallback<any, any>;
                                    immediate?: boolean;
                                    deep?: boolean;
                                    flush?: "pre" | "post" | "sync";
                                    onTrack?: (event: import("vue").DebuggerEvent) => void;
                                    onTrigger?: (event: import("vue").DebuggerEvent) => void;
                                })[];
                            };
                            provide?: Function | {
                                [x: string]: unknown;
                            };
                            inject?: string[] | {
                                [x: string]: string | symbol | {
                                    from?: string | symbol;
                                    default?: unknown;
                                };
                            };
                            mixins?: any[];
                            extends?: any;
                            beforeCreate?: () => void;
                            created?: () => void;
                            beforeMount?: () => void;
                            mounted?: () => void;
                            beforeUpdate?: () => void;
                            updated?: () => void;
                            activated?: () => void;
                            deactivated?: () => void;
                            beforeDestroy?: () => void;
                            beforeUnmount?: () => void;
                            destroyed?: () => void;
                            unmounted?: () => void;
                            renderTracked?: (e: import("vue").DebuggerEvent) => void;
                            renderTriggered?: (e: import("vue").DebuggerEvent) => void;
                            errorCaptured?: (err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void;
                            delimiters?: [string, string];
                            __file?: string;
                        };
                    };
                    directives: {
                        [x: string]: import("vue").FunctionDirective<any, any> | {
                            created?: import("vue").DirectiveHook<any, null, any>;
                            beforeMount?: import("vue").DirectiveHook<any, null, any>;
                            mounted?: import("vue").DirectiveHook<any, null, any>;
                            beforeUpdate?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                [key: string]: any;
                            }>, any>;
                            updated?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                [key: string]: any;
                            }>, any>;
                            beforeUnmount?: import("vue").DirectiveHook<any, null, any>;
                            unmounted?: import("vue").DirectiveHook<any, null, any>;
                            getSSRProps?: (binding: import("vue").DirectiveBinding<any>, vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                                [key: string]: any;
                            }>) => {
                                [x: string]: unknown;
                            };
                        };
                    };
                    provides: {
                        [x: string]: any;
                    };
                };
                vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>;
                subTree: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }>;
                update: import("vue").ReactiveEffect<any>;
                proxy: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                exposed: {
                    [x: string]: any;
                };
                data: {
                    [x: string]: unknown;
                };
                props: {
                    [x: string]: unknown;
                };
                attrs: {
                    [x: string]: unknown;
                };
                slots: {
                    [x: string]: import("vue").Slot;
                };
                refs: {
                    [x: string]: unknown;
                };
                emit: (event: string, ...args: any[]) => void;
                isMounted: boolean;
                isUnmounted: boolean;
                isDeactivated: boolean;
            };
        }[];
        selectedText: string;
        clearValue: (e: any) => any;
        close: (e: any) => any;
        onButtonClick: (e: any) => any;
        onItemClick: (e: any) => any;
        onKeyEvents: (e: any) => any;
        onMenuTransitioning: (state: boolean) => void;
    };
    defaultRender: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    items: import("vue").Ref<{
        value: any;
        label: string;
        disabled: boolean;
        component?: {
            uid: number;
            type: import("vue").FunctionalComponent<{}, any> | {
                [x: string]: any;
                setup?: (this: void, props: {}, ctx: SetupContext<any>) => any;
                name?: string;
                template?: string | (object & {});
                render?: Function;
                components?: {
                    [x: string]: import("vue").FunctionalComponent<any, any> | {
                        new (...args: any[]): any;
                        __isFragment?: never;
                        __isTeleport?: never;
                        __isSuspense?: never;
                    } | {
                        [x: string]: any;
                        setup?: (this: void, props: any, ctx: SetupContext<any>) => any;
                        name?: string;
                        template?: string | (object & {});
                        render?: Function;
                        components?: any;
                        directives?: {
                            [x: string]: import("vue").FunctionDirective<any, any> | {
                                created?: import("vue").DirectiveHook<any, null, any>;
                                beforeMount?: import("vue").DirectiveHook<any, null, any>;
                                mounted?: import("vue").DirectiveHook<any, null, any>;
                                beforeUpdate?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                    [key: string]: any;
                                }>, any>;
                                updated?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                    [key: string]: any;
                                }>, any>;
                                beforeUnmount?: import("vue").DirectiveHook<any, null, any>;
                                unmounted?: import("vue").DirectiveHook<any, null, any>;
                                getSSRProps?: (binding: import("vue").DirectiveBinding<any>, vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                                    [key: string]: any;
                                }>) => {
                                    [x: string]: unknown;
                                };
                            };
                        };
                        inheritAttrs?: boolean;
                        emits?: any;
                        expose?: string[];
                        serverPrefetch?: () => Promise<any>;
                        call?: (this: unknown, ...args: unknown[]) => never;
                        __isFragment?: never;
                        __isTeleport?: never;
                        __isSuspense?: never;
                        __defaults?: {};
                        data?: (this: any, vm: any) => any;
                        computed?: {
                            [x: string]: import("@vue/reactivity").ComputedGetter<any> | {
                                get: import("@vue/reactivity").ComputedGetter<any>;
                                set: import("@vue/reactivity").ComputedSetter<any>;
                            };
                        };
                        methods?: {
                            [x: string]: Function;
                        };
                        watch?: {
                            [x: string]: string | import("vue").WatchCallback<any, any> | {
                                handler: string | import("vue").WatchCallback<any, any>;
                                immediate?: boolean;
                                deep?: boolean;
                                flush?: "pre" | "post" | "sync";
                                onTrack?: (event: import("vue").DebuggerEvent) => void;
                                onTrigger?: (event: import("vue").DebuggerEvent) => void;
                            } | (string | import("vue").WatchCallback<any, any> | {
                                handler: string | import("vue").WatchCallback<any, any>;
                                immediate?: boolean;
                                deep?: boolean;
                                flush?: "pre" | "post" | "sync";
                                onTrack?: (event: import("vue").DebuggerEvent) => void;
                                onTrigger?: (event: import("vue").DebuggerEvent) => void;
                            })[];
                        };
                        provide?: Function | {
                            [x: string]: unknown;
                        };
                        inject?: string[] | {
                            [x: string]: string | symbol | {
                                from?: string | symbol;
                                default?: unknown;
                            };
                        };
                        mixins?: any[];
                        extends?: any;
                        beforeCreate?: () => void;
                        created?: () => void;
                        beforeMount?: () => void;
                        mounted?: () => void;
                        beforeUpdate?: () => void;
                        updated?: () => void;
                        activated?: () => void;
                        deactivated?: () => void;
                        beforeDestroy?: () => void;
                        beforeUnmount?: () => void;
                        destroyed?: () => void;
                        unmounted?: () => void;
                        renderTracked?: (e: import("vue").DebuggerEvent) => void;
                        renderTriggered?: (e: import("vue").DebuggerEvent) => void;
                        errorCaptured?: (err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void;
                        delimiters?: [string, string];
                        __file?: string;
                    };
                };
                directives?: {
                    [x: string]: import("vue").FunctionDirective<any, any> | {
                        created?: import("vue").DirectiveHook<any, null, any>;
                        beforeMount?: import("vue").DirectiveHook<any, null, any>;
                        mounted?: import("vue").DirectiveHook<any, null, any>;
                        beforeUpdate?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                            [key: string]: any;
                        }>, any>;
                        updated?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                            [key: string]: any;
                        }>, any>;
                        beforeUnmount?: import("vue").DirectiveHook<any, null, any>;
                        unmounted?: import("vue").DirectiveHook<any, null, any>;
                        getSSRProps?: (binding: import("vue").DirectiveBinding<any>, vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                            [key: string]: any;
                        }>) => {
                            [x: string]: unknown;
                        };
                    };
                };
                inheritAttrs?: boolean;
                emits?: any;
                expose?: string[];
                serverPrefetch?: () => Promise<any>;
                call?: (this: unknown, ...args: unknown[]) => never;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
                __defaults?: {};
                data?: (this: {
                    $: import("vue").ComponentInternalInstance;
                    $data: {};
                    $props: {};
                    $attrs: {
                        [x: string]: unknown;
                    };
                    $refs: {
                        [x: string]: unknown;
                    };
                    $slots: Readonly<{
                        [name: string]: import("vue").Slot;
                    }>;
                    $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                    $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                    $emit: (event: string, ...args: any[]) => void;
                    $el: any;
                    $options: import("vue").ComponentOptionsBase<{}, {}, {}, {}, import("vue").MethodOptions, any, any, {}, string, {}>;
                    $forceUpdate: import("vue").ReactiveEffect<any>;
                    $nextTick: typeof import("vue").nextTick;
                    $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
                } & import("vue").ShallowUnwrapRef<{}> & {
                    [x: string]: never;
                } & import("vue").MethodOptions & import("vue").ComponentCustomProperties, vm: {
                    $: import("vue").ComponentInternalInstance;
                    $data: {};
                    $props: {};
                    $attrs: {
                        [x: string]: unknown;
                    };
                    $refs: {
                        [x: string]: unknown;
                    };
                    $slots: Readonly<{
                        [name: string]: import("vue").Slot;
                    }>;
                    $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                    $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                    $emit: (event: string, ...args: any[]) => void;
                    $el: any;
                    $options: import("vue").ComponentOptionsBase<{}, {}, {}, {}, import("vue").MethodOptions, any, any, {}, string, {}>;
                    $forceUpdate: import("vue").ReactiveEffect<any>;
                    $nextTick: typeof import("vue").nextTick;
                    $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
                } & import("vue").ShallowUnwrapRef<{}> & {
                    [x: string]: never;
                } & import("vue").MethodOptions & import("vue").ComponentCustomProperties) => any;
                computed?: {
                    [x: string]: import("@vue/reactivity").ComputedGetter<any> | {
                        get: import("@vue/reactivity").ComputedGetter<any>;
                        set: import("@vue/reactivity").ComputedSetter<any>;
                    };
                };
                methods?: {
                    [x: string]: Function;
                };
                watch?: {
                    [x: string]: string | import("vue").WatchCallback<any, any> | {
                        handler: string | import("vue").WatchCallback<any, any>;
                        immediate?: boolean;
                        deep?: boolean;
                        flush?: "pre" | "post" | "sync";
                        onTrack?: (event: import("vue").DebuggerEvent) => void;
                        onTrigger?: (event: import("vue").DebuggerEvent) => void;
                    } | (string | import("vue").WatchCallback<any, any> | {
                        handler: string | import("vue").WatchCallback<any, any>;
                        immediate?: boolean;
                        deep?: boolean;
                        flush?: "pre" | "post" | "sync";
                        onTrack?: (event: import("vue").DebuggerEvent) => void;
                        onTrigger?: (event: import("vue").DebuggerEvent) => void;
                    })[];
                };
                provide?: Function | {
                    [x: string]: unknown;
                };
                inject?: string[] | {
                    [x: string]: string | symbol | {
                        from?: string | symbol;
                        default?: unknown;
                    };
                };
                mixins?: any[];
                extends?: any;
                beforeCreate?: () => void;
                created?: () => void;
                beforeMount?: () => void;
                mounted?: () => void;
                beforeUpdate?: () => void;
                updated?: () => void;
                activated?: () => void;
                deactivated?: () => void;
                beforeDestroy?: () => void;
                beforeUnmount?: () => void;
                destroyed?: () => void;
                unmounted?: () => void;
                renderTracked?: (e: import("vue").DebuggerEvent) => void;
                renderTriggered?: (e: import("vue").DebuggerEvent) => void;
                errorCaptured?: (err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void;
                delimiters?: [string, string];
                __file?: string;
            };
            parent: any;
            root: any;
            appContext: {
                app: {
                    version: string;
                    config: {
                        readonly isNativeTag?: (tag: string) => boolean;
                        performance: boolean;
                        optionMergeStrategies: {
                            [x: string]: import("vue").OptionMergeFunction;
                        };
                        globalProperties: {
                            [x: string]: any;
                        };
                        isCustomElement: (tag: string) => boolean;
                        errorHandler?: (err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => void;
                        warnHandler?: (msg: string, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, trace: string) => void;
                    };
                    use: (plugin: import("@vue/runtime-core").Plugin, ...options: any[]) => import("vue").App<any>;
                    mixin: (mixin: import("vue").ComponentOptions<{}, any, any, any, any, any, any, any>) => import("vue").App<any>;
                    component: {
                        (name: string): import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
                        (name: string, component: import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>): import("vue").App<any>;
                    };
                    directive: {
                        (name: string): import("vue").Directive<any, any>;
                        (name: string, directive: import("vue").Directive<any, any>): import("vue").App<any>;
                    };
                    mount: (rootContainer: any, isHydrate?: boolean) => import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                    unmount: () => void;
                    provide: <T>(key: string | import("vue").InjectionKey<T>, value: T) => import("vue").App<any>;
                    _uid: number;
                    _component: import("vue").FunctionalComponent<{}, any> | {
                        [x: string]: any;
                        setup?: (this: void, props: {}, ctx: SetupContext<any>) => any;
                        name?: string;
                        template?: string | (object & {});
                        render?: Function;
                        components?: {
                            [x: string]: import("vue").FunctionalComponent<any, any> | {
                                new (...args: any[]): any;
                                __isFragment?: never;
                                __isTeleport?: never;
                                __isSuspense?: never;
                            } | {
                                [x: string]: any;
                                setup?: (this: void, props: any, ctx: SetupContext<any>) => any;
                                name?: string;
                                template?: string | (object & {});
                                render?: Function;
                                components?: any;
                                directives?: {
                                    [x: string]: import("vue").FunctionDirective<any, any> | {
                                        created?: import("vue").DirectiveHook<any, null, any>;
                                        beforeMount?: import("vue").DirectiveHook<any, null, any>;
                                        mounted?: import("vue").DirectiveHook<any, null, any>;
                                        beforeUpdate?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                            [key: string]: any;
                                        }>, any>;
                                        updated?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                            [key: string]: any;
                                        }>, any>;
                                        beforeUnmount?: import("vue").DirectiveHook<any, null, any>;
                                        unmounted?: import("vue").DirectiveHook<any, null, any>;
                                        getSSRProps?: (binding: import("vue").DirectiveBinding<any>, vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                                            [key: string]: any;
                                        }>) => {
                                            [x: string]: unknown;
                                        };
                                    };
                                };
                                inheritAttrs?: boolean;
                                emits?: any;
                                expose?: string[];
                                serverPrefetch?: () => Promise<any>;
                                call?: (this: unknown, ...args: unknown[]) => never;
                                __isFragment?: never;
                                __isTeleport?: never;
                                __isSuspense?: never;
                                __defaults?: {};
                                data?: (this: any, vm: any) => any;
                                computed?: {
                                    [x: string]: import("@vue/reactivity").ComputedGetter<any> | {
                                        get: import("@vue/reactivity").ComputedGetter<any>;
                                        set: import("@vue/reactivity").ComputedSetter<any>;
                                    };
                                };
                                methods?: {
                                    [x: string]: Function;
                                };
                                watch?: {
                                    [x: string]: string | import("vue").WatchCallback<any, any> | {
                                        handler: string | import("vue").WatchCallback<any, any>;
                                        immediate?: boolean;
                                        deep?: boolean;
                                        flush?: "pre" | "post" | "sync";
                                        onTrack?: (event: import("vue").DebuggerEvent) => void;
                                        onTrigger?: (event: import("vue").DebuggerEvent) => void;
                                    } | (string | import("vue").WatchCallback<any, any> | {
                                        handler: string | import("vue").WatchCallback<any, any>;
                                        immediate?: boolean;
                                        deep?: boolean;
                                        flush?: "pre" | "post" | "sync";
                                        onTrack?: (event: import("vue").DebuggerEvent) => void;
                                        onTrigger?: (event: import("vue").DebuggerEvent) => void;
                                    })[];
                                };
                                provide?: Function | {
                                    [x: string]: unknown;
                                };
                                inject?: string[] | {
                                    [x: string]: string | symbol | {
                                        from?: string | symbol;
                                        default?: unknown;
                                    };
                                };
                                mixins?: any[];
                                extends?: any;
                                beforeCreate?: () => void;
                                created?: () => void;
                                beforeMount?: () => void;
                                mounted?: () => void;
                                beforeUpdate?: () => void;
                                updated?: () => void;
                                activated?: () => void;
                                deactivated?: () => void;
                                beforeDestroy?: () => void;
                                beforeUnmount?: () => void;
                                destroyed?: () => void;
                                unmounted?: () => void;
                                renderTracked?: (e: import("vue").DebuggerEvent) => void;
                                renderTriggered?: (e: import("vue").DebuggerEvent) => void;
                                errorCaptured?: (err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void;
                                delimiters?: [string, string];
                                __file?: string;
                            };
                        };
                        directives?: {
                            [x: string]: import("vue").FunctionDirective<any, any> | {
                                created?: import("vue").DirectiveHook<any, null, any>;
                                beforeMount?: import("vue").DirectiveHook<any, null, any>;
                                mounted?: import("vue").DirectiveHook<any, null, any>;
                                beforeUpdate?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                    [key: string]: any;
                                }>, any>;
                                updated?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                    [key: string]: any;
                                }>, any>;
                                beforeUnmount?: import("vue").DirectiveHook<any, null, any>;
                                unmounted?: import("vue").DirectiveHook<any, null, any>;
                                getSSRProps?: (binding: import("vue").DirectiveBinding<any>, vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                                    [key: string]: any;
                                }>) => {
                                    [x: string]: unknown;
                                };
                            };
                        };
                        inheritAttrs?: boolean;
                        emits?: any;
                        expose?: string[];
                        serverPrefetch?: () => Promise<any>;
                        call?: (this: unknown, ...args: unknown[]) => never;
                        __isFragment?: never;
                        __isTeleport?: never;
                        __isSuspense?: never;
                        __defaults?: {};
                        data?: (this: {
                            $: import("vue").ComponentInternalInstance;
                            $data: {};
                            $props: {};
                            $attrs: {
                                [x: string]: unknown;
                            };
                            $refs: {
                                [x: string]: unknown;
                            };
                            $slots: Readonly<{
                                [name: string]: import("vue").Slot;
                            }>;
                            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                            $emit: (event: string, ...args: any[]) => void;
                            $el: any;
                            $options: import("vue").ComponentOptionsBase<{}, {}, {}, {}, import("vue").MethodOptions, any, any, {}, string, {}>;
                            $forceUpdate: import("vue").ReactiveEffect<any>;
                            $nextTick: typeof import("vue").nextTick;
                            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
                        } & import("vue").ShallowUnwrapRef<{}> & {
                            [x: string]: never;
                        } & import("vue").MethodOptions & import("vue").ComponentCustomProperties, vm: {
                            $: import("vue").ComponentInternalInstance;
                            $data: {};
                            $props: {};
                            $attrs: {
                                [x: string]: unknown;
                            };
                            $refs: {
                                [x: string]: unknown;
                            };
                            $slots: Readonly<{
                                [name: string]: import("vue").Slot;
                            }>;
                            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                            $emit: (event: string, ...args: any[]) => void;
                            $el: any;
                            $options: import("vue").ComponentOptionsBase<{}, {}, {}, {}, import("vue").MethodOptions, any, any, {}, string, {}>;
                            $forceUpdate: import("vue").ReactiveEffect<any>;
                            $nextTick: typeof import("vue").nextTick;
                            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
                        } & import("vue").ShallowUnwrapRef<{}> & {
                            [x: string]: never;
                        } & import("vue").MethodOptions & import("vue").ComponentCustomProperties) => any;
                        computed?: {
                            [x: string]: import("@vue/reactivity").ComputedGetter<any> | {
                                get: import("@vue/reactivity").ComputedGetter<any>;
                                set: import("@vue/reactivity").ComputedSetter<any>;
                            };
                        };
                        methods?: {
                            [x: string]: Function;
                        };
                        watch?: {
                            [x: string]: string | import("vue").WatchCallback<any, any> | {
                                handler: string | import("vue").WatchCallback<any, any>;
                                immediate?: boolean;
                                deep?: boolean;
                                flush?: "pre" | "post" | "sync";
                                onTrack?: (event: import("vue").DebuggerEvent) => void;
                                onTrigger?: (event: import("vue").DebuggerEvent) => void;
                            } | (string | import("vue").WatchCallback<any, any> | {
                                handler: string | import("vue").WatchCallback<any, any>;
                                immediate?: boolean;
                                deep?: boolean;
                                flush?: "pre" | "post" | "sync";
                                onTrack?: (event: import("vue").DebuggerEvent) => void;
                                onTrigger?: (event: import("vue").DebuggerEvent) => void;
                            })[];
                        };
                        provide?: Function | {
                            [x: string]: unknown;
                        };
                        inject?: string[] | {
                            [x: string]: string | symbol | {
                                from?: string | symbol;
                                default?: unknown;
                            };
                        };
                        mixins?: any[];
                        extends?: any;
                        beforeCreate?: () => void;
                        created?: () => void;
                        beforeMount?: () => void;
                        mounted?: () => void;
                        beforeUpdate?: () => void;
                        updated?: () => void;
                        activated?: () => void;
                        deactivated?: () => void;
                        beforeDestroy?: () => void;
                        beforeUnmount?: () => void;
                        destroyed?: () => void;
                        unmounted?: () => void;
                        renderTracked?: (e: import("vue").DebuggerEvent) => void;
                        renderTriggered?: (e: import("vue").DebuggerEvent) => void;
                        errorCaptured?: (err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void;
                        delimiters?: [string, string];
                        __file?: string;
                    };
                    _props: {
                        [x: string]: unknown;
                    };
                    _container: any;
                    _context: any;
                };
                config: {
                    readonly isNativeTag?: (tag: string) => boolean;
                    performance: boolean;
                    optionMergeStrategies: {
                        [x: string]: import("vue").OptionMergeFunction;
                    };
                    globalProperties: {
                        [x: string]: any;
                    };
                    isCustomElement: (tag: string) => boolean;
                    errorHandler?: (err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => void;
                    warnHandler?: (msg: string, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, trace: string) => void;
                };
                mixins: {
                    [x: string]: any;
                    setup?: (this: void, props: {}, ctx: SetupContext<any>) => any;
                    name?: string;
                    template?: string | (object & {});
                    render?: Function;
                    components?: {
                        [x: string]: import("vue").FunctionalComponent<any, any> | {
                            new (...args: any[]): any;
                            __isFragment?: never;
                            __isTeleport?: never;
                            __isSuspense?: never;
                        } | {
                            [x: string]: any;
                            setup?: (this: void, props: any, ctx: SetupContext<any>) => any;
                            name?: string;
                            template?: string | (object & {});
                            render?: Function;
                            components?: any;
                            directives?: {
                                [x: string]: import("vue").FunctionDirective<any, any> | {
                                    created?: import("vue").DirectiveHook<any, null, any>;
                                    beforeMount?: import("vue").DirectiveHook<any, null, any>;
                                    mounted?: import("vue").DirectiveHook<any, null, any>;
                                    beforeUpdate?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                        [key: string]: any;
                                    }>, any>;
                                    updated?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                        [key: string]: any;
                                    }>, any>;
                                    beforeUnmount?: import("vue").DirectiveHook<any, null, any>;
                                    unmounted?: import("vue").DirectiveHook<any, null, any>;
                                    getSSRProps?: (binding: import("vue").DirectiveBinding<any>, vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                                        [key: string]: any;
                                    }>) => {
                                        [x: string]: unknown;
                                    };
                                };
                            };
                            inheritAttrs?: boolean;
                            emits?: any;
                            expose?: string[];
                            serverPrefetch?: () => Promise<any>;
                            call?: (this: unknown, ...args: unknown[]) => never;
                            __isFragment?: never;
                            __isTeleport?: never;
                            __isSuspense?: never;
                            __defaults?: {};
                            data?: (this: any, vm: any) => any;
                            computed?: {
                                [x: string]: import("@vue/reactivity").ComputedGetter<any> | {
                                    get: import("@vue/reactivity").ComputedGetter<any>;
                                    set: import("@vue/reactivity").ComputedSetter<any>;
                                };
                            };
                            methods?: {
                                [x: string]: Function;
                            };
                            watch?: {
                                [x: string]: string | import("vue").WatchCallback<any, any> | {
                                    handler: string | import("vue").WatchCallback<any, any>;
                                    immediate?: boolean;
                                    deep?: boolean;
                                    flush?: "pre" | "post" | "sync";
                                    onTrack?: (event: import("vue").DebuggerEvent) => void;
                                    onTrigger?: (event: import("vue").DebuggerEvent) => void;
                                } | (string | import("vue").WatchCallback<any, any> | {
                                    handler: string | import("vue").WatchCallback<any, any>;
                                    immediate?: boolean;
                                    deep?: boolean;
                                    flush?: "pre" | "post" | "sync";
                                    onTrack?: (event: import("vue").DebuggerEvent) => void;
                                    onTrigger?: (event: import("vue").DebuggerEvent) => void;
                                })[];
                            };
                            provide?: Function | {
                                [x: string]: unknown;
                            };
                            inject?: string[] | {
                                [x: string]: string | symbol | {
                                    from?: string | symbol;
                                    default?: unknown;
                                };
                            };
                            mixins?: any[];
                            extends?: any;
                            beforeCreate?: () => void;
                            created?: () => void;
                            beforeMount?: () => void;
                            mounted?: () => void;
                            beforeUpdate?: () => void;
                            updated?: () => void;
                            activated?: () => void;
                            deactivated?: () => void;
                            beforeDestroy?: () => void;
                            beforeUnmount?: () => void;
                            destroyed?: () => void;
                            unmounted?: () => void;
                            renderTracked?: (e: import("vue").DebuggerEvent) => void;
                            renderTriggered?: (e: import("vue").DebuggerEvent) => void;
                            errorCaptured?: (err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void;
                            delimiters?: [string, string];
                            __file?: string;
                        };
                    };
                    directives?: {
                        [x: string]: import("vue").FunctionDirective<any, any> | {
                            created?: import("vue").DirectiveHook<any, null, any>;
                            beforeMount?: import("vue").DirectiveHook<any, null, any>;
                            mounted?: import("vue").DirectiveHook<any, null, any>;
                            beforeUpdate?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                [key: string]: any;
                            }>, any>;
                            updated?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                [key: string]: any;
                            }>, any>;
                            beforeUnmount?: import("vue").DirectiveHook<any, null, any>;
                            unmounted?: import("vue").DirectiveHook<any, null, any>;
                            getSSRProps?: (binding: import("vue").DirectiveBinding<any>, vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                                [key: string]: any;
                            }>) => {
                                [x: string]: unknown;
                            };
                        };
                    };
                    inheritAttrs?: boolean;
                    emits?: any;
                    expose?: string[];
                    serverPrefetch?: () => Promise<any>;
                    call?: (this: unknown, ...args: unknown[]) => never;
                    __isFragment?: never;
                    __isTeleport?: never;
                    __isSuspense?: never;
                    __defaults?: {};
                    data?: (this: {
                        $: import("vue").ComponentInternalInstance;
                        $data: {};
                        $props: {};
                        $attrs: {
                            [x: string]: unknown;
                        };
                        $refs: {
                            [x: string]: unknown;
                        };
                        $slots: Readonly<{
                            [name: string]: import("vue").Slot;
                        }>;
                        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                        $emit: (event: string, ...args: any[]) => void;
                        $el: any;
                        $options: import("vue").ComponentOptionsBase<{}, {}, {}, {}, import("vue").MethodOptions, any, any, {}, string, {}>;
                        $forceUpdate: import("vue").ReactiveEffect<any>;
                        $nextTick: typeof import("vue").nextTick;
                        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
                    } & import("vue").ShallowUnwrapRef<{}> & {
                        [x: string]: never;
                    } & import("vue").MethodOptions & import("vue").ComponentCustomProperties, vm: {
                        $: import("vue").ComponentInternalInstance;
                        $data: {};
                        $props: {};
                        $attrs: {
                            [x: string]: unknown;
                        };
                        $refs: {
                            [x: string]: unknown;
                        };
                        $slots: Readonly<{
                            [name: string]: import("vue").Slot;
                        }>;
                        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
                        $emit: (event: string, ...args: any[]) => void;
                        $el: any;
                        $options: import("vue").ComponentOptionsBase<{}, {}, {}, {}, import("vue").MethodOptions, any, any, {}, string, {}>;
                        $forceUpdate: import("vue").ReactiveEffect<any>;
                        $nextTick: typeof import("vue").nextTick;
                        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
                    } & import("vue").ShallowUnwrapRef<{}> & {
                        [x: string]: never;
                    } & import("vue").MethodOptions & import("vue").ComponentCustomProperties) => any;
                    computed?: any;
                    methods?: any;
                    watch?: {
                        [x: string]: string | import("vue").WatchCallback<any, any> | {
                            handler: string | import("vue").WatchCallback<any, any>;
                            immediate?: boolean;
                            deep?: boolean;
                            flush?: "pre" | "post" | "sync";
                            onTrack?: (event: import("vue").DebuggerEvent) => void;
                            onTrigger?: (event: import("vue").DebuggerEvent) => void;
                        } | (string | import("vue").WatchCallback<any, any> | {
                            handler: string | import("vue").WatchCallback<any, any>;
                            immediate?: boolean;
                            deep?: boolean;
                            flush?: "pre" | "post" | "sync";
                            onTrack?: (event: import("vue").DebuggerEvent) => void;
                            onTrigger?: (event: import("vue").DebuggerEvent) => void;
                        })[];
                    };
                    provide?: Function | {
                        [x: string]: unknown;
                    };
                    inject?: string[] | {
                        [x: string]: string | symbol | {
                            from?: string | symbol;
                            default?: unknown;
                        };
                    };
                    mixins?: any[];
                    extends?: any;
                    beforeCreate?: () => void;
                    created?: () => void;
                    beforeMount?: () => void;
                    mounted?: () => void;
                    beforeUpdate?: () => void;
                    updated?: () => void;
                    activated?: () => void;
                    deactivated?: () => void;
                    beforeDestroy?: () => void;
                    beforeUnmount?: () => void;
                    destroyed?: () => void;
                    unmounted?: () => void;
                    renderTracked?: (e: import("vue").DebuggerEvent) => void;
                    renderTriggered?: (e: import("vue").DebuggerEvent) => void;
                    errorCaptured?: (err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void;
                    delimiters?: [string, string];
                    __file?: string;
                }[];
                components: {
                    [x: string]: import("vue").FunctionalComponent<any, any> | {
                        new (...args: any[]): any;
                        __isFragment?: never;
                        __isTeleport?: never;
                        __isSuspense?: never;
                    } | {
                        [x: string]: any;
                        setup?: (this: void, props: any, ctx: SetupContext<any>) => any;
                        name?: string;
                        template?: string | (object & {});
                        render?: Function;
                        components?: any;
                        directives?: {
                            [x: string]: import("vue").FunctionDirective<any, any> | {
                                created?: import("vue").DirectiveHook<any, null, any>;
                                beforeMount?: import("vue").DirectiveHook<any, null, any>;
                                mounted?: import("vue").DirectiveHook<any, null, any>;
                                beforeUpdate?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                    [key: string]: any;
                                }>, any>;
                                updated?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                                    [key: string]: any;
                                }>, any>;
                                beforeUnmount?: import("vue").DirectiveHook<any, null, any>;
                                unmounted?: import("vue").DirectiveHook<any, null, any>;
                                getSSRProps?: (binding: import("vue").DirectiveBinding<any>, vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                                    [key: string]: any;
                                }>) => {
                                    [x: string]: unknown;
                                };
                            };
                        };
                        inheritAttrs?: boolean;
                        emits?: any;
                        expose?: string[];
                        serverPrefetch?: () => Promise<any>;
                        call?: (this: unknown, ...args: unknown[]) => never;
                        __isFragment?: never;
                        __isTeleport?: never;
                        __isSuspense?: never;
                        __defaults?: {};
                        data?: (this: any, vm: any) => any;
                        computed?: {
                            [x: string]: import("@vue/reactivity").ComputedGetter<any> | {
                                get: import("@vue/reactivity").ComputedGetter<any>;
                                set: import("@vue/reactivity").ComputedSetter<any>;
                            };
                        };
                        methods?: {
                            [x: string]: Function;
                        };
                        watch?: {
                            [x: string]: string | import("vue").WatchCallback<any, any> | {
                                handler: string | import("vue").WatchCallback<any, any>;
                                immediate?: boolean;
                                deep?: boolean;
                                flush?: "pre" | "post" | "sync";
                                onTrack?: (event: import("vue").DebuggerEvent) => void;
                                onTrigger?: (event: import("vue").DebuggerEvent) => void;
                            } | (string | import("vue").WatchCallback<any, any> | {
                                handler: string | import("vue").WatchCallback<any, any>;
                                immediate?: boolean;
                                deep?: boolean;
                                flush?: "pre" | "post" | "sync";
                                onTrack?: (event: import("vue").DebuggerEvent) => void;
                                onTrigger?: (event: import("vue").DebuggerEvent) => void;
                            })[];
                        };
                        provide?: Function | {
                            [x: string]: unknown;
                        };
                        inject?: string[] | {
                            [x: string]: string | symbol | {
                                from?: string | symbol;
                                default?: unknown;
                            };
                        };
                        mixins?: any[];
                        extends?: any;
                        beforeCreate?: () => void;
                        created?: () => void;
                        beforeMount?: () => void;
                        mounted?: () => void;
                        beforeUpdate?: () => void;
                        updated?: () => void;
                        activated?: () => void;
                        deactivated?: () => void;
                        beforeDestroy?: () => void;
                        beforeUnmount?: () => void;
                        destroyed?: () => void;
                        unmounted?: () => void;
                        renderTracked?: (e: import("vue").DebuggerEvent) => void;
                        renderTriggered?: (e: import("vue").DebuggerEvent) => void;
                        errorCaptured?: (err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void;
                        delimiters?: [string, string];
                        __file?: string;
                    };
                };
                directives: {
                    [x: string]: import("vue").FunctionDirective<any, any> | {
                        created?: import("vue").DirectiveHook<any, null, any>;
                        beforeMount?: import("vue").DirectiveHook<any, null, any>;
                        mounted?: import("vue").DirectiveHook<any, null, any>;
                        beforeUpdate?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                            [key: string]: any;
                        }>, any>;
                        updated?: import("vue").DirectiveHook<any, import("vue").VNode<any, any, {
                            [key: string]: any;
                        }>, any>;
                        beforeUnmount?: import("vue").DirectiveHook<any, null, any>;
                        unmounted?: import("vue").DirectiveHook<any, null, any>;
                        getSSRProps?: (binding: import("vue").DirectiveBinding<any>, vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                            [key: string]: any;
                        }>) => {
                            [x: string]: unknown;
                        };
                    };
                };
                provides: {
                    [x: string]: any;
                };
            };
            vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            subTree: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            update: import("vue").ReactiveEffect<any>;
            proxy: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
            exposed: {
                [x: string]: any;
            };
            data: {
                [x: string]: unknown;
            };
            props: {
                [x: string]: unknown;
            };
            attrs: {
                [x: string]: unknown;
            };
            slots: {
                [x: string]: import("vue").Slot;
            };
            refs: {
                [x: string]: unknown;
            };
            emit: (event: string, ...args: any[]) => void;
            isMounted: boolean;
            isUnmounted: boolean;
            isDeactivated: boolean;
        };
    }[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update:modelValue" | "focusedItemChanged", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
    modelValue: any;
    as: string;
    multiple: boolean;
    compare: string | ((modelValue: any[], itemValue: any) => boolean);
    hideOnSelect: boolean;
    allowClear: boolean;
    asProps: (slotProps: any) => any;
} & {}>, {
    disabled: boolean;
    modelValue: any;
    as: string;
    multiple: boolean;
    compare: string | ((modelValue: any[], itemValue: any) => boolean);
    hideOnSelect: boolean;
    allowClear: boolean;
    asProps: (slotProps: any) => any;
}>;
export default _default;
