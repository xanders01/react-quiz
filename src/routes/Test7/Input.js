import { memo, useContext } from "react";
import { InputContext } from "./context";

const Input = () => {
  const { usernameRef, setUsername } = useContext(InputContext)

  const handleSubmitButton = (e) => {
    e.preventDefault()
    setUsername(usernameRef.current.value)
  }

  return (
    <form>
      <input type="text" placeholder="search" ref={usernameRef} />
      <button type="submit" onClick={(e) => handleSubmitButton(e)}>🔍</button>
    </form>
  )
}

export default memo(Input);
