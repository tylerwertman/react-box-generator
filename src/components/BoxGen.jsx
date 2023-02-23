import React, {useState} from 'react'

const BoxGen = () => {

    const [newColor, setNewColor] = useState({
        newColor: "",
        hW: ""
    })

    const [colorList, setColorList] = useState([])


    const dims = (e) => {
        console.log(e.target.value)
        setNewColor({...newColor, [e.target.name]: e.target.value})
    }

    const newSelectedColor = (e) => {
        // setNewColor({...newColor.heightWidth, [e.target.name]: e.target.value})
        setNewColor({...newColor, [e.target.name]: e.target.value})
        console.log(newColor.hW)
    }

    const addColorToList = (e) => {
        e.preventDefault();
        console.log(colorList)
        setColorList([...colorList, newColor])
        setNewColor({newColor: "", hW: ""})
        // setNewColor({hW: ""})
    }
    
    return (
        <div>
            <div>
                <h1>Pick a color!</h1>
                <form action="" onSubmit={(addColorToList)}>
                    <label htmlFor="">Type a color: </label>
                    <input type="text" name="newColor" value={newColor.newColor} onChange={newSelectedColor}/>
                    <input type="number" name="hW" value={newColor.hW} onChange={dims}/>
                    <button>Submit</button>
                </form>
            </div>
            <div>
                {
                    colorList.map((newColor, i) =>
                    <div key={i} style={{
                        display: "inline-block",
                        width: `${newColor.hW}px`,
                        height: `${newColor.hW}px`,
                        margin: "10px",
                        backgroundColor: newColor.newColor
                    }}>
                        <p>{newColor.newColor}</p>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default BoxGen