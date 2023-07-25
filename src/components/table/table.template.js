const CODES = {
  A: 65,
  Z: 90
}

function toCell() {
  return `
    <div class="excel__cell" contenteditable></div>
  `
}

function toColumn(column) {
  return `
    <div class="excel__column">
        ${column}
    </div>
  `
}

function createRow(index, content) {
  return `
    <div class="excel__row">
        <div class="excel__row-info">
            ${index ?? ''}
        </div>
        <div class="excel__row-data">
            ${content}
        </div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowCount= 15) {
  const colsCoount = CODES.Z - CODES.A + 1
  const rows = []
  const cols = new Array(colsCoount)
      .fill('')
      .map(toChar).map(toColumn).join('')
  rows.push(createRow(null, cols))
  for (let i = 0; i < rowCount; i++) {
    const cells = new Array(colsCoount)
        .fill('')
        .map(toCell)
        .join('')
    rows.push(createRow(i + 1, cells))
  }
  return rows.join('')
}
