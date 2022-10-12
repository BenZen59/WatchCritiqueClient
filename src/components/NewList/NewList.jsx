import axios from 'axios';
import { useState } from 'react';
import Close from '../../img/close.png';
import './NewList.css';

const client = 'http://localhost:3001/list';

export default function NewList() {
  const [namelist, setNamelist] = useState('');
  const [idUserList, setidUserList] = useState(1);

  const refreshPage = () => {
    window.location.reload();
  };

  function createNewList() {
    axios
      .post(`${client}`, {
        namelist: namelist,
        idUserList: idUserList,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className='blackzone'>
      <div className='newlist'>
        <div className='myList'>
          <span className='newlistheader'>Création d'une liste</span>
          <button className='buttonclosenewlist' title='Close new list'>
            <img src={Close} alt='closenewlist' onClick={refreshPage} />
          </button>
        </div>
        <span className='labelnewlist'>Nommer la liste</span>
        <div className='flexnewlist'>
          <br />
          <input
            type='text'
            className='namenewlist'
            name='name'
            required
            placeholder='Exemple : Les meilleurs films'
            onChange={(e) => {
              setNamelist(e.target.value);
            }}
          ></input>
          <button
            className='registerList'
            onClick={() => {
              createNewList();
              refreshPage();
            }}
          >
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
}
