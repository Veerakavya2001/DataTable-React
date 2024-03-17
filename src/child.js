import "./data-table.css";
function Child(props){
    
    return( 
    <div>
        <table>
        <tr>
          <th>id</th>
          <th>First_name</th>
          <th>Last_name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>IP_address</th>
          <th>image</th>
        </tr>
          {props.tabledata.map((item)=>(
            <tr>
                <td key={item.id}>{item.id}</td>
                <td key={item.id}>{item.first_name}</td>
                <td key={item.id}>{item.last_name}</td>
                <td key={item.id}>{item.email}</td>
                <td key={item.id}>{item.gender}</td>
                <td key={item.id}>{item.ip_address}</td>
                <td key={item.id}> <img key={item.id} src={item.image} alt="pic" className="photos"></img></td>
               
            </tr>
          ))}
        </table>
    </div>
      )
      
}
export default Child;