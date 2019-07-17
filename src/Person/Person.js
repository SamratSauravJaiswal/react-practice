import React from 'react';

const person = (props) => {
    return(
        <div>
            <h4> I'm {props.name} and my age is {props.age} </h4>
            <p> {props.children} </p>
        </div>
    )
};

export default person;