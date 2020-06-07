import React from 'react';


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

export default Profile;

