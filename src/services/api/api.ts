const baseUrl: string = 'https://api.themoviedb.org/3';
const language: string = 'language=pt-BR';
const key: string = 'api_key=32b2538fae9d6a2e14d1539dde85893f';
const nowPlayingUrl: string = `${baseUrl}/movie/now_playing?${key}&${language}`;
const searchUrl: string = `${baseUrl}/search/movie?${key}&${language}&query=`

const consumeApi = (url: string, param: string, method = 'GET', body?: any): any => {
    const fullUrl = `${url}/${param}`

    return fetch(fullUrl, {
        method,
        headers: {
            'content-type': 'application/json'
        },
        body
    })
        .then(err => ApiService.HandleError(err))
        .then(res => res.json())
}

const ApiService = {

    // Now playing
    getNowPlaying: (page: number) => consumeApi(nowPlayingUrl, `&page=${page}`, 'GET'),

    // SearchedMovie
    getSearchedMovie: (query: string) => consumeApi(searchUrl, query, 'GET'),

    HandleError: (res: any) => {
        if (!res.ok) {
            throw new Error(res.statusText)
        }
        return res
    }
}

export default ApiService