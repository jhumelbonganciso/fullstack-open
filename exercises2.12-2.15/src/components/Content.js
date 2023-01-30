import React from 'react'
import Person from './Person'


const Content = ({ persons, setPersons, handleDelete }) => {
  return (
    <div>
      <h2>Contact List</h2>
      {persons.map(person => (
        <Person key={person.id} person={person} setPersons={setPersons} handleDelete={handleDelete}/>
      )
      )}
    </div>
  )
}

export default Content