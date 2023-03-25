import { useEffect, useState } from "react";
// import { Users } from "./users";
import "./TablePage.css";
import Table from "./Table";
// import axios from "axios";

//////////////////////BASIC SEARCH

// function App() {
//   const [query, setQuery] = useState("");
//   return (
//     <div className="app">
//       <input
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />
//       <ul className="list">
//         {Users.filter((asd) =>
//           asd.first_name.toLowerCase().includes(query)
//         ).map((user) => (
//           <li className="listItem" key={user.id}>
//             {user.first_name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

///////////////////////SEARCH ON A DATATABLE

function TablePage() {
    const Users=[
        {
          "id": 1,
          "first_name": "Emiline",
          "last_name": "McClune",
          "email": "emcclune0@xrea.com",
          "gender": "Female",
        },
        {
          "id": 2,
          "first_name": "Felix",
          "last_name": "Ingleston",
          "email": "fingleston1@hibu.com",
          "gender": "Female",
        },
        {
          "id": 3,
          "first_name": "Travus",
          "last_name": "Bergstram",
          "email": "tbergstram2@pbs.org",
          "gender": "Female",
        },
        {
          "id": 4,
          "first_name": "Holly-anne",
          "last_name": "Knighton",
          "email": "hknighton3@booking.com",
          "gender": "Female",
        },
        {
          "id": 5,
          "first_name": "Sollie",
          "last_name": "Naulty",
          "email": "snaulty4@hud.gov",
          "gender": "Male"
       , },
        {
          "id": 6,
          "first_name": "Annie",
          "last_name": "Cockayme",
          "email": "acockayme5@tuttocitta.it",
          "gender": "Male"
       , },
        {
          "id": 7,
          "first_name": "Celinda",
          "last_name": "Sharvill",
          "email": "csharvill6@narod.ru",
          "gender": "Male"
       , },
        {
          "id": 8,
          "first_name": "Lamond",
          "last_name": "Ricket", 
          "email": "lricket7@washington.edu",
          "gender": "Male"
       , },
        {
          "id": 9,
          "first_name": "Florida",
          "last_name": "Licciardiello",
          "email": "flicciardiello8@sina.com.cn",
          "gender": "Female",
        },
        {
          "id": 10,
          "first_name": "Gerianne",
          "last_name": "Jonas",
          "email": "gjonas9@typepad.com",
          "gender": "Female",
        },
        {
          "id": 11,
          "first_name": "Amy",
          "last_name": "Tarbath",
          "email": "atarbatha@t.co",
          "gender": "Male"
       , },
        {
          "id": 12,
          "first_name": "Jerrilyn",
          "last_name": "Devil",
          "email": "jdevilb@upenn.edu",
          "gender": "Male"
       , },
        {
          "id": 13,
          "first_name": "Derrik",
          "last_name": "Halvorsen",
          "email": "dhalvorsenc@loc.gov",
          "gender": "Male"
       , },
        {
          "id": 14,
          "first_name": "Kellia",
          "last_name": "Driutti",
          "email": "kdriuttid@skyrock.com",
          "gender": "Male"
       , },
        {
          "id": 15,
          "first_name": "Denys",
          "last_name": "Abrams",
          "email": "dabramse@godaddy.com",
          "gender": "Male"
       , },
        {
          "id": 16,
          "first_name": "Sophie",
          "last_name": "Wadmore",
          "email": "swadmoref@taobao.com",
          "gender": "Male"
       , },
        {
          "id": 17,
          "first_name": "Ivonne",
          "last_name": "Axby",
          "email": "iaxbyg@paginegialle.it",
          "gender": "Male"
       , },
        {
          "id": 18,
          "first_name": "Andee",
          "last_name": "Babcock",
          "email": "ababcockh@hubpages.com",
          "gender": "Female",
        },
        {
          "id": 19,
          "first_name": "Shawn",
          "last_name": "Baxstair",
          "email": "sbaxstairi@artisteer.com",
          "gender": "Female",
        },
        {
          "id": 20,
          "first_name": "Randolph",
          "last_name": "Chowne",
          "email": "rchownej@nymag.com",
          "gender": "Male"
       , },
        {
          "id": 21,
          "first_name": "Hayward",
          "last_name": "Emmet",
          "email": "hemmetk@ustream.tv",
          "gender": "Female",
        },
        {
          "id": 22,
          "first_name": "Paule",
          "last_name": "Kleinhausen",
          "email": "pkleinhausenl@bigcartel.com",
          "gender": "Male"
       , },
        {
          "id": 23,
          "first_name": "Berton",
          "last_name": "Wingeatt",
          "email": "bwingeattm@taobao.com",
          "gender": "Female",
        },
        {
          "id": 24,
          "first_name": "Ameline",
          "last_name": "Jeanon",
          "email": "ajeanonn@bandcamp.com",
          "gender": "Female",
        },
        {
          "id": 25,
          "first_name": "Shepperd",
          "last_name": "Oertzen",
          "email": "soertzeno@arstechnica.com",
          "gender": "Male"
       , },
        {
          "id": 26,
          "first_name": "Sean",
          "last_name": "Veltmann",
          "email": "sveltmannp@jigsy.com",
          "gender": "Male"
       , },
        {
          "id": 27,
          "first_name": "Julie",
          "last_name": "Pigot",
          "email": "jpigotq@archive.org",
          "gender": "Male"
       , },
        {
          "id": 28,
          "first_name": "Goldi",
          "last_name": "Tink",
          "email": "gtinkr@tripod.com",
          "gender": "Male"
       , },
        {
          "id": 29,
          "first_name": "Jeannie",
          "last_name": "Kennelly",
          "email": "jkennellys@hugedomains.com",
          "gender": "Male"
       , },
        {
          "id": 30,
          "first_name": "Josephine",
          "last_name": "Kennefick",
          "email": "jkennefickt@icq.com",
          "gender": "Female",
        },
        {
          "id": 31,
          "first_name": "Elli",
          "last_name": "Pettigrew",
          "email": "epettigrewu@nsw.gov.au",
          "gender": "Female",
        },
        {
          "id": 32,
          "first_name": "Nevins",
          "last_name": "McGlaughn",
          "email": "nmcglaughnv@webnode.com",
          "gender": "Male"
       , },
        {
          "id": 33,
          "first_name": "Roseann",
          "last_name": "Schwant",
          "email": "rschwantw@bandcamp.com",
          "gender": "Female",
        },
        {
          "id": 34,
          "first_name": "Hunt",
          "last_name": "McGaughay",
          "email": "hmcgaughayx@freewebs.com",
          "gender": "Polygen,der"
        },
        {
          "id": 35,
          "first_name": "Inger",
          "last_name": "Sussans",
          "email": "isussansy@webnode.com",
          "gender": "Male"
       , }];
  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
return (
  <div className="tablePage">
      Enter Name To Find
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
    {<Table data={search(Users)} />}
  </div>
);
}


