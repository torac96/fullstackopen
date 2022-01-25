import React, { useState } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [filterValue, setFilterValue] = useState('');

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