import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

import "./popular.css";

function Popular() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };
  return (
    <div>
      <div className="wrapper">
        <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 4,
            pagination: false,
            drag: "free",
            gap: "3rem",
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <div className="card" >
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img className="card__img" src={recipe.image} alt={recipe.title} />
                  </Link>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}

export default Popular;
