import React from 'react';

const PersonForm = ({ personFormInfo }) => {
  const { addPerson, newName, handlePersonChange, newPhone, handlePhoneChange } = personFormInfo;

  return (
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
  );
}

export default PersonForm;