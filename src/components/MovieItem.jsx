import { ImgPoster } from "../assets/styles/MovieItemStyle";

export default function MovieItem({ title, poster, averageVote }) {
  return (
    <>
        <ImgPoster src={`https://image.tmdb.org/t/p/w500${poster}`} alt={`${title} poster`} />
        <p>Título: {title}</p>
        <p>Nota: {averageVote}</p>
    </>
  )
}
