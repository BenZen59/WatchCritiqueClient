import axios from 'axios';
import { useEffect, useState } from 'react';
import './List.css';
import ListeImage from '../../img/listeimage.png';
import Addlist from '../../img/addlist.png';
import Close from '../../img/close.png';

const client = axios.create({ baseURL: 'http://localhost:3001/list' });

export default function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    client.get('').then((response) => {
      setList(response.data);
    });
  }, []);

  const deleteList = (id) => {
    client.delete(`/${id}`).then(() => {
      setList(null);
    });
  };

  const refreshPage = () => {
    window.location.reload();
  };

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
              <button
                className='buttondeletelist'
                title='delete list'
                onClick={() => {
                  deleteList(list.id);
                  refreshPage();
                }}
              >
                <img src={Close} alt='closelist' />
              </button>
              <p>
                <div className='nameList' title={list.namelist}>
                  {list.namelist}
                </div>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
