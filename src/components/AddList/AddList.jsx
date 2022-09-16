import axios from 'axios';
import { useEffect, useState } from 'react';
import './AddList.css';

export default function AddList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/addlist').then(({ data }) => {
      setList(data);
    });
  }, []);

  return (
    <div className='addlist'>
      <div className='myList'>Vos listes</div>
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
  );
}
