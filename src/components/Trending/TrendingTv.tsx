import { MdOutlineExpandMore } from "react-icons/md";
import TvShowCard from "../TvShowsCard";
import useTrendingList from "../../hooks/useTrendingList";
import { useState } from "react";

const TrendingTv = () => {
  const { trendingData } = useTrendingList("tv");
  const [expand, setExpand] = useState(false);
  return (
    <div className="p-3 mb-4">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setExpand(!expand)}
      >
        <h1 className="text-white font-bold p-5 py-8 text-4xl">
          Trending Tv Shows
        </h1>
        <span className="text-4xl text-white font-bold">
          <MdOutlineExpandMore />
        </span>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-y-3">
        {expand &&
          trendingData?.map((tvshow) => (
            <div key={tvshow.id}>
              <TvShowCard tvShowResult={tvshow} />
            </div>
          ))}
        {!expand &&
          trendingData?.slice(0, 10).map((tvshow) => (
            <div key={tvshow.id}>
              <TvShowCard tvShowResult={tvshow} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TrendingTv;
