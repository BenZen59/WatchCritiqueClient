import axios from 'axios';
import { useEffect, useState } from 'react';
import Close from '../../img/close.png';
import './AddList.css';

export default function AddList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/addlist').then(({ data }) => {
      setList(data);
    });
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className='blackzone'>
      <div className='addlist'>
        <div className='myList'>
          <span className='listheader'>Listes</span>
          <button className='buttoncloselist' title='Close list'>
            <img src={Close} alt='closelist' onClick={refreshPage} />
          </button>
        </div>
        {list.map((list) => {
          return (
            <div className='addListItem'>
              <div className='namecheck'>
                <input type='checkbox' className='checkbox' />
                {list.namelist}
              </div>

              <button className='voir'>Voir</button>
            </div>
          );
        })}
        <button className='registerList'>Enregistrer</button>
      </div>
    </div>
  );
}
