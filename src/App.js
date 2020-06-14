import React from 'react';
import Profile from '../src/profile/Profile';


const App = ()=> {

  const  handleName = (name) => {
    alert(`je suis ${name}`);
  }

  return (

 <Profile
    fullName="Ahmed" bio="je suis un artiste " profession="Artist"  handleName={handleName} >

    <img src="testi.png" alt="taswira" height="100px" width="100px" />

 </Profile> 
  );
}



export default App;
