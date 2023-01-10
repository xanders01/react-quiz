import { useState } from "react";

const Input = (props) => {
  const { setSearchParam } = props
  const [inputVal, setInputVal] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    setSearchParam(inputVal)
  }

  return (
    <form>
      <input type="text" placeholder="search" onKeyUp={e => setInputVal(e.target.value)} />
      <button type="submit" onClick={onSubmit}>🔍</button>
    </form>
  )
}

export default Input;
