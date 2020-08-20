import React, { useReducer } from "react";
import axios from "axios";
import { dataReducer } from "../utils/dataReducer";
import Counter from "./Counter";
import styles from "./style.css";

const App = ({ title }) => {
  const initialData = {
    list: [],
    error: null,
  };

  const [data, dispatch] = useReducer(dataReducer, initialData);

  return (
    <div>
      <h1 className={styles.title}>A counter</h1>
      <Counter />
    </div>
  );
};

export default App;
