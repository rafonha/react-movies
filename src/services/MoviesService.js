import axios from "axios"

const API_KEY = '25a19395bf1e65d51e27f466606cace1'
const BASE_URL = 'https://api.themoviedb.org/3/'
const completeUrlCall = path => `${BASE_URL}${path}?api_key=${API_KEY}`

export function getAPIData(path) {
    return axios.get(completeUrlCall(path))
}
