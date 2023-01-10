import DATA from "./_data"

const Table = ({ searchParam }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
        {
          DATA.map(({ name, age, address }, i) => {
            if (name.toLowerCase() !== searchParam.toLowerCase() && searchParam) {
              return null
            }

            return (
              <tr key={i + name}>
                <td >{name}</td>
                <td>{age}</td>
                <td>{address}</td>
              </tr>
            )
          })
        }

      </thead>
    </table>
  )
}

export default Table;
