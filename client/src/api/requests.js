import axios from "axios";

const hostname = window.location.hostname
// let url = "http://127.0.0.1:8000/api"
// if(hostname === "localhost") url = "http://127.0.0.1:8000/api"
// else 
let url = `https://api.credenz.in/api`
const backend = axios.create({
    baseURL: url
  });
const list = axios.create({
    baseURL: 'https://gist.githubusercontent.com/VanshTeppalwar/59454bb8ef51fa856b0fcf62f804556b/raw/fb9775363a7e1de8769bd2071cecb958703b6679/events.json'
  });  

//For Reference, create your own function
// const login = (data) => backend.post( `/auth/token/login/`, data,{headers: { "content-type": "application/json" }} );
// const register = (data) => backend.post( `/auth/users/`, data,{headers: { "content-type": "application/json" }} );
// const userquestion = (data) => backend.get( `/userquestion/${data}`, {headers: { "content-type": "application/json", "Authorization":`Token ${localStorage.getItem("auth-token")}` }} );
// const user = () => backend.get( `/auth/users/me/`, {headers: { "content-type": "application/json", "Authorization":`Token ${localStorage.getItem("auth-token")}` }} );
// const extrahint= () => backend.post( `/question/extra-hint/`,null, {headers: { "content-type": "application/json", Authorization:`Token ${localStorage.getItem("auth-token")}` }} );
// const leaderboard = () => backend.get( `/leaderboard/`, {headers: { "content-type": "application/json"}} );
// const time=() => backend.get( `/timer/`, {headers: { "content-type": "application/json"}} );
// const feedback = (data) => backend.post( `/auth/feedback/`, data,{headers: { "content-type": "application/json" }} );

const events=()=>list.get(`/`,{headers: { }} );
const login = (data) => backend.post( `/login/`, data,{headers: {}} );
const profile= ()=>backend.get(`/profile/`,{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
const register=(data)=>backend.post(`/register/`,data,{headers: { }});
const order=(data)=>backend.post(`/placeorder/`,data,{headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}});
const resetPassowrd=(data)=>backend.post(`/password-reset-confirm/`,data,{headers: { }});
const forgetPassword=(data)=>backend.post(`/password-reset/`,data,{headers: { }});
const createTeam=(data)=>backend.post(`/generate-team/`,data,{headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}});
const joinTeam=(data)=>backend.post(`/join-team/`,data,{headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}});
const viewTeam=()=>backend.get(`/view-team/`,{headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}});
const adminUpload=(data)=>backend.post(`/upload-file/`,data,{headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}});
const adminOrder=(data)=>backend.post(`/offline-order/`,data,{headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}});
const adminTable=()=>backend.get(`/orders/`,{headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}});

const Requests = {
    login,
    profile,
    register,
    events,
    order,
    forgetPassword,
    resetPassowrd,
    createTeam,
    viewTeam,
    joinTeam,
    adminUpload,
    adminOrder,
    adminTable,
  };
  export default Requests;