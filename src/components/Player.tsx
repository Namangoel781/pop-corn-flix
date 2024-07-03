import { useParams } from "react-router";

const Player = () => {
  const { playerId } = useParams();
  const movieUrl = `https://vidsrc.xyz/embed/movie/${playerId}`;
  return (
    <div>
      <iframe
        className="w-full h-screen"
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        src={movieUrl}
      ></iframe>
    </div>
  );
};

export default Player;
