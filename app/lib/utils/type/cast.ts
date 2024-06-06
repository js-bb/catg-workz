/** Casts {@linkcode value} to the type parameter {@linkcode T}. */
// eslint-disable-next-line @typescript-eslint/no-empty-function
export function cast<T>(value: {}): asserts value is typeof value & T {}
