import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>
        <h2 style={props.style}>My name is {props.name}</h2>
        <p>{props.text}</p>
        <p>I am {props.age} years old</p>
    </div>
        
  );
}

export default ChildComponent;