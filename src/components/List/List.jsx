import axios from 'axios';
import { useEffect, useState } from 'react';
import ListeImage from '../../img/listeimage.png';
import Addlist from '../../img/addlist.png';
import Close from '../../img/close.png';
import NewList from '../NewList/NewList';
import './List.css';

const client = axios.create({ baseURL: 'http://localhost:3001/list' });

export default function List() {
  const [list, setList] = useState([]);
  const [inputNewList, setInputNewList] = useState(false);

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

  const clickNewList = (event) => {
    setInputNewList(inputNewList.concat(<NewList />));
  };

  return (
    <div>
      {inputNewList ? <NewList /> : null}
      <button
        className='buttoncreatelist'
        title='Créer une liste'
        onClick={() => setInputNewList(true)}
      >
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
