import axios from "axios";
import { useEffect, useState } from "react";

const actressessApi = "https://lanciweb.github.io/demo/api/actresses/";

export default function ActressesList() {
  const [actresses, setActresses] = useState([]);

  function fetchActres() {
    axios.get(actressessApi).then((response) => {
      const actressList = response.data;
      setActresses(actressList);
      console.log(actressList);
    });
  }

  useEffect(fetchActres, []);

  return (
    <div className="container">
      <div className="row">
        {actresses.map((actress) => (
          <div key={actress.id} className="card col-3">
            <img
              src={actress.image}
              className="card-img-top p-3 np-img"
              alt="..."
            ></img>
            <div className="card-body">
              <h5 className="card-title">
                <span className="fw-bold fs-5">Name : </span>
                {actress.name}
              </h5>
              <p className="card-text">
                <span className="fw-bold fs-5">Birthyear : </span>
                {actress.birth_year}
              </p>
              <p className="card-text">
                <span className="fw-bold fs-5">Nationality : </span>
                {actress.nationality}
              </p>
              <p className="card-text">
                <span className="fw-bold fs-5">Biography : </span>
                {actress.biography}
              </p>
              <div className="card-text">
                <span className="fw-bold fs-5">Awards</span>
                <div>
                  <div>{actress.awards}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
