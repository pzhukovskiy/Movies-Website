import axios from "axios"

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '377c8cc73ebe721a3c3500348ed77c5d'
    }
})

export async function fetchData() {
    const {data} = await instance.get('trending/all/day')
    return data.results
}

export async function fetchDataId(id: any) {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=377c8cc73ebe721a3c3500348ed77c5d&language=en-US`)
    return data
}