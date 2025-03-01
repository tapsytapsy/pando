import { useMemo, useEffect } from 'react'
import { useTable } from 'react-table'
import { getTableProps, getJSTableProps } from '../../../src'
import { tableCols, tableData } from '../data/table.data'

const tableStyles = getTableProps()

export default function Table({ logJS }) {
  const cols = useMemo(() => tableCols, [])
  const data = useMemo(() => tableData, [])
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: cols, data })

  useEffect(() => {
    if (logJS) {
      console.log({
        ...getJSTableProps(),
      })
    }
  }, [logJS])

  return (
    <div id="table">
      <h3>Table</h3>
      <div className="App-container">
        <table {...getTableProps()} {...tableStyles.table}>
          <caption {...tableStyles.caption}>Some interesting data</caption>

          <thead>
            {headerGroups.map((group) => (
              <tr {...group.getHeaderGroupProps()} {...tableStyles.row}>
                {group.headers.map((column) => (
                  <th {...column.getHeaderProps()} {...tableStyles.headCell}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()} {...tableStyles.row}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()} {...tableStyles.bodyCell}>
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
