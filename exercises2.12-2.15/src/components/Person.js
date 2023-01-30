import React from 'react'
import persons from '../services/persons'
const Person = ({ person, handleDelete }) => {

    return (
        <div>
            <p >{person.name} {person.number} <button onClick={(e) => handleDelete(person.id)}>delete</button></p>
        </div>
    )
}

export default Person