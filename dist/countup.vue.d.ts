export * from 'countup.js';
import { CountUp } from 'countup.js';
import type { CountUpOptions } from 'countup.js';
declare const _default: import("vue").DefineComponent<{
    endVal: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
    startVal: {
        type: import("vue").PropType<string | number>;
    } & {
        default: number;
    };
    duration: {
        type: import("vue").PropType<string | number>;
    } & {
        default: number;
    };
    autoplay: {
        type: import("vue").PropType<boolean>;
    } & {
        default: boolean;
    };
    options: {
        type: import("vue").PropType<CountUpOptions>;
    } & {
        default: undefined;
    };
}, () => void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    init: (countup: CountUp) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    endVal: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
    startVal: {
        type: import("vue").PropType<string | number>;
    } & {
        default: number;
    };
    duration: {
        type: import("vue").PropType<string | number>;
    } & {
        default: number;
    };
    autoplay: {
        type: import("vue").PropType<boolean>;
    } & {
        default: boolean;
    };
    options: {
        type: import("vue").PropType<CountUpOptions>;
    } & {
        default: undefined;
    };
}>> & {
    onInit?: ((countup: CountUp) => any) | undefined;
}, {
    options: CountUpOptions;
    duration: string | number;
    autoplay: boolean;
    startVal: string | number;
}>;
export default _default;
