import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import './recipe.css'

function Recipe() {
  let param = useParams()
  // console.log(param)
  const [details, setDetails] = useState({})
  const [activeTab, setActiveTab] = useState("instructions")

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${param.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json()
    console.log(detailData)
    setDetails(detailData)
  }

  useEffect(() => {
    fetchDetails()
  }, [param.name])
  return (
    <div className='detailWrapper'>
      <div className='wrapper_left'>
        <h2>{details.title}</h2>
        <img className='wrapper_left_img' src={details.image} alt="" />
      </div>
      <div className='wrapper_right'>
        <button className={activeTab === "instructions" ? "btn_active" : "btn"} onClick={() => setActiveTab("instructions")}>
          Instructions
        </button>
        <button className={activeTab === "ingredients" ? "btn_active" : "btn"} onClick={() => setActiveTab("ingredients")} >
          Ingredients
        </button>
        <div>
          <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
          <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
        </div>
        <ul>
          {details.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Recipe