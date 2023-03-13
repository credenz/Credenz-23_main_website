import './Admin.css';
import Registration from '../Register/Registration';
import TablePage from '../Table/TablePage';
import AdminUser from './AdminUser';
import { useState } from 'react';
const Admin=()=>{
    const [selected,setSelected] = useState(0);
    return(
        <div className='adminPage'>
            {selected===0?
            <div className='admin_style'>
            <button onClick={()=>setSelected(1)}>New User</button>
            <button onClick={()=>setSelected(2)}>Payment Table</button>
            </div>
            :(selected===1?(<><a style={{'color':'red','textDecoration':'underline'}} onClick={(e)=>{e.preventDefault();setSelected(0)}}>Back to Admin</a><AdminUser/></>)

            :selected===2?(<><a style={{'color':'red','textDecoration':'underline'}} onClick={(e)=>{e.preventDefault();setSelected(0)}}>Back to Admin</a><TablePage/></>):'')}
        </div>
    )
}

export default Admin;