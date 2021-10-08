class EventJS {
  constructor() {
    this.events = {}
  }

  once() {
    console.log('once');
  }

  on() {
    console.log('on');
  }

  off() {
    console.log('off');
  }

  trigger() {
    console.log('trigger');
  }
}

export default EventJS
