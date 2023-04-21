import { useReducer } from 'react'
import Button from '../components/Button'
import Panel from '../components/Panel'
// import useCounter from '../hooks/use-counter'

const INCREMENT_COUNT = 'increment'
const DECREMENT_COUNT = 'decrement'
const SET_VALUE_TO_ADD = 'set-value-to-add'
const ADD_VALUE_ON_SUBMIT = 'add-value-on-submit'

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      }
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      }
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      }
    case ADD_VALUE_ON_SUBMIT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      }
    default:
      return state
  }
}

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  })

  const increment = () => {
    // setCount(count + 1)
    dispatch({
      type: INCREMENT_COUNT,
    })
  }
  const decrement = () => {
    // setCount(count - 1)
    dispatch({
      type: DECREMENT_COUNT,
    })
  }
  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0

    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    })

    // setValueToAdd(value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch({
      type: ADD_VALUE_ON_SUBMIT,
    })

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
          type='number'
          className='p-1 m-3 bg-gray-50 border'
          value={state.valueToAdd || ''}
          onChange={handleChange}
        />
        <Button success>Add</Button>
      </form>
    </Panel>
  )
}

export default CounterPage
