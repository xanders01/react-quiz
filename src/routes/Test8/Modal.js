import { cssModal } from "./style"

const Modal = ({ data, setIsSubmit }) => {
  const { name, age, address } = data
  return (
    <div className={cssModal}>
      Name: {name}
      <br />
      Age: {age}
      <br />
      Address: {address}
      <br />
      <button onClick={() => setIsSubmit(false)}>Reset</button>
    </div>
  );
};

export default Modal;
