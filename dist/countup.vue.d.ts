import { CountUp } from 'countup.js';
import type { CountUpOptions } from 'countup.js';
export type { CountUp as ICountUp, CountUpOptions } from 'countup.js';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    endVal: number | string;
    startVal?: string | number | undefined;
    duration?: string | number | undefined;
    decimalPlaces?: number | undefined;
    autoplay?: boolean | undefined;
    loop?: number | boolean | undefined;
    delay?: number | undefined;
    options?: CountUpOptions | undefined;
}>, {
    startVal: number;
    duration: number;
    decimalPlaces: number;
    autoplay: boolean;
    loop: boolean;
    delay: number;
    ignorePart: undefined;
    options: undefined;
}>, {
    init: () => void;
    restart: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    init: (countup: CountUp) => void;
    finished: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    endVal: number | string;
    startVal?: string | number | undefined;
    duration?: string | number | undefined;
    decimalPlaces?: number | undefined;
    autoplay?: boolean | undefined;
    loop?: number | boolean | undefined;
    delay?: number | undefined;
    options?: CountUpOptions | undefined;
}>, {
    startVal: number;
    duration: number;
    decimalPlaces: number;
    autoplay: boolean;
    loop: boolean;
    delay: number;
    ignorePart: undefined;
    options: undefined;
}>>> & {
    onInit?: ((countup: CountUp) => any) | undefined;
    onFinished?: (() => any) | undefined;
}, {
    startVal: number | string;
    duration: number | string;
    decimalPlaces: number;
    autoplay: boolean;
    loop: boolean | number;
    delay: number;
    options: CountUpOptions;
}, {}>, {
    prefix?(_: {}): any;
    suffix?(_: {}): any;
}>;
export default _default;

type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
