import { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './Mobile.css';
import Clash from "../../images/clash.png";
import CLASH from "../../images/clash.png";
import RC from "../../images/rc.png";
import NTH from "../../images/nth.png";
import WALLSTREET from "../../images/wallstreet.png";
import BPLAN from "../../images/bplan.png";
import ENIGMA from "../../images/enigma.png";
import DATAWIZ from "../../images/datawiz.png";
import QUIZ from "../../images/quiz.png";
import PAPER from "../../images/paper.png";
import CRETRONIX from "../../images/cretronix.png";
import PIXELATE from "../../images/pixelate.png";
import WEB from "../../images/webwever.png";
import profile from "../../images/profile.jpeg";
import Requests from '../../api/requests';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/cart_context';

const Mobile = ({ data, props }) => {
    const [teamId, setTeamId] = useState("");
    const [selected, setSelected] = useState(0);
    const [teamVisible, setTeamVisible] = useState(0);
    const [eventSelected, setEvnentSelected] = useState(0);
    const navigate=useNavigate();
    const {changeLogout} = useCartContext();
    const teamEvents = [{ id: 101, name: 'Clash' }, { id: 102, name: 'RC' }, { id: 103, name: 'Enigma' }, { id: 104, name: 'B-plan' }]
    const handleView = () => {
        Requests.viewTeam()
            .then((res) => {
                console.log(res.data);
                setMyTeams(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleJoin = () => {
        const id = props.toast.toast.loading("Please wait...");
        Requests.joinTeam({ team_id: teamId })
            .then((res) => {
                console.log(res.data);
                props.toast.toast.update(id, { render: "Joined Successfully", type: "success", isLoading: false, autoClose: 5000 });
            })
            .catch((err) => {
                console.log(err);
                props.toast.toast.update(id, { render: 'Error while joining', type: "error", isLoading: false, autoClose: 5000 });
            })
    }

    const handleCreate = () => {
        const id = props.toast.toast.loading("Please wait...");
        // console.log(eventSelected,typeof(eventSelected));
        Requests.createTeam({ event_id: eventSelected, team_name: teamName })
            .then((res) => {
                console.log(res.data);
                props.toast.toast.update(id, { render: "Team Created", type: "success", isLoading: false, autoClose: 5000 });
                setTeamVisible(0);
            })
            .catch((err) => {
                console.log(err);
                props.toast.toast.update(id, { render: 'Team Not Created', type: "error", isLoading: false, autoClose: 5000 });
            })
    }
    const handleLogout=()=>{
        localStorage.clear();
        props.toast.toast.success('Logout Successfully!');
        navigate('/');
        changeLogout();
    }
    const [myTeams, setMyTeams] = useState([]);
    const [teamName, setTeamName] = useState('');
    const eventsList = [
        { logo: CLASH, title: "Clash", id: 101 },
        { logo: RC, title: "Reverse Coding", id: 102 },
        { logo: NTH, title: "NTH", id: 103 },
        { logo: WALLSTREET, title: "Wallstreet", id: 104 },
        { logo: BPLAN, title: "B-Plan", id: 105 },
        { logo: ENIGMA, title: "Enigma", id: 106 },
        { logo: DATAWIZ, title: "Datawiz", id: 107 },
        { logo: QUIZ, title: "Quiz", id: 108 },
        { logo: CRETRONIX, title: "Cretronix", id: 109 },
        { logo: WEB, title: "Web Weaver", id: 110 },
    ];
    // const data=props;
    useEffect(() => {
        handleView();
    }, [])
    // const buttons = document.querySelectorAll(".card-buttons button");
    // const sections = document.querySelectorAll(".card-section");
    // const card = document.querySelector(".card");

    // const handleButtonClick = (e) => {
    //     const targetSection = e.target.getAttribute("data-section");
    //     const section = document.querySelector(targetSection);
    //     targetSection !== "#about"
    //         ? card.classList.add("is-active")
    //         : card.classList.remove("is-active");
    //     card.setAttribute("data-state", targetSection);
    //     sections.forEach((s) => s.classList.remove("is-active"));
    //     buttons.forEach((b) => b.classList.remove("is-active"));
    //     e.target.classList.add("is-active");
    //     section.classList.add("is-active");
    // };

    // buttons.forEach((btn) => {
    //     btn.addEventListener("click", handleButtonClick);
    // });
    return (
        <div className="profile">
            <div className="container profiledetails">
                <div>
                    <div className="card" data-state="#about">
                        <div className="card-header">
                            {/* <div className="card-cover" style="background-image: url('https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')"></div> */}
                            {/* <img className="card-avatar" src="https://pbs.twimg.com/profile_images/561338081970638848/Y8lKkD2f_400x400.png" alt="avatar" /> */}
                            <img className="card-avatar" src={profile} alt="avatar" />
                            <h1 className="card-fullname">
                                {/* {data.first_name} {data.last_name} */}
                                {data.full_name}
                            </h1>
                            <h2 className="card-jobtitle">@{data.username}</h2>
                        </div>
                        <div className="card-main">
                            <div className={selected === 0 ? "card-section is-active" : "card-section"} id="about">
                                <div className="card-content">
                                    <div className="card-subtitle">ABOUT</div>
                                    <div className="card-contact-wrapper">
                                        <div className="card-contact">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-coin" viewBox="0 0 16 16"> <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" /> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" /> <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" /> </svg>

                                            {data.coins}
                                        </div>
                                        <div className="card-contact">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                                            {data.phone}
                                        </div>
                                        <div className="card-contact">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                <path d="M22 6l-10 7L2 6" /></svg>
                                            {data.email}
                                        </div>
                                        <div className="card-contact">

                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-book" viewBox="0 0 16 16"> <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" /> </svg>
                                            {data.institute}
                                        </div>
                                        {localStorage.getItem('token') !== null ?
                                            <div className='card-contact'>
                                                <Button onClick={(e) => { e.preventDefault();handleLogout()}}>
                                                    Logout</Button>
                                            </div> : <></>}
                                    </div>
                                    {/* <p className="card-desc">Whatever tattooed stumptown art party sriracha gentrify hashtag intelligentsia readymade schlitz brooklyn disrupt.
                            </p> */}
                                </div>
                                {/* <div className="card-social">
                            <a href="#"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" /></svg></a>
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" /></svg></a>
                            <a href="#"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
                                <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
                                <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" /></svg></a>
                            <a href="#"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" /></svg></a>
                        </div> */}
                            </div>
                            <div className={selected === 1 ? "card-section is-active" : "card-section"} id="experience">
                                <div className="card-content">
                                    <div className="card-subtitle">ORDERS</div>
                                    <div className="card-timeline">
                                        {data.order ? data.order.map((val) => <div className="card-item" data-year={val.date}>
                                            <div className="card-item-title">{val.eventName} </div>
                                            <div className="card-item-desc">Payment:{val.paymentStatus}</div>
                                        </div>) : <p>No Order yet</p>}
                                        {/* <div className="card-item" data-year="2014">
                                    <div className="card-item-title">Front-end Developer at <span>JotForm</span></div>
                                    <div className="card-item-desc">Disrupt stumptown retro everyday carry unicorn.</div>
                                </div>
                                <div className="card-item" data-year="2016">
                                    <div className="card-item-title">UI Developer at <span>GitHub</span></div>
                                    <div className="card-item-desc">Developed new conversion funnels and disrupt.</div>
                                </div> */}

                                    </div>
                                </div>
                            </div>
                            <div className={selected === 2 ? "card-section is-active" : "card-section"} id="contact">
                                <div className="card-content">
                                    {/* <div className="card-subtitle">REFERRAL</div> */}
                                    <div className="card-contact-wrapper">


                                        <div className="card-contact">
                                            <div style={{ width: '100%' }}>
                                                <section >
                                                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>

                                                        <div style={{ 'display': 'inline-block', 'width': 'fitContent' }} className='pteamJoin'>
                                                            <button onClick={() => (setTeamVisible(0))} style={{ 'width': 'fit-content' }}>My Teams</button></div>
                                                        <div className='pteamJoin' style={{ 'display': 'inline-block' }}>
                                                            <button onClick={() => (setTeamVisible(1))} style={{ 'width': 'fit-content' }}>Create Team</button>
                                                        </div>
                                                        <div className='pteamJoin' style={{ 'display': 'inline-block', 'width': 'fitContent' }}>
                                                            <button onClick={() => (setTeamVisible(2))} style={{ 'width': 'fit-content' }}>JOIN Team</button>
                                                        </div>
                                                    </div>
                                                    {
                                                        teamVisible === 0
                                                            ?
                                                            <div>
                                                                <div style={{
                                                                    display: 'grid',
                                                                    justifyContent: 'center',
                                                                    marginLeft: '2%',
                                                                    marginRight: '2%', marginTop: '8%'
                                                                }}>
                                                                
                                                                    {myTeams.length!==0?myTeams.map((data) => {
                                                                        return (

                                                                            <div class="pncard">
                                                                                <div class="pncard-contentl">
                                                                                    <img src={eventsList[data.event.event_id - 101].logo} alt="Example Image" />
                                                                                    <h2>{data.event.event_name}</h2>
                                                                                </div>
                                                                                {/* <div style={{ border: '2px solid solid rgb(86, 89, 128)', width: 'inherit' }}></div> */}
                                                                                <hr style={{'border':'2px solid aqua'}}></hr>
                                                                                <div class="pncard-contentr">
                                                                                    <h3>{data.team_name} </h3>
                                                                                    <p>Team Id: {data.team_id} <a href={data.team_id} onClick={(e) => {
                                                    e.preventDefault(); navigator.clipboard
                                                        .writeText(`${data.team_id}`)
                                                        .then(() => {
                                                            // alert("successfully copied");
                                                            // console.log(props)
                                                            props.toast.toast.success('Successfully copied')
                                                        })
                                                        .catch(() => {
                                                            // alert("something went wrong");
                                                            // console.log(props)
                                                            props.toast.toast.error('Something went wrong')
                                                        });
                                                }}> Copy</a></p>
                                                                                    <p>Team Members </p>
                                                                                    <div style={{ textAlign: 'initial' }}>
                                                                                        <ol>
                                                                                            {data.user.map((user, idx) => {
                                                                                                return (
                                                                                                    <li >{user.username} </li>
                                                                                                )
                                                                                            })}
                                                                                        </ol>
                                                                                    </div>
                                                                                    <p>Max Team Size: {data.event.group_size}</p>
                                                                                    <p>Remaining: {data.event.group_size - data.user.length}</p>
                                                                                </div>
                                                                            </div>
                                                                        )

                                                                    })
                                                                    : <h3>No Team Created</h3>
                                                                    }


                                                                    {/* <article class="cta">
                                                                        <img src={Clash} alt='event' />
                                                                        <div class="cta__text-column">
                                                                            <h2>Team Name</h2>
                                                                            <p>Team Members</p>
                                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio">Read all about it</a>
                                                                        </div>
                                                                    </article> */}

                                                                </div>
                                                            </div>
                                                            :
                                                            teamVisible === 1
                                                                ?
                                                                <div className="pcmembers">
                                                                    <p>{data.team}</p>
                                                                    <form className="" autoComplete="off" onSubmit={(e) => {
                                                                        e.preventDefault(); if (teamName.length >= 4) handleCreate()
                                                                        else props.toast.toast.info("Minimum 4 characters for Team name")
                                                                    }}>
                                                                        <div className="pcform-field">
                                                                            {/* <label htmlFor="player">Select Event</label> */}
                                                                            <div className="pcplayers">
                                                                                <label htmlFor="teamName">Enter Team Name</label>
                                                                                <input
                                                                                    className='teamName'
                                                                                    name="teamName"
                                                                                    type="text"
                                                                                    id="teamName"
                                                                                    placeholder="Team Name"
                                                                                    value={teamName}
                                                                                    onChange={(e) => {
                                                                                        e.preventDefault()
                                                                                        // handleplayerChange(e)
                                                                                        setTeamName(e.target.value)
                                                                                    }
                                                                                    }
                                                                                    required
                                                                                />
                                                                                <Dropdown>
                                                                                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                                                                    {eventSelected===0?'Select Event':teamEvents[eventSelected-101].name}
                                                                                    </Dropdown.Toggle>

                                                                                    <Dropdown.Menu variant="dark">
                                                                                        <Dropdown.Item href="#/action-1" onClick={(e) => {e.preventDefault();setEvnentSelected(101)}} active={eventSelected === 101 ? true : false}>
                                                                                            Clash
                                                                                        </Dropdown.Item>
                                                                                        <Dropdown.Item href="#/action-2" onClick={(e) => {e.preventDefault();setEvnentSelected(102)}} active={eventSelected === 102 ? true : false} >RC</Dropdown.Item>
                                                                                        {/* <Dropdown.Item href="#/action-3" onClick={() => setEvnentSelected(103)} active={eventSelected === 103 ? true : false}>Enigma</Dropdown.Item> */}
                                                                                        {/* <Dropdown.Divider /> */}
                                                                                        {/* <Dropdown.Item href="#/action-4" onClick={() => setEvnentSelected(104)} active={eventSelected === 104 ? true : false}>B-Plan</Dropdown.Item> */}
                                                                                    </Dropdown.Menu>
                                                                                </Dropdown>
                                                                                {/* <input
                                                                name="player"
                                                                type="text"
                                                                id="player"
                                                                placeholder="Team Id"
                                                                value={teamId}
                                                                onChange={(e) =>
                                                                    // handleplayerChange(e)
                                                                    setTeamId(e.target.value)
                                                                }
                                                                required
                                                            /> */}

                                                                                <div className="pcfirst-division">
                                                                                    {/* Selected : {teamEvents[eventSelected - 101].name} */}
                                                                                </div>
                                                                                <div className="pcsecond-division">
                                                                                    <button
                                                                                        type="button"
                                                                                        onClick={() =>
                                                                                            // handleplayerRemove(0)
                                                                                            // console.log(eventSelected)
                                                                                            handleCreate()
                                                                                        }
                                                                                        className="remove-btn"
                                                                                    >
                                                                                        <span>Create</span>
                                                                                    </button>

                                                                                </div>
                                                                            </div>

                                                                        </div>

                                                                        {/* <div className="output">
                                                    <a href="#" onClick={(e) => { e.preventDefault(); setTeamVisible(0) }}>Back to team</a>
                                                    {player &&
                                                player[0].map((singleplayer, index) => (
                                                    <ul key={index}>
                                                        {singleplayer.player && <li>{singleplayer.player}</li>}
                                                    </ul>
                                                ))}
                                                </div> */}

                                                                    </form>
                                                                </div>
                                                                :
                                                                <div className="members">
                                                                    <p>{data.team}</p>
                                                                    <form className="" autoComplete="off">
                                                                        <div className="form-field">
                                                                            <label htmlFor="player">Enter Team Id</label>
                                                                            <div className="players">
                                                                                <div className="first-division">
                                                                                    <input
                                                                                        name="player"
                                                                                        type="text"
                                                                                        id="player"
                                                                                        placeholder="Team Id"
                                                                                        value={teamId}
                                                                                        onChange={(e) =>
                                                                                            // handleplayerChange(e)
                                                                                            setTeamId(e.target.value)
                                                                                        }
                                                                                        required
                                                                                    />

                                                                                </div>
                                                                                <div className="jsecond-division">
                                                                                    <button
                                                                                        type="button"
                                                                                        onClick={(e) =>
                                                                                            // handleplayerRemove(0)
                                                                                            // console.log(teamId)
                                                                                            handleJoin(e)
                                                                                        }
                                                                                        className="remove-btn"
                                                                                    >
                                                                                        <span>Join</span>
                                                                                    </button>

                                                                                </div>
                                                                            </div>

                                                                        </div>

                                                                        {/* <div className="output">
                                                    <a href="#" onClick={(e) => { e.preventDefault(); setTeamVisible(0) }}>Back to team</a>
                                                    {player &&
                                                player[0].map((singleplayer, index) => (
                                                    <ul key={index}>
                                                        {singleplayer.player && <li>{singleplayer.player}</li>}
                                                    </ul>
                                                ))}
                                                </div> */}

                                                                    </form>
                                                                </div>
                                                    }
                                                </section>
                                            </div>
                                        </div>


                                        {/* <button className="contact-me" >WORK TOGETHER </button> */}
                                    </div>
                                </div>
                            </div>
                            <div className={selected === 3 ? "card-section is-active" : "card-section"} id="contact">
                                <div className="card-content">
                                    <div className="card-subtitle">REFERRAL</div>
                                    <div className="card-contact-wrapper">


                                        <div className="card-contact">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16"> <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" /> </svg>
                                            <p>{data.referral}<br></br><a href={data.referral} onClick={(e) => {
                                                e.preventDefault(); navigator.clipboard
                                                    .writeText(`${data.referral}`)
                                                    .then(() => {
                                                        // alert("successfully copied");
                                                        props.toast.toast.success('Successfully copied')
                                                    })
                                                    .catch(() => {
                                                        // alert("something went wrong");
                                                        props.toast.toast.error('Something went wrong')
                                                    });
                                            }}> Copy Code To Clipboard</a></p>
                                        </div>
                                        <div className="card-contact">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16"> <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" /> </svg>
                                            <p><a href={`${window.location.origin}/register/${data.referral}`} target="_blank" rel="noopener noreferrer"> {data.referral}</a><br></br><a href={`${window.location.origin}/register/${data.referral}`} onClick={(e) => {
                                                e.preventDefault(); navigator.clipboard
                                                    .writeText(`${e.target.href}`)
                                                    .then(() => {
                                                        // alert("successfully copied");
                                                        props.toast.toast.success('Successfully copied')
                                                    })
                                                    .catch(() => {
                                                        // alert("something went wrong");
                                                        props.toast.toast.error('Something went wrong')
                                                    });
                                            }}> Copy Link To Clipboard</a></p>
                                        </div>
                                        <div className="card-contact">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-qr-code-scan" viewBox="0 0 16 16"> <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z" /> <path d="M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z" /> <path d="M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z" /> <path d="M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z" /> <path d="M12 9h2V8h-2v1Z" /> </svg>
                                            <img src={`https://chart.googleapis.com/chart?cht=qr&chl=https://localhost:3000/register/${data.referral}&chs=100x100&chld=L|0`}
                                                className="profile-qr-code img-thumbnail img-responsive" alt='QR CODE' />
                                        </div>
                                        <div className="card-contact">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" /> <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /> </svg>
                                            <p className="card-desc">1) Bring Your Friends And Register For The Events To Earn Coins<br></br>2) Create their account from the above mentioned referral code or url and if they participate in any events you will earn coins.<br></br>3) You can redeem your coins to buy any events.</p>

                                        </div>
                                        {/* <button className="contact-me" >WORK TOGETHER </button> */}
                                    </div>
                                </div>
                            </div>
                            <div className="card-buttons">
                                <button data-section="#about" className={selected === 0 ? "is-active" : ""} onClick={() => { setSelected(0) }}>ABOUT</button>
                                <button data-section="#experience" className={selected === 1 ? "is-active" : ""} onClick={() => { setSelected(1) }}>TICKETS</button>
                                <button data-section="#contact" className={selected === 2 ? "is-active" : ""} onClick={() => { setSelected(2) }}>TEAM</button>
                                <button data-section="#contact" className={selected === 3 ? "is-active" : ""} onClick={() => { setSelected(3) }}>REFERRAL</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Mobile;