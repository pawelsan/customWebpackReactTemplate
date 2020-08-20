import React, { useState, useReducer } from "react";
import { dataReducer } from "../utils/dataReducer";
import Counter from "./Counter";
import styles from "./style.css";

const App = ({ title }) => {
  const initialData = {
    list: [],
    error: null,
  };

  const [counter, setCounter] = useState(0);
  const [data, dispatch] = useReducer(dataReducer, initialData);

  return (
    <div>
      <h1 className={styles.title}>A counter</h1>
      <Counter counter={counter} />
    </div>
  );
};

export default App;
