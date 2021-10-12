import { EventHandler, Events, EventType } from './types'
import { isFunction, isString, isUndefined } from './utils'

class EventJS {
  private _events: Events

  constructor() {
    this._events = {}
  }

  once(type: EventType, handler: EventHandler) {
    if (!isString(type) || !isFunction(handler)) return this

    const listener = (...args: Parameters<EventHandler>) => {
      handler(...args)
      this.off(type, listener)
    }

    this.on(type, listener)
    return this
  }

  on(type: EventType, handler: EventHandler) {
    if (!isString(type) || !isFunction(handler)) return this

    this._events[type] = (this._events[type] || []).concat(handler)
    return this
  }

  off(type?: EventType, handler?: EventHandler) {
    if (isUndefined(type)) {
      this._events = {}
      return this
    }

    if (isUndefined(handler)) {
      delete this._events[type]
      return this
    }

    const handlers = this._events[type]
    if (handlers) {
      const index = handlers.indexOf(handler)

      if (index >= 0) {
        // O(1) faster than splice
        handlers[index] = handlers[handlers.length - 1]
        handlers.pop()
      }
    }

    return this
  }

  has(type: EventType) {
    return type in this._events
  }

  trigger(type: EventType) {
    if (
      !(type in this._events) ||
      !Array.isArray(this._events[type]) ||
      !this._events[type].length
    ) {
      return this
    }

    this._events[type].forEach((handler) => handler())
    return this
  }
}

export default EventJS
