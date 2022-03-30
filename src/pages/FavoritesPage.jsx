import MoviesList from "../components/MoviesList";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Main from "../layouts/Main";
import movieBanner from "../assets/images/movie-banner.png"

export default function FavoritesPage() {
  return (
    <>
      <Header pageTitle={"Favoritos"}/>
      <Main>
        <img src={movieBanner} alt="" width="100%" height="" />
          <h2>Filmes Favoritos</h2>
          {/* <MoviesList
            favoriteMovies={favoriteMovies}
          /> */}
      </Main>
      <Footer />
    </>
  )
}
