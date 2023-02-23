import React from 'react'

const SenseiDisplay = ({colorListSize }) => {
  return (
    <div>
      {
        colorListSize.map((newBoxSize, i) =>
          <div key={i} style={{
            display: "inline-block",
            width: `${newBoxSize.hW}px`,
            height: `${newBoxSize.hW}px`,
            margin: "10px",
            backgroundColor: newBoxSize.newColor
          }}>
            <p>{newBoxSize.newColor}</p>
          </div>
        )
      }
    </div>
  )
}

export default SenseiDisplay