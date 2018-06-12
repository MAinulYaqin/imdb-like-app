import React from 'react';

const MovieListItem = ({e}) => {
    let {title, poster_path} = e;
    let imgUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`;

    return (
        <li>
            <img src={imgUrl} alt={title} />
            <span>{title}</span>
        </li>
    )
}

export default MovieListItem;