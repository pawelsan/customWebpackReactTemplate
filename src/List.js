import React, { useReducer, useEffect } from "react";
import axios from "axios";
import { dataReducer } from "../utils/dataReducer";

const List = () => {
  const initialData = {
    list: [],
    error: null,
  };

  const [data, dispatch] = useReducer(dataReducer, initialData);

  useEffect(() => {
    axios
      .get("http://hn.algolia.com/api/v1/search?query=react")
      .then((response) => {
        dispatch({ type: "SET_LIST", list: response.data.hits });
      })
      .catch(() => {
        dispatch({ type: "SET_ERROR" });
      });
  }, []);
  return (
    <div>
      <h2>My Async Data</h2>

      {data.error && <div className="error">Error</div>}

      <ul>
        {data.list.map((item) => (
          <li key={item.objectID}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
