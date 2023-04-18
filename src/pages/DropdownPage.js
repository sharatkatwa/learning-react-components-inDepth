import { useState } from 'react'
import Dropdown from '../components/Dropdown'

function DropdownPage() {
  const [selected, setSelected] = useState(null)

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' },
  ]

  const handleSelect = (option) => {
    setSelected(option)
  }

  return (
    <div>
      <Dropdown options={options} onChange={handleSelect} value={selected} />
    </div>
  )
}

export default DropdownPage
