import { useState } from "react"
import prototype from 'prop-types'
import TextInput from "../TextInput"

NewGameForm.prototype = {
  addGame: prototype.func
}

// eslint-disable-next-line react/prop-types
export default function NewGameForm( {addGame} ) {
  const [title, setTitle] = useState("")
  const [cover, setCover] = useState("")

  const handleSubmit = (ev) => {
    ev.preventDefault()
    addGame({ title, cover })
    setTitle("")
    setCover("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput id="Título:" label="Título:" setValue={setTitle} value={title} />
      <TextInput id="Capa:" label="Capa:" setValue={setCover} value={cover} />
      <button>Adicionar</button>
    </form>
  )
}
