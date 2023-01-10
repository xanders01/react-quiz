import { useReducer } from 'react'

const defaultInputValue = "______"

const Test1 = () => {
  const [username, setUsername] = useReducer((_, inputVal) => {
    return inputVal || defaultInputValue
  }, defaultInputValue)


  return (
    <div>
      <ul>
        <li>Please render the inputted value</li>
      </ul>
      <p>
        <b>User Input: </b> {username}
      </p>
      <input type="text" placeholder="input here" onKeyUp={(e) => setUsername(e.target.value)} />
    </div>
  )
}

export default Test1;