import React from 'react';
import PropTypes from 'prop-types';


const Profile = (props)=> {
  return (

<>
    <div><p> {props.children} </p></div>

    <div><p> {props.fullName} </p></div>
    
    <div><p> {props.bio} </p></div>
    
    <div><p> {props.profession} </p></div>
    
    {props.handleName(props.fullName)}

</>
  );
}

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,

}

export default Profile;

