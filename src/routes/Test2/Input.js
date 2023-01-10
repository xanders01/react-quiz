import { memo } from "react";

const Input = ({ label, setLabel }) => {
  return <input type="text" placeholder="input here" value={label} onChange={(e) => setLabel(e.target.value)} />
}

export default memo(Input);
