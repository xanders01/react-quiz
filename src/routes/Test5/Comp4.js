import { useContext } from 'react';
import { cssWrapper, cssModalRight } from './style';
import { InputContext } from './context'

const Comp4 = (/* NO PROPS ALLOWED */) => {
  const { number2, setNumber2, handleSetNumber } = useContext(InputContext)
  return (
    <>
      <div className={cssWrapper}>
        <div className={cssModalRight}>
          Input Modal
          <button type="button">⊗</button>
        </div>
        <input
          id="mynumber1"
          pattern="[0-9]*"
          type="text"
          placeholder="input mynumber1"
          value={number2}
          onChange={(e) => handleSetNumber(e, setNumber2)}
        />
      </div>
    </>
  )
}

export default Comp4;