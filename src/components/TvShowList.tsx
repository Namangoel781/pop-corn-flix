import useTvShowList, { TvShowResult } from "../hooks/useTvShowList";
import TvShowCard from "./TvShowsCard";

const TvShowList = () => {
  const { tvShows } = useTvShowList();
  console.log(tvShows);
  return (
    <div className="p-3 mb-4">
      <h1 className="text-white font-bold p-5 py-8 text-4xl">TV Shows</h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-y-3">
        {tvShows?.map((tvShow: TvShowResult) => (
          <div key={tvShow.id}>
            <TvShowCard tvShowResult={tvShow} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TvShowList;
