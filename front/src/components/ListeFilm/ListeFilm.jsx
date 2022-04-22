import React, { useEffect, useState } from "react";
import axios from "axios";
import "./listeFilm.css"

const ListeFilm = () => {
  const [dataMovie, setDataMovie] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_MOVIE}/films/`
      )
      .then((res) =>
        setDataMovie(
          res.data.results.map((d) => ({
            title: d.title,
            overview: d.overview,
            picture: d.poster_path,
          }))
        )
      )

      .catch((err) => console.error(err));
  }, []);

  // useEffect(()=> {
  //   axios.get("http://192.168.178.57:8080/test/").then(res => setDataTest(res.data))
  // },[])

  return (
    <div className="listefilm">
      <ul className="listefilm_list">
        {dataMovie &&
          dataMovie.map((d) => (
            <li
              className="listefilm_list_item"
              key={d.title}
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${d.picture})`,
              }}
            >
              <div className="listefilm_list_global_text">
                <p className="listefilm_list_title">{d.title}</p>
                <p className="listefilm_list_text">{d.overview}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default ListeFilm;
