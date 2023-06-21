export interface RafContext {
    cancel(): void;
}
export declare function useRaf(cb: () => unknown, delaySeconds?: number): RafContext;
