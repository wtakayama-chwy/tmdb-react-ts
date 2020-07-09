import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SearchedContainer } from './styles'

import ApiService from '../../../services/api/api'
import { MovieNowPlaying } from '../../../services/models/MovieNowPlaying'

import noImage from '../../../assets/no-image/no-image-found-360x250.png'

interface ParamsType {
    query: string
}

const SearchedMovies: React.FC = () => {

    const { query } = useParams<ParamsType>()
    const [searchedMovies, setSearchedMovies] = useState<MovieNowPlaying[]>()

    useEffect(() => {
        ApiService.getSearchedMovie(query)
            .then((res: any) => setSearchedMovies(res['results']))
    }, [query])

    return (
        <SearchedContainer>
            <h1>Filmes encontrados</h1>
            <ul>
                {searchedMovies?.map(searchedMovie => (
                    <li key={searchedMovie.id}>
                        <picture className="backdrop">
                            <div className="main-info">
                                <h3 className="searchedMovie-title">{searchedMovie.original_title}</h3>
                                <p className="searchedMovie-release-date">{searchedMovie.release_date}</p>
                                <p className="searchedMovie-review">{searchedMovie.vote_average}</p>
                            </div>
                            {(searchedMovie.backdrop_path) ? (
                                <img
                                    className="searchedMovie-backdrop"
                                    src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${searchedMovie.backdrop_path}`}
                                    alt="movie title"
                                />
                            ) : (
                                    <img
                                        className="searchedMovie-backdrop"
                                        src={noImage}
                                        alt="not found"
                                    />
                                )}
                        </picture>
                        <div className="overview">
                            <p className="searchedMovie-overview">{searchedMovie.overview}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </SearchedContainer>
    )
}

export default SearchedMovies;