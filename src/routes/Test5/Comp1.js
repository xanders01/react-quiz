import { cssWrapper } from './style';

import { useContext, useState } from "react";
import Comp2 from "./Comp2";
import { InputContext } from './context'

const Comp1 = () => {
  const [isTicked, setIsTicked] = useState(false);
  const { number1, setNumber1, handleSetNumber } = useContext(InputContext)

  return (
    <div className={cssWrapper}>
      Latest Inputted from <code>[Test5/Comp1]*</code>
      <br />
      <br />
      <label htmlFor="overwrite">
        Local overwrite: <input id="overwrite" type="checkbox" onChange={() => setIsTicked((currVal) => !currVal)} checked={isTicked} />
        {/* only show when overwrite is checked */}
        {
          isTicked &&
          <input
            id="mynumber1"
            type="text"
            pattern="[0-9]*"
            placeholder="input mynumber1"
            value={number1}
            onChange={(e) => handleSetNumber(e, setNumber1)}
          />
        }
      </label>
      <Comp2 />
    </div>
  )
}

export default Comp1;