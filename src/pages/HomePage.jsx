import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Main from "../layouts/Main";
import { getAPIData } from "../services/MoviesService";
import movieBanner from "../assets/images/movie-banner.png"

export default function HomePage() {
    const [popularMovies, setpopularMovies] = useState([])

    const fetchMovies = async () => {
        const { data } = await getAPIData('movie/popular')
        setpopularMovies(data.results)
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
    <>
        <Header pageTitle={"Home"} />
        <Main>
            <img src={movieBanner} alt="" width="100%" height="" />
            <h2>Filmes Populares</h2>
            <MoviesList
                popularMovies={popularMovies}
            />
        </Main>
        <Footer />
    </>
  )
}
