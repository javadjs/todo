import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Todoinsert from './Todoinsert';
import Todoitems from './Todoitems';

const App=()=> {
  return (

    <div className="Todo">
      <Todoinsert/>
      <Todoitems/>
    </div>
  );
}

export default App;
