import React from 'react'

import MoviesNowPlaying from '../../components/Movie/MoviesNowPlaying/MoviesNowPlaying'
import SearchBox from '../../components/SearchBox/SearchBox'

const Home: React.FC = () => {

  return (
    <>
      <SearchBox />
      <MoviesNowPlaying />
    </>
  );
}

export default Home;