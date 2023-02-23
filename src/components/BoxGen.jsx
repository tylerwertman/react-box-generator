import React, {useState} from 'react'

const BoxGen = () => {

    const [newBox, setNewBox] = useState({
        newColor: "",
        hW: ""
    })

    const [colorList, setColorList] = useState([])


    const dims = (e) => {
        console.log(e.target.value)
        setNewBox({...newBox, [e.target.name]: e.target.value})
    }

    const newSelectedColor = (e) => {
        // setNewBox({...newColor.heightWidth, [e.target.name]: e.target.value})
        setNewBox({...newBox, [e.target.name]: e.target.value})
        console.log(newBox.hW)
    }

    const addColorToList = (e) => {
        e.preventDefault();
        console.log(colorList)
        setColorList([...colorList, newBox])
        setNewBox({newColor: "", hW: ""})
        // setNewBox({hW: ""})
    }
    
    return (
        <div>
            <div>
                <h1>Pick a color!</h1>
                <form action="" onSubmit={(addColorToList)}>
                    <label htmlFor="">Type a color: </label>
                    <input type="text" name="newColor" value={newBox.newColor} onChange={newSelectedColor}/>
                    <input type="number" name="hW" value={newBox.hW} onChange={dims}/>
                    <button>Submit</button>
                </form>
            </div>
            <div>
                {
                    colorList.map((newBox, i) =>
                    <div key={i} style={{
                        display: "inline-block",
                        width: `${newBox.hW}px`,
                        height: `${newBox.hW}px`,
                        margin: "10px",
                        backgroundColor: newBox.newColor
                    }}>
                        <p>{newBox.newColor}</p>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default BoxGen