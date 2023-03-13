const Table = ({ data }) => {
    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Transaction-Id</th>
            <th>Amount</th>
            <th>Payment</th>
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.username}</td>
              <td>{item.transactionId}</td>
              <td>{item.amount}</td>
              <td><button className="td-button" onClick={()=>window.alert(item.username)}>Confirm Payment</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;