import APIRequest from "../utils/config/axios.config"

export const getJoke = () => {
  return APIRequest.get('/jokes/random', {
    validateStatus: (status) => {
      return status < 500
    }
  })
}
