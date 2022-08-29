import './App.css';
import SignUp from './SignUp';
import Landing from './Landing';
import { Route, Routes } from "react-router-dom";
import SignIn from './SignIn';
import { useState, useEffect} from 'react'
import HomeFeed from './HomeFeed';
import CreateCheep from './CreateCheep';
import LogOut from './LogOut';
import ProfilePage from './ProfilePage';
import ProfilePageView from './ProfilePageView';
import ProfilePageEdit from './ProfilePageEdit';
import CreateCheepFromProfile from './CreateCheepFromProfile';
import Explore from './Explore';



function App() {
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState(null)
  const [myCheeps, setMyCheeps] = useState([])

  useEffect(() => {
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch('/users').then((r) => {
      if (r.ok) {
        r.json().then((cheeps) => setUsers(cheeps));
      }}); 
    }, [user])

  useEffect(() => {
    fetch('/myCheeps').then((r) => {
      if (r.ok) {
        r.json().then((cheeps) => setMyCheeps(cheeps));
      }}); 
    }, [user])

    const onDeleteCheep = (id) => {
      const cleanCheeps = myCheeps.filter(
        (cheep) => cheep.id !== id
      )
      setMyCheeps(cleanCheeps);
    }


  // if (!user) {
  //   return (
  //   <div className="App">
  //   <Routes>
  //     <Route path="/" element={<Landing />} />
  //     <Route path="/signup" element={<SignUp setUser={setUser}/>} />
  //     <Route path="/signin" element={<SignIn setUser={setUser}/>} />
  //   </Routes>
  // </div>
  // )
  // } 
  return (
    <div className="App">
      <img src="https://www.seekpng.com/png/full/111-1110814_bird-computer-icons-purple-clip-art-bird-clip.png" alt="cheep_icon" className="cheep_icon"></img>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/homefeed" element={
          <div>
          <CreateCheep setMyCheeps={setMyCheeps} myCheeps={myCheeps} />
          <br></br>
          <ProfilePage/>
          <HomeFeed myCheeps={myCheeps} user={user} users={users}/> 
          <LogOut setUser={setUser} />
        </div>} />
        <Route path='/profile' element={
        <div>
          <CreateCheepFromProfile setMyCheeps={setMyCheeps} myCheeps={myCheeps} />
          <ProfilePageView onDeleteCheep={onDeleteCheep} setMyCheeps={setMyCheeps} myCheeps={myCheeps} user={user}/>
        </div>} />
        <Route path="/explore" element={<Explore users={users} me={user} setUser={setUser}/>} />
        <Route path='/profile/edit' element={<ProfilePageEdit setUser={setUser} user={user}/>} />
        <Route path="/signup" element={<SignUp setUser={setUser}/>} />
        <Route path="/signin" element={<SignIn setUser={setUser}/>} />
      </Routes>
    </div>
  );
}

export default App;
