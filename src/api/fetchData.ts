import axios from "axios"

export async function fetchDataId(id: any) {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=377c8cc73ebe721a3c3500348ed77c5d&language=en-US`)
    return data
}

export async function fetchData() {
    const {data} = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=377c8cc73ebe721a3c3500348ed77c5d')
    return data.results
}