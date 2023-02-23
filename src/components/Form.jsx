import React from 'react'

const Form = ({ newBox, setNewBox, colorList, setColorList }) => {

    const newSelectedColor = (e) => {
        setNewBox({ ...newBox, [e.target.name]: e.target.value })
    }

    const addColorToList = (e) => {
        e.preventDefault();
        console.log(colorList)
        setColorList([...colorList, newBox])
        setNewBox({ newColor: "" })
    }

    return (
        <div>
            <form action="" onSubmit={(addColorToList)}>
                <label htmlFor="">Type a color: </label>
                <input type="text" name="newColor" value={newBox.newColor} onChange={newSelectedColor} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form