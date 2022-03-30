import { MovieListCnt, UlList, LiItem } from '../assets/styles/MovieListStyle'
import MovieItem from './MovieItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'

export default function MoviesList({ popularMovies, favoriteMovies }) {
  return (
    <MovieListCnt>
      <UlList>
        {popularMovies.map(m =>
            <LiItem key={m.title}>
                <MovieItem
                    title={m.title}
                    poster={m.poster_path}
                    averageVote={m.vote_average}
                    isFavorite={favoriteMovies}
                />
                {favoriteMovies
                  ? <FontAwesomeIcon icon={faHeartBroken} />
                  : <FontAwesomeIcon icon={faHeart} />
                }
            </LiItem>)
        }
      </UlList>
    </MovieListCnt>
  )
}
