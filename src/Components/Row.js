import React,{useState, useEffect} from 'react';
import axios  from '../axios';
import '../Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
function Row({title,fetchUrl,isLargeRow}) {
    const base_url = 'https://image.tmdb.org/t/p/original';
    const [movies, setMovies] = useState([]);
    const [url_trailer, seturl_trailer] = useState('');

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        }
        fetchData();
    }, [fetchUrl])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    const handelClick = async (movie) => {
        // console.log(movie);
        if(url_trailer){
            seturl_trailer('');
        } else {
           axios.get(`/movie/${movie.id}/videos?api_key=2baecc0e771cce824124a2e59172629d`)
                .then(res => seturl_trailer(res?.data.results[0].key))
                .catch(err => console.log(err));
        }
    };
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                    <img
                        onClick={() => handelClick(movie)}
                        key={movie.id}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={base_url+(isLargeRow?movie.poster_path:movie.backdrop_path)} alt={movie.name}
                    />
                ))}
            </div>
            {url_trailer && <YouTube videoId={url_trailer} opts={opts} />}
        </div>
    )
}

export default Row
