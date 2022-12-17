import { SetupContext } from 'vue';
export declare const coreTableColumnPropertyProp: {
    property: {
        type: StringConstructor;
    };
};
export declare const coreTableColumnFormatterProp: {
    formatter: {
        type: FunctionConstructor;
        default: any;
    };
};
export declare const coreTableColumnSortableProp: {
    sortable: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const coreTableColumnDataProp: {
    data: {
        type: ObjectConstructor;
        default: any;
    };
};
export declare const coreTableColumnOrderProp: {
    order: {
        type: NumberConstructor;
        default: number;
    };
};
export declare const coreTableColumnComponentProp: {
    component: {
        type: any;
        required: boolean;
    };
};
export declare function coreTableColumnSetup(data: object, props?: string[], events?: string[]): {
    props: {
        data: object & {};
        component: {
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
    listeners: {
        [key: string]: any;
    };
};
declare const _default: import("vue").DefineComponent<{
    order: {
        type: NumberConstructor;
        default: number;
    };
    component: {
        type: any;
        required: boolean;
    };
    data: {
        type: ObjectConstructor;
        default: any;
    };
    sortable: {
        type: BooleanConstructor;
        default: boolean;
    };
    formatter: {
        type: FunctionConstructor;
        default: any;
    };
    property: {
        type: StringConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    component: any;
    data: Record<string, any>;
    order: number;
    sortable: boolean;
    formatter: Function;
} & {
    property?: string;
}>, {
    component: any;
    data: Record<string, any>;
    order: number;
    sortable: boolean;
    formatter: Function;
}>;
export default _default;
