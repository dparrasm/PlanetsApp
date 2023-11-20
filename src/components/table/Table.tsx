import React from 'react'
import './Table.scss'
import { Planet } from '../../domain/Planet'
import SortButton from '../sortButton/SortButton'

interface TableProps {
  header: string[]
  rows: Planet[]
  sortTable: ({
    sortBy,
    orderAsc
  }: {
    sortBy: string
    orderAsc: boolean
  }) => void
}

export default function Table({
  header,
  rows,
  sortTable
}: TableProps): JSX.Element {
  return (
    <>
      <div className="table-frame">
        <div className="table-container">
          <div className="table-header">
            {header.map((h, index) => (
              <div key={index} className="table-cell">
                <span style={{ color: '#828282' }}>
                  {h.charAt(0).toUpperCase() + h.slice(1).toLowerCase()}
                </span>
                {(h === 'diameter' || h === 'population') && (
                  <SortButton
                    increasedOrder={true}
                    sortBy={h}
                    onClick={sortTable}
                  />
                )}
              </div>
            ))}
          </div>
          {rows.map((r, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <div className="table-row">
                {header.map((h, cellIndex) => (
                  <div
                    key={cellIndex}
                    className={
                      cellIndex === 0 ? 'table-cell-bold' : 'table-cell'
                    }
                  >
                    <span>{r[h as keyof typeof r]}</span>
                  </div>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  )
}
