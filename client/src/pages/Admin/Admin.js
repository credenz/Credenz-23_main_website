import './Admin.css';
import LoginNew from '../Register/LoginNew';
import TablePage from '../Table/TablePage';
import AdminUser from './AdminUser';
import { useState,useEffect } from 'react';
import Requests from '../../api/requests';
const Admin = (props) => {
    const [selected, setSelected] = useState(0);
    const [adminStatus, setAdminStauts] = useState(0);
    const checkAdmin = async () => {
        await Requests.profile()
            .then((res) => {
                // console.log(res);
                if(res.data.is_superuser===true){
                    setAdminStauts(2)
                }
                else if(res.data.offline_officer===true){
                    setAdminStauts(1)
                }
                else setAdminStauts(0)
            })
            .catch((err) => {
                console.log(err);
                setAdminStauts(0)
            })
    }
    useEffect(() => {
        checkAdmin();
    })
    return (
        <div>
            {
                adminStatus === 0
                    ? <h1  style={{display:"flex", justifyContent:"center",alignItems:"center",height:"100vh"}}>You Are Not An Admin</h1>
                    :
                    adminStatus === 1
                        ?
                        <div className='adminPage'>
                            {selected === 0 ?
                                <div className='admin_style'>
                                    <button onClick={() => setSelected(1)}>New User</button>
                                    {/* <button onClick={()=>setSelected(2)}>Payment Table</button> */}
                                </div>

                                : (selected === 1 ? (<><a style={{ 'color': 'red', 'textDecoration': 'underline' }} onClick={(e) => { e.preventDefault(); setSelected(0) }}>Back to Admin</a><AdminUser props={{...props}}/></>)

                                    : selected === 2 ? (<><a style={{ 'color': 'red', 'textDecoration': 'underline' }} onClick={(e) => { e.preventDefault(); setSelected(0) }}>Back to Admin</a><TablePage props={{...props}}/></>) : '')}
                        </div>
                        :
                        adminStatus === 2
                            ?
                            <div className='adminPage'>
                                {selected === 0 ?
                                    <div className='admin_style'>
                                        <button onClick={() => setSelected(1)}>New User</button>
                                        <button onClick={() => setSelected(2)}>Payment Table</button>
                                    </div>

                                    : (selected === 1 ? (<><a style={{ 'color': 'red', 'textDecoration': 'underline' }} onClick={(e) => { e.preventDefault(); setSelected(0) }}>Back to Admin</a><AdminUser props={{...props}}/></>)

                                        : selected === 2 ? (<><a style={{ 'color': 'red', 'textDecoration': 'underline' }} onClick={(e) => { e.preventDefault(); setSelected(0) }}>Back to Admin</a><TablePage props={{...props}}/></>) : '')}
                            </div>
                            :
                            'You Are Not Admin'
            
            }
        </div>

    )
}

export default Admin;