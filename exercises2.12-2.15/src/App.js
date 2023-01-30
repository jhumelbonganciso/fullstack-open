
import { useEffect, useState } from 'react'
import Content from './components/Content'
import FilteredName from './components/FilteredName'
import PersonForm from './components/PersonForm'
import personsService from './services/persons'

const App = () => {

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons =>
        setPersons(initialPersons)
      )
  }, [])

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState({})
  const [filteredName, setFilteredName] = useState("")


  const handleDelete = (id) => {
    const p = persons.find(person => person.id === id)
    const message = `Delete ${p.name}?`
    console.log(message)

    if (window.confirm(message)) {
      personsService
        .deletePerson(id)
        .then(response => {
          const newList = persons.filter(person => person.id !== id)
          setPersons(newList)
        })
    }

  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setNewName(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName.name,
      number: newName.number
    }

    let testData = persons.find(person => person.name === newPerson.name)

    if (testData === undefined) {
      newPerson.id = persons[persons.length - 1].id + 1
      personsService
        .create(newPerson)
        .then(returnedPersons => {
          console.log(returnedPersons)
          setPersons(persons.concat(returnedPersons))
          setNewName({
            name: "",
            number: ""
          })
        })
    } else {
      console.log(testData)
      const message = `${testData.name} is already added to phonebook, replace the old number with a new one? `
      if (window.confirm(message)) {
        const changedNum = { ...testData, number: newName.number }
        console.log(changedNum)
        personsService
          .update(changedNum.id, changedNum)
          .then(response => {
            console.log(response)
            setPersons(persons.map(p => p.id !== changedNum.id ? p : response))
          })
      }
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
        persons={persons}
        setPersons={setPersons}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default App