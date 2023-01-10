import { useContext } from "react";
import DATA from "./_data";
import { InputContext } from "./context";

const Table = () => {
  const { username } = useContext(InputContext)

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {DATA.map((eachrow, idx) => {
          if ((eachrow.name.toLocaleLowerCase() !== (username.toLocaleLowerCase() || "")) && username) {            
            return null
          }

          return (
            <tr key={idx}>
              <td>{eachrow.name}</td>
              <td>{eachrow.age}</td>
              <td>{eachrow.address}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table;
