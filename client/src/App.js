import './App.css';
import SignUp from './SignUp';
import Landing from './Landing';
import { Route, Routes } from "react-router-dom";
import SignIn from './SignIn';
import { useState, useEffect} from 'react'
import HomeFeed from './HomeFeed';



function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  if (!user) {
    return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<SignUp setUser={setUser}/>} />
      <Route path="/signin" element={<SignIn setUser={setUser}/>} />
    </Routes>
  </div>
  )
  } 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/homefeed" element={<HomeFeed user={user}/>} />
        <Route path="/signup" element={<SignUp setUser={setUser}/>} />
        <Route path="/signin" element={<SignIn setUser={setUser}/>} />
      </Routes>
    </div>
  );
}

export default App;
