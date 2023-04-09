import { useEffect, useState } from 'react';
// import './Profile.css';
import Requests from '../../api/requests';
import Desktop from './Desktop'
const Profile = () => {
    const [data, setData] = useState({});
    const buttons = document.querySelectorAll(".card-buttons button");
    const sections = document.querySelectorAll(".card-section");
    const card = document.querySelector(".card");

    const handleButtonClick = (e) => {
        const targetSection = e.target.getAttribute("data-section");
        const section = document.querySelector(targetSection);
        targetSection !== "#about"
            ? card.classList.add("is-active")
            : card.classList.remove("is-active");
        card.setAttribute("data-state", targetSection);
        sections.forEach((s) => s.classList.remove("is-active"));
        buttons.forEach((b) => b.classList.remove("is-active"));
        e.target.classList.add("is-active");
        section.classList.add("is-active");
    };

    buttons.forEach((btn) => {
        btn.addEventListener("click", handleButtonClick);
    });
    const fetchProfile = async () => {
        console.log(localStorage.getItem('token'));
        await Requests.profile({ token: localStorage.getItem('token') })
            .then((res) => {
                console.log(res);
                setData(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetchProfile();
        // setData({username:'neil_reac',full_name:'Neil Armstrrong',email:'wasd@gmail.com',phone:1233211231,institute:'Pune Institute Of Computer Technology',coins:200,referral:'JOBHIHO',order:[{date:'23/3/23',eventName:'CLASH',paymentStatus:'Under Review'},{date:'23/3/23',eventName:'RC',paymentStatus:'Successfull'}]})
    }, [])
    return (
        <>
            <Desktop/>
        </>
    )
}
export default Profile;