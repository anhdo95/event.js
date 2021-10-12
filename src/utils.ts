export const isObject = (v: unknown) => v !== null && typeof v === 'object' && !Array.isArray(v)
export const isUndefined = (v: unknown) => typeof v === 'undefined'
export const isFunction = (v: unknown) => typeof v === 'function'
export const isString = (v: unknown) => typeof v === 'string'
