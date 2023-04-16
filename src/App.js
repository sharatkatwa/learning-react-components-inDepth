import { useState } from 'react'
import Dropdown from './components/Dropdown'

function App() {
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
    <div className='flex'>
      <Dropdown options={options} onChange={handleSelect} value={selected} />
      <Dropdown options={options} onChange={handleSelect} value={selected} />
    </div>
  )
}

export default App
