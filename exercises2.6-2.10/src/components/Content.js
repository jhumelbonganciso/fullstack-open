import React from 'react'

const Content = ({persons}) => {
  return (
    <div>
        <h2>Contact List</h2>
        {persons.map(person => <p key={person.id}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default Content