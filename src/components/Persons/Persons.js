import React from 'react';
import Person from '../Person/Person'

const persons = (props) => props.persons.map((person, index) => {
        return <Person names={person.name} click={ () => props.clicked(index)} key={person.id}/>
      });


export default persons;

