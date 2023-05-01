import { useEffect, useState } from 'react';
import './Profile.css';
import Requests from '../../api/requests';
import Desktop from './Desktop'
import Mobile from './Mobile';
import {isMobile} from 'react-device-detect';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/cart_context';
import Loader from '../../Components/loader/Loader';

const Profile = (props) => {
    const [data, setData] = useState({});
    const [isPhone, setIsPhone] = useState(isMobile);
    const {loginStatus}=useCartContext();
    const [hasFetchedData, setHasFetchedData] = useState(false);
    const [loader,setLoader] =useState(true);
    let navigate=useNavigate();
    const fetchProfile = async () => {
        setLoader(true);
        if(!loginStatus){
            props.toast.toast.error('Login First!');
            navigate('/login');
            return;
        }
        // const id = props.toast.toast.loading("Please wait...");
        setHasFetchedData(true);
        await Requests.profile()
        .then((res)=>{
            console.log('profilr');
            setData(res.data);
            // props.toast.toast.update(id, {isLoading: false});
            // props.toast.toast.update(id, { render: 'Error', type: "success", isLoading: false,autoClose:5000 });
            // props.toast.toast.update(id, { isLoading: false });
        })
        .catch((err)=>{
            console.log(err)
            // props.toast.toast.update(id, { render: 'Error while fetching data', type: "error", isLoading: false,autoClose:5000 });
                // props.toast.toast.update(id, { render: 'Error while fetching data', type: "error", isLoading: false, autoClose: 5000 });
                props.toast.toast.error('Error while fetching data');
            navigate('/login');
        })
        setLoader(false);
    }
    useEffect(() => {
        if (!hasFetchedData) {
            fetchProfile();
            setIsPhone(isMobile);
          }
        }, [hasFetchedData]);
        // setData({username:'neil_reac',full_name:'Neil Armstrrong',email:'wasd@gmail.com',phone:1233211231,institute:'Pune Institute Of Computer Technology',coins:200,referral:'JOBHIHO',order:[{date:'23/3/23',eventName:'CLASH',paymentStatus:'Under Review'},{date:'23/3/23',eventName:'RC',paymentStatus:'Successfull'}]})
    // },[])
    return (
        <> 
            {loader&&<Loader/>}
            {
                data.username?<>
                
                {isMobile?<Mobile data={{...data}} props={{...props}} />:<div className='profile-desktop'><Desktop data={{...data}} props={{...props}}/></div>}
                {/* {!isMobile&&<div className='profile-mobile'>
                <Mobile data={{...data}} props={{...props}} />
                </div>} */}
            {/* <div className='profile-desktop'><Desktop data={{...data}}/></div> */}
            {/* <div className='profile-desktop'><Desktop data={{...data}} props={{...props}}/></div>
                <div className='profile-mobile'>
                <Mobile data={{...data}} props={{...props}} />
                </div> */}
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