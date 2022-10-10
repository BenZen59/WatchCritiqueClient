// import axios from 'axios';
// import { useEffect, useState } from 'react';
import Close from '../../img/close.png';
import './NewList.css';

export default function NewList() {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className='blackzone'>
      <div className='newlist'>
        <div className='myList'>
          <span className='newlistheader'>Création d'une liste</span>
          <button className='buttonclosenewlist' title='Close new list'>
            <img src={Close} alt='closenewlist' onClick={refreshPage} />
          </button>
        </div>

        <button className='registerList'>Enregistrer</button>
      </div>
    </div>
  );
}
