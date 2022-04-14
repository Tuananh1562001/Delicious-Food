import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Search.css";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate() 

  const submitHandler = (e) => {
      e.preventDefault()
      navigate("/searched/" + input)
  }
  return (
    <form className="formSearch" onSubmit={submitHandler} >
      <div className="formSearch_row" >
        <FaSearch />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </form>
  );
}

export default Search;
