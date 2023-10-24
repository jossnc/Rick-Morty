import { useEffect, useState } from "react";
import Character from "./Character";

function NavPage(props) {
  return (
    <header className="d-flex justify-content-between align-items-center" style={{ marginBottom: "-20px" }}>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => props.setPage(props.page - 1)}
        disabled={props.page === 1}
        style={{ marginTop: "10px" }} // Ajusta el margen superior para subir el botón
      >
        Previous Page
      </button>
      <p>Page: {props.page}</p>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => props.setPage(props.page + 1)}
        style={{ marginTop: "10px" }} // Ajusta el margen superior para subir el botón
      >
        Next Page
      </button>
    </header>
  );
}


  

function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }

    fetchData();
  }, [page]);

  return (
    <div className="container ">
      <NavPage page={page} setPage={setPage} />

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row justify-content-center">
          {characters.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}

      <NavPage page={page} setPage={setPage} />
    </div>
  );
}

export default CharactersList;
