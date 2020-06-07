import React from 'react';
import Profile from '../src/profile/Profile';
import PropTypes from 'prop-types';

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

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,

}

export default App;
