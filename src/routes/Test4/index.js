import { useState } from "react";
import Input from "./Input";
import Table from "./Table";

const Test4 = () => {
  const [searchParam, setSearchParam] = useState("")

  return (
    <div>
      <ul>
        <li>Please render data into the table</li>
        <li>Please filter the table by name search (after press enter or click search button)</li>
      </ul>
      <Input setSearchParam={setSearchParam} />
      <div>
        <Table searchParam={searchParam} />
      </div>
    </div>
  )
}

export default Test4;