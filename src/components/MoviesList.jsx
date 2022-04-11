import { MovieListCnt, UlList, LiItem, LinkStyled } from '../assets/styles/MovieListStyle'
import MovieItem from './MovieItem'

export default function MoviesList({ popularMovies }) {
  return (
    <MovieListCnt>
      <UlList>
        {popularMovies.map(m =>
            <LiItem key={m.title}>
              <LinkStyled to={`/movie/${m.id}`}>
                <MovieItem
                    title={m.title}
                    poster={m.poster_path}
                    averageVote={m.vote_average}
                />
              </LinkStyled>
            </LiItem>)
        }
      </UlList>
    </MovieListCnt>
  )
}
