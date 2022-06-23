import classNames from 'classnames'
import React from 'react'
type Content = string | JSX.Element
interface ITableOptions {
  heading: Content[]
  tableRows: {
    connecting: Content
    elements: Content[][]
  }[]
  sticky?: boolean
}
const MultirowTable: React.FC<ITableOptions> = ({ heading, tableRows }) => {
  return (
    <div className="home_table">
      <div className="bone">
        <h3>MatrixGame levels start schedule</h3>
        <table>
          <tr>
            {heading.map((content, i) => (
              <th
                className={classNames(i === 1 && '_bd_left')}
                key={'table_' + i}
              >
                {content}
              </th>
            ))}
          </tr>
          {tableRows.map(row => row.elements.map((content, i) => (
            <tr>
                <>
                {i === 0 && (
                    <td rowSpan={row.elements.length}>
                    {row.connecting}
                    </td>
                )}
                {content.map((item, j) => 
                    <td
                        className={classNames(j === 0 && '_bd_left')}
                        key={'table_' + j}
                    >
                        {item}
                    </td>
                )}
                </>
            </tr>
          )))}
        </table>
      </div>
    </div>
  )
}

export default MultirowTable
