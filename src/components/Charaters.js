import { useState } from "react";
import { useQuery } from "react-query";
import Character from "./Character";

export default function Charaters() {
  const [page, setPage] = useState(1);

  const fetchCharaters = async ({ queryKey }) => {
    // console.log(queryKey);

    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    // const data = await response.json();
    return response.json();
  };
  // const { data, status, isPreviousData } = useQuery(["characters", page], fetchCharaters, {
  //   keepPreviousData: true
  // });
  const { data, isLoading, isError, isPreviousData, isFetching } = useQuery(
    ["characters", page],
    fetchCharaters,
    {
      keepPreviousData: true
    }
  );
  console.log(data);

  // if (status === "loading") {
  if (isLoading) {
    return <h1>loading....</h1>;
  }
  // if (status === "Error") {
  if (isError) {
    return <h1>Error....</h1>;
  }
  return (
    <div className="characters">
      {data.results.map((character, index) => (
        <Character character={character} key={index} />
      ))}
      <div>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setPage((old) => old + 1)}
          disabled={isPreviousData && !data.info.next}
        >
          Next
        </button>
        {isFetching && "loadinging...."}
      </div>
    </div>
  );
}
