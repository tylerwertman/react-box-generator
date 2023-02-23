import React from 'react'

const Display = ({ colorList }) => {
  return (
    <div>
      {
        colorList.map((newBox, i) =>
          <div key={i} style={{
            display: "inline-block",
            width: `75px`,
            height: `75px`,
            margin: "10px",
            backgroundColor: newBox.newColor
          }}>
            <p>{newBox.newColor}</p>
          </div>
        )
      }
    </div>
  )
}

export default Display