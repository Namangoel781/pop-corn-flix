"use client";

import { useNavigate } from "react-router";
import { GenresContext } from "../context/genres.context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useContext, useState } from "react";

const genreList = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

// type Checked = DropdownMenuCheckboxItemProps["checked"];
const Genres = () => {
  const { genres, setGenres } = useContext(GenresContext);
  const [genreName, setGenreName] = useState();
  console.log(genres);
  console.log(genreName);
  const navigate = useNavigate();

  const onChange = (data) => {
    setGenres(data);
    navigate("/movies");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <h1 className="hover:text-yellow-500 cursor-pointer">
          {!genres ? "Genres" : genreName}
        </h1>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 text-white"
        style={{ backgroundColor: "#151518" }}
      >
        <DropdownMenuRadioGroup value={genres} onValueChange={onChange}>
          {genreList.map((genre) => (
            <DropdownMenuRadioItem
              value={genre.id}
              onClick={() => setGenreName(genre.name)}
            >
              {genre.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Genres;
