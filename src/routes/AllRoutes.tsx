import { Route, Routes } from "react-router";
import MovieList from "../components/MovieList";
import TvShowList from "../components/TvShowList";
import SearchList from "../components/SearchList";
import Trending from "../components/Trending/Trending";
import Player from "../components/Player";
import TvPlayer from "../components/TvPlayer";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Trending />} />
      <Route path="/movies" element={<MovieList />} />
      <Route path="/tvshows" element={<TvShowList />} />
      <Route path="/search/:searchName" element={<SearchList />} />
      <Route path="/player/:playerId" element={<Player />} />
      <Route path="/tvplayer/:playerId" element={<TvPlayer />} />
    </Routes>
  );
};

export default AllRoutes;
