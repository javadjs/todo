import "./App.css";
import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Todoinsert from "./Todoinsert";
import Todoitems from "./Todoitems";
import { taskitemsContext } from "./context/taskitemsContext";

const App = () => {
  const [taskitems, settaskitems] = useState([

  ]);


  return (
    <taskitemsContext.Provider
      value={{
        taskitems,
        settaskitems,
      }}
    >
      <div className="Todo">
        <div className="Todo-header">
          <div className="Todo-title">
            <h2>Welcome to Codeyad</h2>
          </div>
          <Todoinsert />
        </div>
        <Todoitems />
      </div>
    </taskitemsContext.Provider>
  );
};

export default App;
