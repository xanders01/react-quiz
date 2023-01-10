import { cssWrapper } from "./style";

import { useContext, useState } from "react";
import Comp4 from "./Comp4";
import { InputContext } from './context'

const Comp3 = (/* NO PROPS ALLOWED */) => {
  const [showModal, setShowModal] = useState(false);
  const { number } = useContext(InputContext)

  return (
    <>
      <div className={cssWrapper}>The Inputted Value is: {number}*</div>
      <button type="button" onClick={() => setShowModal((currVal) => !currVal)}>Show Modal</button>
      {showModal && <Comp4 />}
    </>
  )
}

export default Comp3;