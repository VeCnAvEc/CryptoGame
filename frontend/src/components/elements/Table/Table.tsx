import classNames from 'classnames'
import React from 'react'
import s from './Table.module.scss'
type Content = string | JSX.Element
interface ITableOptions {
  heading: Content[]
  tableRows: Content[][]
  headingOptions?: IColumnProps[]
  tableRowsOptions?: IColumnProps[]
  sticky?: boolean
}
export interface IColumnProps {
  align?: 'left' | 'right' | 'center'
  style?: React.CSSProperties
  className?: string
}
interface ITableProps
  extends React.HTMLProps<HTMLTableElement>,
    ITableOptions {}
const TableRowContent: React.FC<{
  children: (props: {
    cellOptions: IColumnProps | undefined
    content: Content
  }) => JSX.Element
  rows: Content[]
  options?: IColumnProps[]
}> = ({ children, rows, options }) => {
  return (
    <>
      {rows.map((content, i) => {
        const cellOptions = options && options[i]
        return children({ content, cellOptions })
      })}
    </>
  )
}
const Table: React.FC<ITableProps> = (props) => {
  const {
    heading,
    tableRows,
    sticky = false,
    className,
    style,
    headingOptions,
    tableRowsOptions,
  } = props
  return (
    <table style={{ ...style }} className={classNames(s.table, className)}>
      <thead className={classNames(sticky && s._sticky)}>
        <TableRowContent rows={heading} options={headingOptions}>
          {({ content, cellOptions }) => (
            <th  key={Math.random()}
              style={{ ...cellOptions?.style }}
              className={classNames(
                cellOptions?.className,
                cellOptions?.align && s[cellOptions.align]
              )}
            >
              {content}
            </th>
          )}
        </TableRowContent>
      </thead>
      <tbody>
        {tableRows.map((row, i) => (
          <tr key={'row_' + i}>
            <TableRowContent rows={row} options={tableRowsOptions}>
              {({ content, cellOptions }) => (
                <td key={Math.random()}
                  style={{ ...cellOptions?.style }}
                  className={classNames(
                    cellOptions?.className,
                    cellOptions?.align && s[cellOptions.align]
                  )}
                >
                  {content}
                </td>
              )}
            </TableRowContent>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
