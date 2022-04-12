export type { CountUp as ICountUp, CountUpOptions } from 'countup.js';
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
    loop: {
        type: import("vue").PropType<string | number | boolean>;
    } & {
        default: boolean;
    };
    delay: {
        type: import("vue").PropType<number>;
    } & {
        default: number;
    };
    options: {
        type: import("vue").PropType<CountUpOptions>;
    } & {
        default: undefined;
    };
}, () => void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    init: (countup: CountUp) => void;
} & {
    finished: () => void;
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
    loop: {
        type: import("vue").PropType<string | number | boolean>;
    } & {
        default: boolean;
    };
    delay: {
        type: import("vue").PropType<number>;
    } & {
        default: number;
    };
    options: {
        type: import("vue").PropType<CountUpOptions>;
    } & {
        default: undefined;
    };
}>> & {
    onFinished?: (() => any) | undefined;
    onInit?: ((countup: CountUp) => any) | undefined;
}, {
    options: CountUpOptions;
    duration: string | number;
    autoplay: boolean;
    loop: string | number | boolean;
    startVal: string | number;
    delay: number;
}>;
export default _default;
