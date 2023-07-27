const CODES = {
  A: 65,
  Z: 90
}

function toCell(row) {
  return function(_, column) {
    return `
      <div class="excel__cell"
          contenteditable
          data-column="${column}"
          data-id="${row}:${column}"
          data-type="cell"
        >
      </div>
    `
  }
}

function toColumn(column, index) {
  return `
    <div class="excel__column" data-type="resizable" data-column="${index}">
        ${column}
        <div class="excel__column-resize" data-resize="column"></div>
    </div>
  `
}

function createRow(index, content) {
  const resize =
    index
    ? '<div class="excel__row-resize" data-resize="row"></div>'
    : ''
  return `
    <div class="excel__row" data-type="resizable">
        <div class="excel__row-info">
            ${index ?? ''}
            ${resize}
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
  for (let row = 0; row < rowCount; row++) {
    const cells = new Array(colsCoount)
        .fill('')
        .map(toCell(row))
        .join('')
    rows.push(createRow(row + 1, cells))
  }
  return rows.join('')
}
