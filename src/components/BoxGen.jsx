import React, {useState} from 'react'

const BoxGen = () => {

    const [newColor, setNewColor] = useState({
        newColor: ""
    });

    const [colorList, setColorList] = useState([])
    
    const newSelectedColor = (e) => {
        setNewColor({...newColor, [e.target.name]: e.target.value})
    }

    const addColorToList = (e) => {
        e.preventDefault();
        setColorList([...colorList, newColor])
        console.log(colorList)
    }
    
    return (
        <div>
            <div>
                <h1>Pick a color!</h1>
                <form action="" onSubmit={(addColorToList)}>
                    <label htmlFor="">Type a color: </label>
                    <input type="text" name="newColor" value={newColor.newColor} onChange={newSelectedColor}/>
                    <button>Submit</button>
                </form>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default BoxGen