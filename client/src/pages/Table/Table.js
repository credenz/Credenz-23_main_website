const Table = ({ data }) => {
    return (
      <div className="container" style={{backgroundColor:'black'}}>
      <table >
        <tbody style={{borderStyle:'solid',borderWidth:'1px'}}>
          <tr style={{borderStyle:'solid',borderWidth:'1px'}}>
            <th>Name</th>
            <th>UserName</th>
            <th>Transaction-Id</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
            <th>Payment</th>
          </tr>
          {data.map((item) => (
            <tr key={item.id} style={{borderStyle:'solid',borderWidth:'1px'}}>
              <td>{item.full_name}</td>
              <td>{item.username}</td>
              <td>{item.transaction_id}</td>
              <td>{item.cost}</td>
              <td>{item.date}</td>
              <td>{item.status}</td>
              <td><button className="td-button" onClick={()=>window.alert(item.username)}>Confirm Payment</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  };
  
  export default Table;