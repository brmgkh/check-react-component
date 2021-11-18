import react from 'react';
import './App.css';
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
import ProfilePhoto from './Component/Profile/ProfilePhoto';

function App() {
  return (
    <header>
    <div className="header"> 
  
   <FullName/> 
   <Address/>
   <ProfilePhoto/> 
   
   </div>
   </header>
  )
}

export default App;
