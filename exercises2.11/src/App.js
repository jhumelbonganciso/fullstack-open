import axios from 'axios'
import { useEffect, useState } from 'react'
import Content from './components/Content'
import FilteredName from './components/FilteredName'
import PersonForm from './components/PersonForm'

const App = () => {

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  }, [])

  const [persons, setPersons] = useState([])

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

    setNewName({
      name: "",
      number: ""
    })

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