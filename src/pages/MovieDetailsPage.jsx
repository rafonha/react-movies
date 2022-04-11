import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ImgPoster, MovieCnt, MovieDetailsCnt, MovieDetailsText, ReturnButton } from "../assets/styles/MovieDetailsStyle";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Main from "../layouts/Main";
import { getAPIData } from "../services/MoviesService";

export default function MovieDetailsPage() {
  let { movieId } = useParams(); 
  let navigate = useNavigate(); 

  const [movie, setmovie] = useState({})

  const fetchMovie = async () => {
    const { data } = await getAPIData(`movie/${movieId}`)
    setmovie(data)
}

  useEffect(() => {
    fetchMovie()
  }, [])
  
  return (
    <>
      <Header pageTitle={movie.original_title} />
      <Main>
        <MovieCnt>
          <ImgPoster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <MovieDetailsCnt>
            <MovieDetailsText><b>Título:</b> {movie.original_title} </MovieDetailsText>
            <MovieDetailsText><b>Sinopse:</b> {movie.overview}</MovieDetailsText>
            <MovieDetailsText><b>Data do lançamento:</b> {movie.release_date} </MovieDetailsText>
            <MovieDetailsText><b>Nota:</b> {movie.vote_average}</MovieDetailsText>
            <ReturnButton onClick={() => navigate("/")}>Voltar para a Home</ReturnButton>
          </MovieDetailsCnt>
        </MovieCnt>
      </Main>
      <Footer />
    </>

  )
}
