import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const App=()=> {
  return (

    <div className="Todo">
      <div className="Todo-header">
        <div className='Todo-title'>
        <h2>Welcome to Codeyad</h2>
        </div>
        <form action='' method='get'name='TodoForm' >
          <div className='Todo-inset'>
           <input type='text' placeholder='New Task' />
           <button className='btn-inser' type='submit'>Inset</button>
          </div>
        </form>

  
      </div>
      <div className='Todo-main'>
<ul className='Todo-ul'>
  <li className='Todo-li'>
    <span className='Todo-title-task'>
    Number 1 Task
    </span>
<span className='Todo-icon-box'>
  <span>
   <FontAwesomeIcon icon={faTrashCan} />
  </span>
  <span>
     <FontAwesomeIcon icon={faXmark} />
  </span>
   <span>
     <FontAwesomeIcon icon={faCheck} />
  </span>
  
</span>

  </li>
  <li className='Todo-li'>
    <span className='Todo-title-task'>
    Number 2 Task
    </span>
<span className='Todo-icon-box'>
  <span >
   <FontAwesomeIcon icon={faTrashCan} />
  </span>
  <span>
     <FontAwesomeIcon icon={faXmark} />
  </span>
   <span>
     <FontAwesomeIcon icon={faCheck} />
  </span>
  
</span>

  </li>
</ul>
      </div>
    </div>
  );
}

export default App;
