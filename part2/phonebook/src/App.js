import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]); 
  const [newName, setNewName] = useState('');

  const handlepersonChange = (event) => {
    setNewName(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault();
    if(newName === ''){
      alert('Please fill the name');
    }else{
      const newPerson = {
        name: newName
      };
  
      const duplicate = persons.some((person) => JSON.stringify(person) === JSON.stringify(newPerson))
      if(duplicate){
        alert(`${newName} is already added to phonebook`);
      }else{
        setPersons(persons.concat(newPerson));
        setNewName('');
      }
    }
    
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlepersonChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        { persons?.map(person => <div key={person.name}>{person.name}</div>) }
    </div>
  )
}

export default App;