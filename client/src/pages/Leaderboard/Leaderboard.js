import Table from 'react-bootstrap/Table';
import './Leaderboard.css';
import { useEffect, useState } from 'react';
import Requests from '../../api/requests';
function Leaderboard() {
    const [list,setList]= useState([]);
    const playersList= async()=>{
        await Requests.leaderboard()
        .then((res)=>{
            console.log(res.data);
            let temp=[];
            res.data.map((data)=>{
                temp.push({coins:data.coins,full_name:data.full_name,username:data.username})
            })
            setList(temp);
        })
        .catch((err)=>console.log(err))
    }
    useEffect(()=>{playersList()},[])
  return (
    <div className='leaderboard'>
    <Table borderless hover style={{'background':'#200f26'}}>
      <thead>
        <tr>
          <th> </th>
          <th>Full Name</th>
          <th>Username</th>
          <th>Coins</th>
        </tr>
      </thead>
      <tbody>
        {
            list.map((data,indx)=>(
            <tr>
            <td>{indx+1}</td>
            <td>{data.full_name}</td>
            <td>{data.username}</td>
            <td>{data.coins}</td>
            </tr>
            ))
        }
      </tbody>
    </Table>
    </div>
  );
}

export default Leaderboard;