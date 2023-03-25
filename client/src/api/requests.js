import axios from "axios";

const hostname = window.location.hostname
let url = "http://127.0.0.1:8000/api"
// if(hostname === "localhost") url = "http://127.0.0.1:8000/"
// else url = `https://admin.nth.pictieee.in/api`
const backend = axios.create({
    baseURL: url
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

const events=()=>backend.get(`/events/`,{headers: { }} );
const login = (data) => backend.post( `/login/`, data,{headers: {}} );
const profile= (data)=>backend.get(`/profile/`,{headers:{Authorization:`Bearer ${data.token}`}});
const register=(data)=>backend.post(`/register/`,data,{headers: {}});
const Requests = {
    login,
    profile,
    register,
    // userquestion,
    // user,
    // extrahint,
    // leaderboard,
    // time,
    // feedback.
    events
  };
  export default Requests;