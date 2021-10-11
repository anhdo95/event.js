export type Events = { [key: string]: EventHandler[] }
export type EventType = string
export type EventHandler = (...args: any[]) => any