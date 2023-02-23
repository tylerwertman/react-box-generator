import React, {useState} from 'react'

const BoxGen = () => {

    const [newColor, setNewColor] = useState({
        newColor: ""
    })

    const [colorList, setColorList] = useState([])
    
    const [heightWidth, setHeightWidth] = useState({
        hW: ""
    })

    // const dims = (e) => {
    //     setHeightWidth({...heightWidth, [e.target.name]: e.target.value})
    //     console.log(e.target.value)
    // }
    const newSelectedColor = (e) => {
        setNewColor({...newColor, [e.target.name]: e.target.value})
        console.log(heightWidth.hW)
    }

    const addColorToList = (e) => {
        e.preventDefault();
        console.log(colorList)
        setColorList([...colorList, newColor])
        setNewColor({newColor: ""})
        setHeightWidth({heightWidth: ""})
    }
    
    return (
        <div>
            <div>
                <h1>Pick a color!</h1>
                <form action="" onSubmit={(addColorToList)}>
                    <label htmlFor="">Type a color: </label>
                    <input type="text" name="newColor" value={newColor.newColor} onChange={newSelectedColor}/>
                    <input type="number" name="heightWidth" value={heightWidth.hW}/>
                    <button>Submit</button>
                </form>
            </div>
            <div>
                {
                    colorList.map((newColor, i) =>
                    <div key={i} style={{
                        display: "inline-block",
                        width: `${heightWidth.hW}px`,
                        height: `${heightWidth.hW}px`,
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