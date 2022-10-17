const { useState } = require("react")

const Square = ({changeColor}) => {
  const [color, setColor] = useState('rgb(0, 0, 0)')
  const [stopChangeColor, setStopChangeColor] = useState(false)

  function updateColor() {
    if (!stopChangeColor)
      setColor(changeColor)
  }

  return (
    <div 
      style={{ height: '255px', width: '255px', background: color }}
      onMouseEnter={updateColor}
      onDoubleClick={() => setStopChangeColor(true)}>
    </div>
  )
}

export default Square
