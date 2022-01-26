import React, { useState, useEffect } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  }

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
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

      const duplicate = persons.some((person) => JSON.stringify(person) === JSON.stringify(newPerson))

      if (duplicate) {
        alert(`${newName} is already added to phonebook`);
      } else {
        setPersons(persons.concat(newPerson));
        setNewName('');
        setNewPhone('');
      }

    }
  }

  const personFormInfo = {
    addPerson: addPerson,
    newName: newName,
    handlePersonChange: handlePersonChange,
    newPhone: newPhone,
    handlePhoneChange: handlePhoneChange
  }

  const personsToShow = filterValue
    ? persons.filter((person) => person.name.toLowerCase().includes(filterValue.toLowerCase()))
    : persons

  return (
    <div>
    
      <h2>Phonebook</h2>
      <Filter filterValue={filterValue} handleFilterChange={handleFilterChange} />
      
      <h2>Add a New</h2>
      <PersonForm personFormInfo={personFormInfo}/>
      
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />

    </div>
  )
}

export default App;