////////////////////// API SEARCH

// function TablePage() {
//   const [query, setQuery] = useState("");
//   const [data, setData] = useState([
//     {
//       "id": 1,
//       "first_name": "Emiline",
//       "last_name": "McClune",
//       "email": "emcclune0@xrea.com",
//       "gender": "Female",
//     },
//     {
//       "id": 2,
//       "first_name": "Felix",
//       "last_name": "Ingleston",
//       "email": "fingleston1@hibu.com",
//       "gender": "Female",
//     },
//     {
//       "id": 3,
//       "first_name": "Travus",
//       "last_name": "Bergstram",
//       "email": "tbergstram2@pbs.org",
//       "gender": "Female",
//     },
//     {
//       "id": 4,
//       "first_name": "Holly-anne",
//       "last_name": "Knighton",
//       "email": "hknighton3@booking.com",
//       "gender": "Female",
//     },
//     {
//       "id": 5,
//       "first_name": "Sollie",
//       "last_name": "Naulty",
//       "email": "snaulty4@hud.gov",
//       "gender": "Male"
//    , },
//     {
//       "id": 6,
//       "first_name": "Annie",
//       "last_name": "Cockayme",
//       "email": "acockayme5@tuttocitta.it",
//       "gender": "Male"
//    , },
//     {
//       "id": 7,
//       "first_name": "Celinda",
//       "last_name": "Sharvill",
//       "email": "csharvill6@narod.ru",
//       "gender": "Male"
//    , },
//     {
//       "id": 8,
//       "first_name": "Lamond",
//       "last_name": "Ricket",
//       "email": "lricket7@washington.edu",
//       "gender": "Male"
//    , },
//     {
//       "id": 9,
//       "first_name": "Florida",
//       "last_name": "Licciardiello",
//       "email": "flicciardiello8@sina.com.cn",
//       "gender": "Female",
//     },
//     {
//       "id": 10,
//       "first_name": "Gerianne",
//       "last_name": "Jonas",
//       "email": "gjonas9@typepad.com",
//       "gender": "Female",
//     },
//     {
//       "id": 11,
//       "first_name": "Amy",
//       "last_name": "Tarbath",
//       "email": "atarbatha@t.co",
//       "gender": "Male"
//    , },
//     {
//       "id": 12,
//       "first_name": "Jerrilyn",
//       "last_name": "Devil",
//       "email": "jdevilb@upenn.edu",
//       "gender": "Male"
//    , },
//     {
//       "id": 13,
//       "first_name": "Derrik",
//       "last_name": "Halvorsen",
//       "email": "dhalvorsenc@loc.gov",
//       "gender": "Male"
//    , },
//     {
//       "id": 14,
//       "first_name": "Kellia",
//       "last_name": "Driutti",
//       "email": "kdriuttid@skyrock.com",
//       "gender": "Male"
//    , },
//     {
//       "id": 15,
//       "first_name": "Denys",
//       "last_name": "Abrams",
//       "email": "dabramse@godaddy.com",
//       "gender": "Male"
//    , },
//     {
//       "id": 16,
//       "first_name": "Sophie",
//       "last_name": "Wadmore",
//       "email": "swadmoref@taobao.com",
//       "gender": "Male"
//    , },
//     {
//       "id": 17,
//       "first_name": "Ivonne",
//       "last_name": "Axby",
//       "email": "iaxbyg@paginegialle.it",
//       "gender": "Male"
//    , },
//     {
//       "id": 18,
//       "first_name": "Andee",
//       "last_name": "Babcock",
//       "email": "ababcockh@hubpages.com",
//       "gender": "Female",
//     },
//     {
//       "id": 19,
//       "first_name": "Shawn",
//       "last_name": "Baxstair",
//       "email": "sbaxstairi@artisteer.com",
//       "gender": "Female",
//     },
//     {
//       "id": 20,
//       "first_name": "Randolph",
//       "last_name": "Chowne",
//       "email": "rchownej@nymag.com",
//       "gender": "Male"
//    , },
//     {
//       "id": 21,
//       "first_name": "Hayward",
//       "last_name": "Emmet",
//       "email": "hemmetk@ustream.tv",
//       "gender": "Female",
//     },
//     {
//       "id": 22,
//       "first_name": "Paule",
//       "last_name": "Kleinhausen",
//       "email": "pkleinhausenl@bigcartel.com",
//       "gender": "Male"
//    , },
//     {
//       "id": 23,
//       "first_name": "Berton",
//       "last_name": "Wingeatt",
//       "email": "bwingeattm@taobao.com",
//       "gender": "Female",
//     },
//     {
//       "id": 24,
//       "first_name": "Ameline",
//       "last_name": "Jeanon",
//       "email": "ajeanonn@bandcamp.com",
//       "gender": "Female",
//     },
//     {
//       "id": 25,
//       "first_name": "Shepperd",
//       "last_name": "Oertzen",
//       "email": "soertzeno@arstechnica.com",
//       "gender": "Male"
//    , },
//     {
//       "id": 26,
//       "first_name": "Sean",
//       "last_name": "Veltmann",
//       "email": "sveltmannp@jigsy.com",
//       "gender": "Male"
//    , },
//     {
//       "id": 27,
//       "first_name": "Julie",
//       "last_name": "Pigot",
//       "email": "jpigotq@archive.org",
//       "gender": "Male"
//    , },
//     {
//       "id": 28,
//       "first_name": "Goldi",
//       "last_name": "Tink",
//       "email": "gtinkr@tripod.com",
//       "gender": "Male"
//    , },
//     {
//       "id": 29,
//       "first_name": "Jeannie",
//       "last_name": "Kennelly",
//       "email": "jkennellys@hugedomains.com",
//       "gender": "Male"
//    , },
//     {
//       "id": 30,
//       "first_name": "Josephine",
//       "last_name": "Kennefick",
//       "email": "jkennefickt@icq.com",
//       "gender": "Female",
//     },
//     {
//       "id": 31,
//       "first_name": "Elli",
//       "last_name": "Pettigrew",
//       "email": "epettigrewu@nsw.gov.au",
//       "gender": "Female",
//     },
//     {
//       "id": 32,
//       "first_name": "Nevins",
//       "last_name": "McGlaughn",
//       "email": "nmcglaughnv@webnode.com",
//       "gender": "Male"
//    , },
//     {
//       "id": 33,
//       "first_name": "Roseann",
//       "last_name": "Schwant",
//       "email": "rschwantw@bandcamp.com",
//       "gender": "Female",
//     },
//     {
//       "id": 34,
//       "first_name": "Hunt",
//       "last_name": "McGaughay",
//       "email": "hmcgaughayx@freewebs.com",
//       "gender": "Polygen,der"
//     },
//     {
//       "id": 35,
//       "first_name": "Inger",
//       "last_name": "Sussans",
//       "email": "isussansy@webnode.com",
//       "gender": "Male"
//    , }]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await axios.get(`http://localhost:5000?q=${query}`);
//       setData(res.data);
//     };
//     if (query.length === 0 || query.length > 2) fetchData();
    
//   }, [query]);

//   return (
//     <div className="tablePage">
//         <input
//           className="search"
//           placeholder="Search..."
//           onChange={(e) => setQuery(e.target.value.toLowerCase())}
//         />
//       {<Table data={data} />}
//     </div>
//   );
// }

export default TablePage;