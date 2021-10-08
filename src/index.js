const isObject = (v) => v !== null && typeof v === 'object' && !Array.isArray(v)

class EventJS {
  constructor() {
    this.events = {}
  }

  once(type, handler) {
    this.events[type] = this.events[type] || {
      once: true,
      handler,
    }
    return this
  }

  on(type, handler) {
    this.events[type] = (this.events[type] || []).concat(handler)
    return this
  }

  off(type) {
    if (type === undefined) {
      this.events = {}
    } else {
      this.events[type] = []
    }
    return this
  }

  trigger(type) {
    if (this.events[type]) {
      if (this.events[type].once) {
        this.events[type].handler()
        delete this.events[type]
      } else {
        this.events[type].map((handler) => handler())
      }

    }
    return this
  }
}

class EventBus extends EventJS {
  constructor() {
    super()
    this.on('click', () => alert('Click!'))
      .on('scroll', () => alert('Scroll!'))
      .once('mouseup', () => alert('Mouse up!'))
      .once('mouseup', () => alert('Mouse up again!'))
  }

  dispatch() {
    this.off('scroll')
      .trigger('click')
      .trigger('click')
      .trigger('scroll')
      .trigger('mouseup')
      .trigger('mouseup')
  }
}

const bus = new EventBus()
bus.dispatch()

export default EventJS
