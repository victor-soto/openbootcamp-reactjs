import { Button, IconButton } from "@mui/material"
import { useState } from "react"

import { getJoke } from "../../services/jokeService"

const JokesPage = () => {
  const [joke, setJoke] = useState({})
  const [ likes, setLike ] = useState(0)
  const [ dislikes, setDislike ] = useState(0)
  const [ likeIsActive, setLikeIsActive ] = useState(false)
  const [ dislikeIsActive, setDislikeIsActive ] = useState(false)

  const generateJoke = () => {
    getJoke()
      .then((response) => {
        setJoke(response.data)
        setLikeIsActive(true)
        setDislikeIsActive(true)
      })
  }

  const likeJoke = () => {
    setLike((current) => current + 1)
    setLikeIsActive(false)
    setDislikeIsActive(false)
  }

  const dislikeJoke = () => {
    setDislike((current) => current + 1)
    setLikeIsActive(false)
    setDislikeIsActive(false)
  }

  return (
    <div>
      <h1>Random Joke</h1>
      <Button onClick={generateJoke} variant='contained'>Generate random Joke</Button>
      <hr />
      { joke.icon_url && (<img className='img-fluid' src={joke.icon_url && './chuck-norris-avatar.png'} alt='Joke img' />) }
      <p>{joke.value}</p>
      { joke.value && (
        <IconButton aria-label="like" color='primary' onClick={() => likeJoke()} disabled={!likeIsActive}>
          <i className="bi bi-hand-thumbs-up"></i>
        </IconButton>
      ) }
      { joke.value && (
        <IconButton aria-label="dislike" color='error' onClick={() => dislikeJoke()} disabled={!dislikeIsActive}>
          <i className="bi bi-hand-thumbs-down"></i>
        </IconButton>
      ) }
      { joke.value && (<p>Likes: {likes}</p>) }
      { joke.value && (<p>Dislikes: {dislikes}</p>) }
  </div>
  )

}

export default JokesPage
