import React, { useState, useEffect } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => getPersons(), [])

  const getPersons = () => personService.getAll().then(persons => setPersons(persons))

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  }

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  }

  const handleRemovePerson = (id) => {
    const person = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService.remove(id).then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
    }
  }

  const addPerson = (event) => {
    event.preventDefault();
    if (newName === '' || newPhone === '') {
      alert('Please fill the person information');
    } else {
      const newPerson = {
        name: newName,
        phone: newPhone
      };

      const duplicate = persons.find((person) => person.name === newPerson.name)

      if (duplicate) {
        if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
          personService.update(duplicate.id, newPerson).then(returnedPerson => {
            setPersons(persons.map(person => person.id !== duplicate.id ? person : returnedPerson))
            setNewName('');
            setNewPhone('');
          })
        }
      } else {
        personService
          .create(newPerson)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson));
            setNewName('');
            setNewPhone('');
          })
      }

    }
  }

  const personFormInfo = { addPerson, newName, handlePersonChange, newPhone, handlePhoneChange }

  const personsToShow = filterValue
    ? persons.filter((person) => person.name.toLowerCase().includes(filterValue.toLowerCase()))
    : persons

  return (
    <div>

      <h2>Phonebook</h2>
      <Filter filterValue={filterValue} handleFilterChange={handleFilterChange} />

      <h2>Add a New</h2>
      <PersonForm personFormInfo={personFormInfo} />

      <h2>Numbers</h2>
      <Persons persons={personsToShow} handleRemovePerson={handleRemovePerson} />

    </div>
  )
}

export default App;