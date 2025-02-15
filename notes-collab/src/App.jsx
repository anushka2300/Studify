import React from "react";
import Branch from './components/Branche/Branche'
import Subject from './components/subjects/subject';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/login';
import About from './components/about/About'
import Contactus from './components/contact/Contact';
import Account from './components/account/MyAccount'
import Notes from "./components/account/Notes"
import Myuploads  from "./components/account/MyUploads"
import Favourites from './components/account/Favourites';
import Sub from './components/sub/sub'
function App() {


return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Branch/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contactus/>} />
        <Route path="/:title" element={<Subject />}/>
        <Route path="/:title/sub/:subject" element={<Sub/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/account" element={<Account />}>
        <Route index element={<Notes />} />  
        <Route path="notes" element={<Notes/>} />
        <Route path="mynotes" element={<Myuploads />} />
        <Route path="favorites" element={<Favourites />} />
        
        </Route>
        
        
      </Routes>
    </Router>

    </>
  )
}

export default App
