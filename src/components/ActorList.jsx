import axios from "axios";
import { useEffect, useState } from "react";

const actorsApi = "https://lanciweb.github.io/demo/api/actors/";

export default function ActorList() {
  const [actors, setActors] = useState([]);

  function fetchActor() {
    axios.get(actorsApi).then((response) => {
      const actorsList = response.data;
      setActors(actorsList);
      console.log(actorsList);
    });
  }

  useEffect(fetchActor, []);

  return (
    <div className="container">
      <div className="row">
        {actors.map((actor) => (
          <div key={actor.id} className="card col-3">
            <img src={actor.image} className="card-img-top p-3 np-img" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">
                <span className="fw-bold fs-5">Name : </span>
                {actor.name}
              </h5>
              <p className="card-text">
                <span className="fw-bold fs-5">Birthyear : </span>
                {actor.birth_year}
              </p>
              <p className="card-text">
                <span className="fw-bold fs-5">Nationality : </span>
                {actor.nationality}
              </p>
              <p className="card-text">
                <span className="fw-bold fs-5">Biography : </span>
                {actor.biography}
              </p>
              <p className="card-text">
                <span className="fw-bold fs-5">Awards</span>
                {actor.awards.map((award, index) => (
                  <div>
                    <div key={index}>{award}</div>
                  </div>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
