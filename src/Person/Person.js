import React from 'react';

const person = (props) => {
    return <p onClick={props.click}> My name is {props.names} {props.age}</p>
}

export default person;

//Passing Functions through props.