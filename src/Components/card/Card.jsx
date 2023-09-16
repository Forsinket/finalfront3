import React from "react";
import { Link } from 'react-router-dom'
import './Card.css'
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./utils/global.context";

const Card = ({ name: cardname, username, id }) => {
  const { stateTheme } = useGlobalContext();
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const [selectedDentist, setSelectedDentist] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSelectedDentist(data));
  }, [url]);

  return (
    <div className={`card ${stateTheme.t ? "light" : "dark"}`}>
      <Link key={id} to={`/dentist/${id}`}>
        <div>
          <img
            className="card-img"
            src="/images/doctor.jpg"
            alt="Doctor"
            width={200}
          />
          <h4>{cardname}</h4>
          <h3>{username}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Card;