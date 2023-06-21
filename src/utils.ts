import { ref } from 'vue'

export interface RafContext {
  cancel(): void
}

// delay to execute callback function
export function useRaf(cb: () => unknown, delaySeconds = 1): RafContext {
  const rafId = ref<number>(-1)
  let startTime: number
  function count(timestamp: number) {
    if (!startTime) startTime = timestamp
    const diff = timestamp - startTime
    if (diff < delaySeconds * 1000) {
      rafId.value = requestAnimationFrame(count)
    } else {
      cb()
    }
  }
  rafId.value = requestAnimationFrame(count)

  function cancel() {
    window.cancelAnimationFrame(rafId.value)
  }
  return { cancel }
}
