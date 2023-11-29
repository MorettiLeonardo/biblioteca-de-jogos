import prototype from 'prop-types'

TextInput.prototype = {
  id: prototype.string,
  label: prototype.string,
  value: prototype.string,
  setValue: prototype.func
}

// eslint-disable-next-line react/prop-types
export default function TextInput( {id, value, setValue} ) {
  return (
    <div>
      <label htmlFor={id}>{id}</label>
      <input type="text" id={id} value={value} onChange={(ev) => setValue(ev.target.value)} />
    </div>
  )
}
