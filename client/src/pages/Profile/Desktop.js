import './Desktop.css';
const Desktop = () => {
    return (
       <div className='dektop-profile'>
       {/* <main> */}
       <aside>
       <img src="https://media.wired.com/photos/5ec6fb698971d7886fd36024/1:1/w_1007,h_1007,c_limit/astronaut-urine-elena-lacey-wired-science.jpg" alt="avatar" />
       <h3>CJ R.</h3>
       <h4 class="username grey-text">w3cj</h4>
       <p class="grey-text bio">I'm a Full Stack Developer, Educator and Maker. I stream 5 days a week on my YouTube channel Coding Garden with CJ.</p>
       <p class="grey-text">Block or report user</p>
       <hr class="seperator" />
       <p>📍 Denver, CO</p>
       <p>✉️ <a href="">Sign in to view email</a></p>
       <p>🔗 <a href="">https://w3cj.now.sh</a></p>
   </aside>
   <section>
       <nav>
           <ul class="repo-nav">
               <li>Overview</li>
               <li>Repositories</li>
               <li>Stars</li>
               <li>Followers</li>
               <li>Following</li>
           </ul>
       </nav>
       <h3 class="repos-title">Pinned Repositories</h3>
       <section class="repositories">
           <div class="pinned-repo-wrapper">
               <div class="pinned-repo">
                   <h3>materialize-themes</h3>
                   <p>Pre-generated materialize css color combinations. https://w3cj.github.io/materialize-themes/</p>
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
           </div>
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
           </div>
           <div class="pinned-repo-wrapper">
               <div class="pinned-repo">
                   <h3>es-explained</h3>
                   <p>ECMAScript, TC39 and The Future of JavaScript. Slides/notes/links from my meetup talk at DenverScript https://www.meetup.com/DenverScript/events/233376991/</p>
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
           </div>
           <div class="pinned-repo-wrapper">
               <div class="pinned-repo">
                   <h3>git-fly</h3>
                   <p>A command line tool to temporarily clone, run and open git repos on the fly.</p>
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
           </div>
           <div class="pinned-repo-wrapper">
               <div class="pinned-repo">
                   <h3>meetup-talks</h3>
                   <p>Meetup Talks by CJ</p>
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
           </div>
           <div class="pinned-repo-wrapper">
               <div class="pinned-repo">
                   <h3>mastery</h3>
                   <p>A tool for self assessed mastery tracking of a standards based curriculum.</p>
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
           </div>
       </section>
   </section>
       {/* </main> */}
   </div>
       
    )
}

export default Desktop;