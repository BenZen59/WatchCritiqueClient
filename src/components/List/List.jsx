import axios from 'axios';
import { useEffect, useState } from 'react';
import './List.css';
import ListeImage from '../../img/listeimage.png';
import Addlist from '../../img/addlist.png';

export default function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/list').then(({ data }) => {
      setList(data);
    });
  }, []);

  return (
    <div>
      <button className='buttoncreatelist'>
        <img src={Addlist} alt='imageaddlist' />
        Crée une nouvelle liste
      </button>
      <div className='flexlist'>
        {list.map((list) => {
          return (
            <div className='list'>
              <img className='imgList' src={ListeImage} alt='actor' />
              <p>
                <span className='nameList' title={list.namelist}>
                  {list.namelist}
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
