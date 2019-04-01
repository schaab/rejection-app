import React, { Fragment, useReducer } from "react";
import QuestionList from "./QuestionList";
import "../App.css";

const App = () => {
  const [state, dispatch] = useReducer();

  return (
    <Fragment>
      <QuestionList />
    </Fragment>
  );
};

App.displayName = "App";

export default App;
