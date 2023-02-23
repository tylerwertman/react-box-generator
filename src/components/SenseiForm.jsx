import React from 'react'

const SenseiForm = ({ newBoxSize, setNewBoxSize, colorListSize, setColorListSize }) => {
  const newSelectedColor = (e) => {
    setNewBoxSize({ ...newBoxSize, [e.target.name]: e.target.value })
}

const addColorToList = (e) => {
    e.preventDefault();
    console.log(colorListSize)
    setColorListSize([...colorListSize, newBoxSize])
    setNewBoxSize({ newColor: "", hW: ""})
}
  return (
    <div>
        <h1>Pick a color!</h1>
        <form action="" onSubmit={(addColorToList)}>
                <label htmlFor="">Type a color: </label>
                <input type="text" name="newColor" value={newBoxSize.newColor} onChange={newSelectedColor} />
                <input type="number" name="hW" value={newBoxSize.hW} onChange={newSelectedColor} />
                <button>Submit</button>
            </form>
    </div>
  )
}

export default SenseiForm