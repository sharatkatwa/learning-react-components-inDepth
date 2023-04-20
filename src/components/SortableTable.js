import Table from './Table'
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go'
import useSort from '../hooks/use-sort'

function SortableTable(props) {
  const { config, data } = props

  const { sortBy, sortOrder, setSortState, sortedData } = useSort(data, config)

  const updatedConfig = config.map((column) => {
    if (column.sortValue) {
      return {
        ...column,
        header: () => (
          <th
            className='cursor-pointer hover:bg-gray-100'
            onClick={() => setSortState(column.label)}
          >
            <div className='flex items-center'>
              {showIcon(column.label, sortBy, sortOrder)}
              {column.label}
            </div>
          </th>
        ),
      }
    }
    return column
  })

  return (
    <div>
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  )
}

const showIcon = (label, sortBy, sortOrder) => {
  if (label !== sortBy || sortOrder === null) {
    return (
      <div>
        <GoTriangleUp />
        <GoTriangleDown />
      </div>
    )
  } else if (sortOrder === 'asc') {
    return (
      <div>
        <GoTriangleUp />
      </div>
    )
  } else if (sortOrder === 'desc') {
    return (
      <div>
        <GoTriangleDown />
      </div>
    )
  }
}

export default SortableTable
