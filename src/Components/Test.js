import React,{useEffect} from 'react'
import movieTrailer from 'movie-trailer';

function Test() {
    useEffect(() => {
        movieTrailer('WandaVision')
        .then(res => console.log(res));
    }, []);
    return (
        <div>
            
        </div>
    )
}

export default Test
