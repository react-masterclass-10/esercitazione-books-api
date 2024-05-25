import { useState, useEffect } from "react";
import axios from "axios";
import { useBooks } from "../context/BookContext";

function Form() {
  const { setBooks } = useBooks();
  const [ search, setSearch ] = useState("");

  const axiosBooks = async () => {
    try {
      console.log("https://gutendex.com/books?search=" + search);
      const response = await axios.get("https://gutendex.com/books?search=" + search);
      setBooks(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search !== "") {
        axiosBooks();
      } else {
        setBooks([]);
      }
    }, 650);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  const handleSearch = (e) => setSearch(e.target.value);

  return (
    <div className="mb-3">
      <label htmlFor="formGroupExampleInput" className="form-label">
        Cerca il tuo libro preferito
      </label>
      <input type="text" className="form-control" id="formGroupExampleInput" placeholder="La divina commedia" onChange={handleSearch} />
    </div>
  );
}

export default Form;
