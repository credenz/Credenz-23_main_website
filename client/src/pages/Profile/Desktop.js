import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './Desktop.css';
import tclash from "../../images/tclash.png";
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
import Requests from '../../api/requests';
// import './Mobile.css';
import ticket from '../../images/aticket.png';
const Desktop = ({ data,props }) => {
    const [teamId, setTeamId] = useState("");
    
    const handleView=()=>{
        Requests.viewTeam()
        .then((res)=>{
            console.log(res.data);
            setMyTeams(res.data);
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const handleJoin=()=>{
        const id = props.toast.toast.loading("Please wait...");
        Requests.joinTeam({team_id:teamId})
        .then((res)=>{
            console.log(res.data);
            props.toast.toast.update(id, { render: "Joined Successfully", type: "success", isLoading: false, autoClose:5000 });
        })
        .catch((err)=>{
            console.log(err);
            props.toast.toast.update(id, { render: 'Error while joining', type: "error", isLoading: false,autoClose:5000 });
        })
    }
    
    const handleCreate=()=>{
        const id = props.toast.toast.loading("Please wait...");
        // console.log(eventSelected,typeof(eventSelected));
        Requests.createTeam({event_id:eventSelected})
        .then((res)=>{
            console.log(res.data);
            props.toast.toast.update(id, { render: "Team Created", type: "success", isLoading: false, autoClose:5000 });
        })
        .catch((err)=>{
            console.log(err);
            props.toast.toast.update(id, { render: 'Team Not Created', type: "error", isLoading: false,autoClose:5000 });
        })
    }
    const [selected, setSelected] = useState(0);
    const [teamVisible, setTeamVisible] = useState(0);
    const [eventSelected, setEvnentSelected] = useState(101);
    const teamEvents=[{id:101,name:'Clash'},{id:102,name:'RC'},{id:103,name:'Enigma'},{id:104,name:'B-plan'}]
    const [myTeams,setMyTeams] = useState([]);
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
    useEffect(()=>{
        handleView();
    },[])
    return (
        <div className='dektop-profile'>
            {/* <main> */}
            <aside>
                <img src="https://media.wired.com/photos/5ec6fb698971d7886fd36024/1:1/w_1007,h_1007,c_limit/astronaut-urine-elena-lacey-wired-science.jpg" alt="avatar" />
                <h3>{data.full_name}</h3>
                <h4 class="username grey-text">{data.username}</h4>
                <p class="grey-text bio">I'm a Full Stack Developer, Educator and Maker. I stream 5 days a week on my YouTube channel Coding Garden with CJ.</p>
                {/* <p class="grey-text bio">Block or report user</p> */}
                <hr class="seperator" />
                <p class='bio'>📍 {data.institute}
                </p>
                {/* <p></p> */}
                <p class='bio'>✉️  {data.email}
                    {/* <a href="">Sign in to view email</a> */}
                </p>
                <p class='bio'> 📞 {data.phone} </p>
                <p class='bio'> 🏦 {data.coins} </p>

            </aside>
            <div style={{
                'borderLeft': '1px solid white',
                'height': 'auto'
            }}></div>

            <section className='desk-mainsec'>
                {/* <nav>
           <ul class="repo-nav">
               <li>Overview</li>
               <li>Repositories</li>
               <li>Stars</li>
               <li>Followers</li>
               <li>Following</li>
           </ul>
       </nav> */}
                <nav>
                    <ul class="repo-nav">
                        <li className={selected === 0 ? 'is-active' : ''} onClick={() => setSelected(0)}><button >Tickets</button></li>
                        <li className={selected === 1 ? 'is-active' : ''} onClick={() => setSelected(1)}><button >Team</button></li>
                        <li className={selected === 2 ? 'is-active' : ''} onClick={() => setSelected(2)}><button >Referral</button></li>
                        {/* <li>Followers</li>
               <li>Following</li> */}
                    </ul>
                </nav>
                {/* <h3 class="repos-title">Pinned Repositories</h3> */}
                {
                    selected === 0
                        ?
                        <section class="repositories">
                            <div style={{ "overflowY": 'scroll' }}>
                            <img src={tclash} style={{ 'width': '550px' }}></img>
                                <img src={tclash} style={{ 'width': '550px' }}></img>
                                <img src={tclash} style={{ 'width': '550px' }}></img>
                                <li class="image_wrapper">
                                    <img src={ticket} alt="" />
                                    <div class="overlay otitle">
                                        <p>Name : {data.full_name}</p>
                                    </div>
                                    <div class="overlay oDate">
                                        <p>Date : 15/5/2023 </p>
                                    </div>
                                    <div >
                                        <p class="overlay oFrom">From</p>
                                        <p class="overlay oTFrom">Credenz</p>
                                    </div>
                                    <div >
                                        <p class="overlay oTo">To</p>
                                        <p class="overlay oTTo">Clash</p>
                                    </div>
                                    <div class="overlay oTime">
                                        <p>Boarding Time : 8pm </p>
                                    </div>
                                    <div >
                                        <img className="overlay oImage" src={Clash} alt="" />
                                    </div>
                                    <div >
                                        <p class="overlay oStatus">Seat</p>
                                        <p class="overlay oCStatus">Not Confirmed</p>
                                    </div>
                                    <div class="overlay oRound">
                                        <p>Round : 1 </p>
                                    </div>
                                </li>
                                <li class="image_wrapper">
                                    <img src={ticket} alt="" />
                                    <div class="overlay otitle">
                                        <p>Name : {data.full_name}</p>
                                    </div>
                                    <div class="overlay oDate">
                                        <p>Date : 15/5/2023 </p>
                                    </div>
                                    <div >
                                        <p class="overlay oFrom">From</p>
                                        <p class="overlay oTFrom">Credenz</p>
                                    </div>
                                    <div >
                                        <p class="overlay oTo">To</p>
                                        <p class="overlay oTTo">Clash</p>
                                    </div>
                                    <div class="overlay oTime">
                                        <p>Boarding Time : 8pm </p>
                                    </div>
                                    <div >
                                        <img className="overlay oImage" src={Clash} alt="" />
                                    </div>
                                    <div >
                                        <p class="overlay oStatus">Seat</p>
                                        <p class="overlay oCStatus">Not Confirmed</p>
                                    </div>
                                    <div class="overlay oRound">
                                        <p>Round : 1 </p>
                                    </div>
                                </li>

                                <img src={ticket} style={{ 'width': '550px' }}>
                                    {/* <div><h3>hiee</h3></div> */}
                                
                                </img>
                            </div>
                {/*            
                <div class="pinned-repo-wrapper">
                    <div class="pinned-repo">
                        <h3>node-security</h3>
                        <p>Slides/Notes from my talk on Security Best Practices with Node.js https://www.youtube.com/watch?v=qBLgykeA3Mo</p>
                        <ul class="stats">
                            <li>
                                <span class="icon">🔵</span>
                                <span>HTML</span>
                            </li>
                            <li>
                                <span class="icon">⭐️</span>
                                <span>32</span>
                            </li>
                            <li>
                                <span class="icon">🍴</span>
                                <span>5</span>
                            </li>
                        </ul>
                    </div>
                </div> */}
                        </section>
                        :
                        selected === 1
                            ?
                            <section className='desktopProfile-section'>
                            <div style={{marginLeft:'8%',display: 'flex',justifyContent: 'space-evenly'}}>
                                                <div style={{ 'display': 'inline-block','width':'fitContent' }} className='teamJoin'>
                                                <button onClick={() => {(setTeamVisible(0)); handleView();}} style={{'width':'fit-content'}}>My Teams</button></div>
                                                <div className='teamJoin' style={{ 'display': 'inline-block' }}>
                                                    <button onClick={() => (setTeamVisible(1))} style={{'width':'fit-content'}}>Create Team</button>
                                                </div>
                                                <div className='teamJoin' style={{ 'display': 'inline-block','width':'fitContent' }}>
                                                    <button onClick={() => (setTeamVisible(2))} style={{'width':'fit-content'}}>JOIN Team</button>
                                                </div></div>
                                <div style={{'margin':'50px auto 0'}}></div>
                                {
                                    teamVisible === 0
                                        ?
                                        <div style={{display: 'grid',
justifyContent: 'center',
marginLeft: '20%',
marginRight: '20%'}}>
                                        {myTeams.map((data)=>{return (

                                        <div class="ncard">
                                            <div class="ncard-contentl">
                                            <img src={eventsList[data.event.event_id-101].logo} alt="Example Image"/>
                                                <h2>{data.event.event_name}</h2>
                                                </div>
                                                <div style={{border:'2px solid rgb(82, 85, 117)', height: 'inherit'}}></div>
                                                <div class="ncard-contentr">
                                                <p>Team Name: VanshTeppalwar </p>
                                                <p>Team Id: {data.team_id}</p>
                                                <p>Max Team Size: {data.event.group_size}</p>
                                                <p>Team Members </p> 
                                                <div style={{textAlign:'initial'}}>
                                                    <ol>
                                                {data.user.map((user,idx)=>{return(
                                                    <li >{user.username} </li>
                                                )})}
                                                </ol>
                                                </div>
                                                <p>Remaining: {data.event.group_size-data.user.length}</p>
                                            </div>
                                            </div>
                                        )

                                        })}


<article class="cta">
	<img src={Clash} alt='event'/>
	<div class="cta__text-column">
		<h2>Team Name</h2>
		<p>Team Members</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio">Read all about it</a>
	</div>
</article>
                                            
                                        </div>
                                        :
                                        teamVisible === 1
                                        ?
                                        <div className="cmembers">
                                            <p>{data.team}</p>
                                            <form className="" autoComplete="off">
                                                <div className="cform-field">
                                                    {/* <label htmlFor="player">Select Event</label> */}
                                                    <div className="cplayers">
                                                    <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Select Event
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
            <Dropdown.Item eventKey={1} onClick={()=>setEvnentSelected(101)} active={eventSelected===101?true:false}>Clash</Dropdown.Item>
          <Dropdown.Item eventKey={2} onClick={()=>setEvnentSelected(102)} active={eventSelected===102?true:false} >RC</Dropdown.Item>
          <Dropdown.Item eventKey={3} onClick={()=>setEvnentSelected(103)} active={eventSelected===103?true:false}>Enigma</Dropdown.Item>
          {/* <Dropdown.Divider /> */}
          <Dropdown.Item eventKey={4} onClick={()=>setEvnentSelected(104)} active={eventSelected===104?true:false}>B-Plan</Dropdown.Item>
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
                                                            
                                                        <div className="cfirst-division">
                                                            Selected : {teamEvents[eventSelected-101].name}
                                                        </div>
                                                        <div className="csecond-division">
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    
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
                            :
                            <section className='desktopProfile-section'>
                                <div style={{ 'marginLeft': '5%' }} className="card-section" id="contact">
                                    <div className="card-content">
                                        {/* <div className="card-subtitle">REFERRAL</div> */}
                                        <div className="card-contact-wrapper">


                                            <div className="card-contact">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16"> <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" /> </svg>
                                                <p>{data.referral}<br></br><a href={data.referral} onClick={(e) => {
                                                    e.preventDefault(); navigator.clipboard
                                                        .writeText(`${data.referral}`)
                                                        .then(() => {
                                                            alert("successfully copied");
                                                        })
                                                        .catch(() => {
                                                            alert("something went wrong");
                                                        });
                                                }}> Copy Code To Clipboard</a></p>
                                            </div>
                                            <div className="card-contact">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16"> <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" /> </svg>
                                                <p><a href={`https://localhost:3000/register/${data.referral}`} target="_blank" rel="noopener noreferrer"> {data.referral}</a><br></br><a href={`https://localhost:3000/register/${data.referral}`} onClick={(e) => {
                                                    e.preventDefault(); navigator.clipboard
                                                        .writeText(`${e.target.href}`)
                                                        .then(() => {
                                                            alert("successfully copied");
                                                        })
                                                        .catch(() => {
                                                            alert("something went wrong");
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
                                                <p className="card-desc">1)Bring Your Friends And Register For The Events To Earn Coins<br></br>2)Create their account from the above mentioned referral code or url and if they participate in any events you will earn coins.<br></br>3)You can redeem your coins to buy any events.</p>

                                            </div>
                                            {/* <button className="contact-me" >WORK TOGETHER </button> */}
                                        </div>
                                    </div>
                                </div>
                            </section>
                }

            </section>
            {/* </main> */}
        </div>

    )
}

export default Desktop;