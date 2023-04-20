import { useReducer } from 'react'
import Button from '../components/Button'
import Panel from '../components/Panel'
// import useCounter from '../hooks/use-counter'

const reducer = (state, action) => {
  return {
    ...state,
    count: state.count + 1,
  }
}

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  })

  const increment = () => {
    // setCount(count + 1)
    dispatch()
  }
  const decrement = () => {
    // setCount(count - 1)
  }
  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0

    // setValueToAdd(value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // setCount(count + valueToAdd)
    // setValueToAdd(0)
  }

  return (
    <Panel className='m-3'>
      <h1 className='text-lg'>count: {state.count}</h1>
      <div className='flex'>
        <Button primary rounded onClick={increment}>
          Increment
        </Button>
        <Button primary rounded onClick={decrement}>
          Decrement
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a Lot</label>
        <input
          className='p-1 m-3 bg-gray-50 border'
          type='number'
          value={state.valueToAdd || ''}
          onChange={handleChange}
        />
        <Button success>Add</Button>
      </form>
    </Panel>
  )
}

export default CounterPage
