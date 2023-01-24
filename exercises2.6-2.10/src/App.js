import { useState } from 'react'
import Content from './components/Content'
import FilteredName from './components/FilteredName'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState({})
  const [filteredName, setFilteredName] = useState("")

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setNewName(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = {
      id: persons.length + 1,
      name: newName.name,
      number: newName.number
    }

    let testData = persons.find(person => person.name === newPerson.name)

    if (testData === undefined) {
      setPersons(persons.concat(newPerson))
    } else {
      alert(`${newPerson.name} is already added on the phonebook`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <FilteredName
        filteredName={filteredName}
        setFilteredName={setFilteredName}
      />
      <PersonForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        newName={newName}
      />

      <Content
        persons={persons.filter(person => (person.name.toLowerCase().includes(filteredName.toLowerCase())))}
      />
    </div>
  )
}

export default App