import { useState } from "react";
import Input from "./Input";
import Label from "./Label";

const Test2 = () => {
  const [label, setLabel] = useState("")
  return (
    <div>
      <ul>
        <li>Render user input value inside the label below</li>
        <li>show "close button" only when hovered, and clear the input value when clicked.</li>
      </ul>
      <p>
        <Label label={label} setLabel={setLabel} />
      </p>
      <Input label={label} setLabel={setLabel} />
    </div>
  )
}

export default Test2;