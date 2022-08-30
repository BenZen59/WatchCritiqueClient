import { Slide } from 'react-slideshow-image';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Carousel.css';

export default function Carousel() {
  const [moviePopular, setMoviePopular] = useState([]);
  const [movieUpcoming, setMovieUpcoming] = useState([]);
  const [movieRating, setMovieRating] = useState([]);
  const [properties, setProperties] = useState({
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: true,
    canSwipe: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    scale: 1.5,
  });

  useEffect(() => {
    setProperties({
      ...properties,
      slidesToShow: window.matchMedia('(min-width: 780px)').matches ? 10 : 1,
    });
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=599ded6f0fc3bcaee1882e83ae0d438a&language=en-US&page=1'
      )

      .then(({ data }) => {
        setMoviePopular(data.results);
      });
  }, [window.innerWidth]);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=599ded6f0fc3bcaee1882e83ae0d438a&language=en-US&page=1'
      )

      .then(({ data }) => {
        setMoviePopular(data.results);
      });
  }, []);

  useEffect(() => {
    setProperties({
      ...properties,
      slidesToShow: window.matchMedia('(min-width: 780px)').matches ? 10 : 1,
    });
    axios
      .get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=599ded6f0fc3bcaee1882e83ae0d438a&language=en-US&page=1&region=FR'
      )

      .then(({ data }) => {
        setMovieUpcoming(data.results);
      });
  }, [window.innerWidth]);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=599ded6f0fc3bcaee1882e83ae0d438a&language=en-US&page=1&region=FR'
      )

      .then(({ data }) => {
        setMovieUpcoming(data.results);
      });
  }, []);

  useEffect(() => {
    setProperties({
      ...properties,
      slidesToShow: window.matchMedia('(min-width: 780px)').matches ? 10 : 1,
    });
    axios
      .get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=599ded6f0fc3bcaee1882e83ae0d438a&language=en-US&page=1&region=FR'
      )

      .then(({ data }) => {
        setMovieRating(data.results);
      });
  }, [window.innerWidth]);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=599ded6f0fc3bcaee1882e83ae0d438a&language=en-US&page=1&region=FR'
      )

      .then(({ data }) => {
        setMovieRating(data.results);
      });
  }, []);

  return (
    <>
      <p className='actuFilm'>ACTUALITÉ FILMS</p>
      <p className='sectionActu'>LES FILMS POPULAIRES DU MOMENT</p>
      <p className='trait'>
        ________________________________________________________________________________________
      </p>
      <section className='slideContain'>
        <Slide {...properties}>
          {moviePopular.map((moviePic) => {
            const urlMovie = `https://image.tmdb.org/t/p/w220_and_h330_face/${moviePic.poster_path}`;
            return (
              <div className='imgContain'>
                <img
                  className='popMovieImg'
                  src={urlMovie}
                  alt={moviePic.original_title}
                />
              </div>
            );
          })}
        </Slide>
      </section>
      <p className='sectionActu'>EN CE MOMENT AU CINÉMA</p>
      <p className='trait'>
        ________________________________________________________________________________________
      </p>
      <section className='slideContain'>
        <Slide {...properties}>
          {movieUpcoming.map((moviePic) => {
            const urlMovie = `https://image.tmdb.org/t/p/w220_and_h330_face/${moviePic.poster_path}`;
            return (
              <div className='imgContain'>
                <img
                  className='popMovieImg'
                  src={urlMovie}
                  alt={moviePic.original_title}
                />
              </div>
            );
          })}
        </Slide>
      </section>
      <p className='sectionActu'>LES FILMS AVEC LA MEILLEURE NOTATION</p>
      <p className='trait'>
        ________________________________________________________________________________________
      </p>
      <section className='slideContain'>
        <Slide {...properties}>
          {movieRating.map((moviePic) => {
            const urlMovie = `https://image.tmdb.org/t/p/w220_and_h330_face/${moviePic.poster_path}`;
            return (
              <div className='imgContain'>
                <img
                  className='popMovieImg'
                  src={urlMovie}
                  alt={moviePic.original_title}
                />
              </div>
            );
          })}
        </Slide>
      </section>
    </>
  );
}
