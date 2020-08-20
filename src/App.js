import React from "react";
import Counter from "./Counter";
import List from "./List";
import styles from "./style.css";

const App = ({ title }) => {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <Counter />
      <List />
    </div>
  );
};

export default App;
