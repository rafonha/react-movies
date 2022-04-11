import HomePage from "./pages/HomePage"
import { AppCnt } from "./assets/styles/AppStyle"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
  return (
    <AppCnt>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </AppCnt>
  );
}

export default App;
