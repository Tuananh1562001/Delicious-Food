import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

import './popular.css'

function Veggie() {

  const [veggie, setVeggie] = useState([]);
  useEffect(() => {
    getVeggie();
  }, []);
  const getVeggie = async () => {

    const check = localStorage.getItem("Veggie")

    if(check) {
      setVeggie(JSON.parse(check))
    }else{
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("Veggie", JSON.stringify(data.recipes))
      setVeggie(data.recipes);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <h3>Our Vegetarian Picks</h3>
        <Splide
          options={{
            perPage: 3,
            pagination: false,
            drag: 'free',
            gap: "3rem"
          }}
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <div className="card" >
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  )
}

export default Veggie