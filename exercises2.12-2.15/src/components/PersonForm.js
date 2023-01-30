import React from 'react'

const PersonForm = ({handleSubmit, handleChange, newName}) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          name: <input
            type={"text"}
            name="name"
            value={newName.name || ""}
            onChange={handleChange}
          />

        </div>
        <div>
          number: <input
            type={"text"}
            name="number"
            value={newName.number || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            type="submit"
          >add</button>
        </div>
      </form>
  )
}

export default PersonForm