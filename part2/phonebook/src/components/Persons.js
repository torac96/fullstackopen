import React from "react";

const PersonDetail = ({ person }) => (
  <div>{person.name} {person.phone}</div>
)

const Persons = ({ persons }) => {
  return persons?.map(person => <PersonDetail key={person.name} person={person} />);
}

export default Persons;