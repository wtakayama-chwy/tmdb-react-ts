import React, { useEffect, useState, useCallback, useRef } from 'react';
import { MovieContainer } from './styles';

import Loading from '../../shared/Loading/Loading'
import ApiService from '../../../services/api/api'
import { MovieNowPlaying } from '../../../services/models/MovieNowPlaying'
import noImage from '../../../assets/no-image/no-image-found-vertical.png'
import Modal from '../../shared/Modal/Modal';

interface modalRef {
    open: () => void;
    close: () => void;
}

const MoviesNowPlaying: React.FC = () => {

    const [movies, setMovies] = useState<MovieNowPlaying[]>()
    const [pageNumber, setPageNumber] = useState<number>(1)
    const [hasMore, setHasMore] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true)
    const modalRef = useRef<modalRef>()

    const openModal = (): void => {
        modalRef.current?.open()
    }

    const closeModal = (): void => {
        modalRef.current?.close()
    }

    // FETCH DATA
    const listMoviesNowPlaying = useCallback(
        () => {
            ApiService.getNowPlaying(pageNumber)
                .then((res: any) => {
                    setMovies((prevMovies: any) => {
                        if (prevMovies) {
                            return prevMovies?.concat([...res['results']])
                        } else {
                            return res['results']
                        }
                    })
                    setHasMore(res['total_pages'] > res['page'])
                })
        }, [pageNumber])


    // Observe page position - Infinite Loading
    const observer = useRef()
    const lastMovieElement = useCallback((node) => {
        let current: any = observer.current
        // console.log(`1: ${current}`) /* current 1 = null */
        // console.log(`${node.innerText}`) /* node = <li> */

        if (current) current.disconnect()
        current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                // console.log(`${entries[0].intersectionRect}`)
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) current?.observe(node)
    }, [hasMore])

    /**
     * UseEffect
     */
    useEffect(() => {
        listMoviesNowPlaying()
    }, [listMoviesNowPlaying])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])

    return (
        <>
            <Modal ref={modalRef}>
                <h1 className="modal-title">Modal header</h1>
                <button onClick={closeModal}>Close</button>
            </Modal>
            <MovieContainer>
                {loading ? (
                    <Loading />
                ) : (
                        <ul className="movies-list">
                            {
                                movies?.map((movie, index) => (
                                    <li ref={lastMovieElement} key={index} className="movie-item" tabIndex={1} onClick={openModal}>
                                        <div className="image-container">
                                            {(movie.poster_path) ? (
                                                <img
                                                    className="movie-image"
                                                    src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
                                                    alt="movie-poster"
                                                />
                                            ) : (
                                                    <img
                                                        className="movie-image"
                                                        src={noImage}
                                                        alt="movie not found"
                                                    />
                                                )}

                                            <h3 className="movie-title">{movie.title}</h3>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    )}
            </MovieContainer>
        </>
    );
}

export default MoviesNowPlaying;