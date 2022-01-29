import React from "react";

const PersonDetail = ({ person, handleRemovePerson }) => (
  <div>{person.name} {person.phone} <button onClick={() => handleRemovePerson(person.id)}>Delete</button></div>
)

const Persons = ({ persons, handleRemovePerson }) => {
  return (
    <>
      <h2>Numbers</h2>
      {persons?.map(person => <PersonDetail key={person.name} person={person} handleRemovePerson={handleRemovePerson} />)}
    </>
  )
}

export default Persons;