import Square from '../pure/Square'

const SquareContainer = () => {
  function randomColor() {
    const red = Math.random() * 251
    const green = Math.random() * 251
    const blue = Math.random() * 251
    return `rgb(${red}, ${green}, ${blue})`
  }

  return (
    <Square changeColor={randomColor} />
  )
}

export default SquareContainer