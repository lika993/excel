export class Emitter {
  constructor() {
    this.listeners = {}
  }

  // уведомляем слушателей
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return
    }
    this.listeners[event].forEach(listener => {
      listener(...args)
    })
    return true
  }

  // подписываемся на слушателя
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    return () => {
      this.listeners[event] = this.listeners[event]
          .filter(listener => {
            return listener !== fn
          })
    }
  }
}

// const emitter = new Emitter()
// const unsubscribe = emitter.subscribe('test', data => console.log(data))
// emitter.emit('test', 42)
// unsubscribe()
// emitter.emit('test', 43)
