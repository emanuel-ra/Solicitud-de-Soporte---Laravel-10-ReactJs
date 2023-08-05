import { API_URL, POST_REQUEST_SUPPORT } from "../constans/api"

export const createTicket = async ({ search }) => {
  if (search === '') return null
    
  try {
    const response = await fetch(`${API_URL}/${POST_REQUEST_SUPPORT}`)
    const json = await response.json()
    console.log(json)
    //const movies = json.Search

    // return movies?.map(movies => ({
    //   id: movies.imdbID,
    //   title: movies.Title,
    //   year: movies.Year,
    //   poster: movies.Poster
    // }))
    return json;

  } catch (e) {
    throw new Error('Error searching movies')
  }
}