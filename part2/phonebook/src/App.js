import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '+39-3886589944' }
  ]); 
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  }
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault();
    if(newName === '' || newPhone === ''){
      alert('Please fill the person information');
    }else{
      const newPerson = {
        name: newName,
        phone: newPhone
      };
  
      const duplicate = persons.some((person) => JSON.stringify(person) === JSON.stringify(newPerson))
      if(duplicate){
        alert(`${newName} is already added to phonebook`);
      }else{
        setPersons(persons.concat(newPerson));
        setNewName('');
        setNewPhone('');
      }
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          number: <input value={newPhone} onChange={handlePhoneChange} />
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        { persons?.map(person => <div key={person.name}>{person.name} {person.phone}</div>) }
    </div>
  )
}

export default App;