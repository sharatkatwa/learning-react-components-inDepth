import { useState } from 'react'

function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null)
  const [sortBy, setSortBy] = useState(null)

  const setSortState = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder('asc')
      setSortBy(label)
      return
    }

    if (sortOrder === null) {
      setSortOrder('asc')
      setSortBy(label)
    } else if (sortOrder === 'asc') {
      setSortOrder('desc')
      setSortBy(label)
    } else if (sortOrder === 'desc') {
      setSortOrder(null)
      setSortBy(null)
    }
  }

  // main Sort Login here.
  let sortedData = data
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy)
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a)
      const valueB = sortValue(b)
      const reverseOrder = sortOrder === 'asc' ? 1 : -1

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder
      } else {
        return (valueA - valueB) * reverseOrder
      }
    })
  }

  return {
    sortBy,
    sortOrder,
    setSortState,
    sortedData,
  }
}
export default useSort
