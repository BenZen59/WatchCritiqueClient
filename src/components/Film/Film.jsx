import { useEffect, useState } from 'react';
import axios from 'axios';
import './Film.css';

export default function Film() {
  const [title, setTitle] = useState([]);
  const [voteAverage, setVoteAverage] = useState([]);
  const [backdrop, setBackdrop] = useState([]);
  const [director, setDirector] = useState([]);
  const [overview, setOverview] = useState([]);
  const [runtime, setRuntime] = useState([]);
  const [releaseDate, setReleaseDate] = useState([]);
  const [iso, setIso] = useState([]);
  const [actor, setActor] = useState([]);
  const [genre, setGenre] = useState([]);
  const [releaseDateCountry, setReleaseDateCountry] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/556694?api_key=599ded6f0fc3bcaee1882e83ae0d438a&language=FR'
      )
      .then(({ data }) => {
        setTitle(data.title);
        setVoteAverage(data.vote_average);
        setOverview(data.overview);
        setRuntime(data.runtime);
        setReleaseDate(data.release_date);
        setGenre(data.genres);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/556694/release_dates?api_key=599ded6f0fc3bcaee1882e83ae0d438a'
      )
      .then(({ data }) => {
        setReleaseDateCountry(data.results[0].release_dates[0].release_date);
        setIso(data.results);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/556694/credits?api_key=599ded6f0fc3bcaee1882e83ae0d438a&language=en-US'
      )
      .then(({ data }) => {
        setDirector(data.crew);
        setActor(data.cast);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/556694/images?api_key=599ded6f0fc3bcaee1882e83ae0d438a'
      )
      .then(({ data }) => {
        setBackdrop(data.posters[0].file_path);
      });
  }, []);

  const DateYearOnly = (date) => {
    const year = new Date(date);
    return year.getFullYear();
  };

  const TrueDate = () => {
    let truedate = releaseDateCountry;
    return truedate.slice(0, 10);
  };

  const Runtime = () => {
    if (runtime > 59) {
      const hour = (runtime - (runtime % 60)) / 60;
      const min = runtime % 60;
      return `${hour} H ${min} `;
    }
    return `${runtime} min`;
  };

  const RatingPercentage = () => {
    const pourcentage = Math.round((voteAverage / 10) * 100);
    console.log(pourcentage);
    return pourcentage;
  };

  const circleRating = () => {
    const calcul = Math.round(174 - (174 * voteAverage) / 10);
    const circle = document.getElementById('circle');
    if (voteAverage < 7 && voteAverage >= 5) {
      circle.style.stroke = '#D2D531';
    } else if (voteAverage < 5 && voteAverage >= 0) {
      circle.style.stroke = 'red';
    } else {
      circle.style.stroke = '#21CC77';
    }

    let dynamicStyles = null;
    function addAnimation(body) {
      if (!dynamicStyles) {
        dynamicStyles = document.createElement('style');
        dynamicStyles.type = 'text/css';
        document.head.appendChild(dynamicStyles);
      }
      dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
    }
    addAnimation(`
    @keyframes circle {
      to {
        stroke-dashoffset: ${calcul};
      }
    }
    `);
  };

  return (
    <div>
      {circleRating()}
      <div className='infoFilm'>
        <img
          className='backgroundPoster'
          src={`https://image.tmdb.org/t/p/original${backdrop}`}
          alt='fond'
        />
        <div className='info'>
          <span className='title'>{title}</span>{' '}
          <span className='year'>({DateYearOnly(releaseDate)})</span>
          <br />
          <span className='text'>
            <div className='genre'>
              {TrueDate()} (
              {iso
                .filter((iso) => iso.iso_3166_1.includes('FR'))
                .map((iso) => {
                  return <>{iso.iso_3166_1}</>;
                })}
              )•
              <div className='genre'>
                {genre.map((event) => {
                  return <span>- {event.name} - </span>;
                })}
              </div>
              • {Runtime()}
            </div>
            <br />
            <div className='espaceNote'>
              <div className='boxRating'>
                <svg>
                  <circle cx='28px' cy='28px' r='28px'></circle>
                  <circle cx='28px' cy='28px' r='28px' id='circle'></circle>
                </svg>
                <span className='rating'>{RatingPercentage()} %</span>
              </div>
              <span className='noteutilisateurs'>Note des utilisateurs</span>
            </div>
            <br />
            <span className='synopsis'>Synopsis</span>
            <br />
            <br />
            <div className='overview'>{overview}</div>
            <br />
            {director
              .filter(
                (job) =>
                  job.job === 'Director' && job.department === 'Directing'
              )
              .map((dir) => {
                return (
                  <p>
                    <span className='director'>{dir.name}</span>
                    <br />
                    {dir.job}
                  </p>
                );
              })}
          </span>
        </div>
      </div>
      <h3 className='teteAffiche'>Têtes d'affiche</h3>
      <div className='actors'>
        {actor
          .filter((actor) => actor.order < 10)
          .map((actor) => {
            const actorPoster = actor.profile_path
              ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
              : `https://via.placeholder.com/220x330/FFFFFF/000000/?text=no image`;

            return (
              <div>
                <img src={actorPoster} alt='actor' />
                <p>
                  <span>{actor.name}</span>
                  <br />
                  {actor.character}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
