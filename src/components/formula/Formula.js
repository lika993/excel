import {ExcelComponent} from '@/core/ExcelComponent'
import {$} from '@/core/dom'

export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      ...options
    })
  }

  toHTML() {
    return `
      <div class="excel__info">fx</div>
      <div id="formula"
        class="excel__formula-input"
        contenteditable
        spellcheck="false">
      </div>
    `
  }

  onInput(event) {
    this.$emit('formula:input', $(event.target).text())
  }

  init() {
    super.init()

    this.$formula = this.$root.find('#formula')
    this.$on('table:select', $cell => {
      this.$formula.text($cell.text())
    })
    this.$on('table:input', $cell => {
      this.$formula.text($cell.text())
    })
  }

  onKeydown(event) {
    const keys = ['Enter', 'Tab']
    if (keys.includes(event.key)) {
      event.preventDefault()
      this.$emit('formula:done')
    }
  }
}
