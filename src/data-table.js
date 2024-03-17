import  {data} from './data';
import Child  from './child';
import { useState } from 'react';
function Parent(){
    // console.log(data)
const [inputvalue,setinput]=useState("")
let filterarray=data.filter((item)=>item.first_name.includes(inputvalue))
    return(
     <div>
        <input placeholder='enter the text' type="text" onChange={(e)=>setinput(e.target.value)}/>
        {/* <div>{inpt}</div> */}
        <Child tabledata={filterarray}/>
     </div>
    )
}
export default Parent;