import { useEffect, useState } from 'react';
import Modal from './Modal';
import { cssForm } from './style';

const inputField = {
  name: "",
  age: "",
  address: ""
}

const Test8 = () => {
  // ONLY ONE HANDLE METHOD ALLOWED
  const [isSubmmit, setIsSubmit] = useState(false)
  const [inputData, setInputData] = useState(inputField)

  useEffect(() => {
    if (!isSubmmit) {
      setInputData(inputField)
    }
    return
  }, [isSubmmit])

  const handleInput = (e) => {
    const { name, value } = e.target
    setInputData({ ...inputData, [name]: value })
  };

  return (
    <div>
      <ul>
        <li>User can input the form - only 1 handle method is allowed</li>
        <li>When submit display the modal</li>
        <li>Show the form value inside the modal</li>
        <li>Reset the form and close the modal when user click the reset button</li>
      </ul>
      <form className={cssForm}>
        <input type="text" placeholder="name" name="name" value={inputData.name} onChange={e => handleInput(e)} />
        <input type="text" placeholder="age" name="age" value={inputData.age} onChange={e => handleInput(e)} />
        <textarea type="text" placeholder="address" name="address" value={inputData.address} onChange={e => handleInput(e)} />
        <button type="button" onClick={() => setIsSubmit(true)}>Submit</button>
      </form>
      {/* Only Show the modal when user clicked submit */}
      {
        isSubmmit && <Modal data={inputData} setIsSubmit={setIsSubmit} />
      }

    </div>
  )
}

export default Test8;