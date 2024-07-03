import { Card, CardContent } from "./ui/card";
import { TvShowResult } from "../hooks/useTvShowList";
import { useNavigate } from "react-router";

interface Props {
  tvShowResult: TvShowResult;
}

const TvShowCard = ({ tvShowResult }: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <Card
        className="border-0 cursor-pointer"
        style={{ backgroundColor: "#151518" }}
        onClick={() => {
          navigate(`/tvplayer/${tvShowResult.id}`);
        }}
      >
        <CardContent>
          <div className="">
            <img
              src={`https://image.tmdb.org/t/p/w500${tvShowResult.poster_path}`}
              alt="poster"
              className="hover:opacity-80 transition-all"
            />
            <h1 className="mt-3 text-center font-semibold text-white">
              {tvShowResult.title ? tvShowResult.title : tvShowResult.name}
            </h1>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default TvShowCard;
