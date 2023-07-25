import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
  }

  // возвращает шалон компонента
  toHTML() {
    return ''
  }

  init() {
    this.initDomListeners()
  }

  destroy() {
    console.log('destroy')
    this.removeDomListeners()
  }
}
