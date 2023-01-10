import { cssWrapper } from './style';
import { InputContext } from './context'
import { useContext } from 'react';

const Comp2 = () => {
  const { number, number1 } = useContext(InputContext)
  return (
    <>
      <div className={cssWrapper}>Latest inputted value is: {
        number || number1 ? `${number} & ${number1}` : "______*"
      } </div>
    </>
  )
}

export default Comp2;