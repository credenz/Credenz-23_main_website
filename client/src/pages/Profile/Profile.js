import { useEffect, useState } from 'react';
import './Profile.css';
import Requests from '../../api/requests';
import Desktop from './Desktop'
import Mobile from './Mobile';
import {isMobile} from 'react-device-detect';

const Profile = (props) => {
    const [data, setData] = useState({});
    const [isPhone, setIsPhone] = useState(isMobile);
    const fetchProfile = async () => {
        // console.log(localStorage.getItem('token'));
        // const id = props.toast.toast.loading("Please wait...");
        await Requests.profile()
        .then((res)=>{
            console.log(res);
            setData(res.data);
            // props.toast.toast.update(id, { isLoading: false });
        })
        .catch((err)=>{
            console.log(err)
            // props.toast.toast.update(id, { render: 'Error', type: "error", isLoading: false,autoClose:5000 });
            props.toast.toast.error('Error while fetching data');
        })
    }
    useEffect(() => {
        // fetchProfile();
      setIsPhone(isMobile);
        setData({username:'neil_reac',full_name:'Neil Armstrrong',email:'wasd@gmail.com',phone:1233211231,institute:'Pune Institute Of Computer Technology',coins:200,referral:'JOBHIHO',order:[{date:'23/3/23',eventName:'CLASH',paymentStatus:'Under Review'},{date:'23/3/23',eventName:'RC',paymentStatus:'Successfull'}]})
    },[])
    return (
        <> 
            {
                data.username?<>
                {console.log(data,isMobile)}
            {/* <div className='profile-desktop'><Desktop data={{...data}}/></div> */}
            <div className='profile-desktop'><Desktop data={{...data}} props={{...props}}/></div>
                <div className='profile-mobile'>
                <Mobile data={{...data}} props />
                </div>
                {/* {!isPhone?<div className='profile-desktop'><Desktop data={{...data}}/></div>:
                <div className='profile-mobile'>
                <Mobile data={{...data}} />
                </div>} */}
            {/* {!isPhone?<Desktop data={{...data}}/>:<Mobile data={{...data}}/>} */}
            </>
            :<></>}
        </>
    )
}
export default Profile;