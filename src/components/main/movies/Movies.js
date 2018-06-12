import React from 'react';
import './Movie.css';
import config from '../../../config/config';
// import components
import MovieListItem from './MovieListItem';

const MOVIES = ['Cars 3', 'Paranoid', 'Just Because!', 'Anything'];

class Movie extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          movies: []
        }
    }


    componentDidMount() {
        fetch(config.API_SEED)
            .then(e => e.json())
            .then(e => this.storeMovies(e))
    }
    
    storeMovies(data) {
        const movies = data.results.map(e => {
            const {vote_count, id, genre_ids, poster_path, title, vote_average, release_date} = e;
            return {vote_count, id, genre_ids, poster_path, title, vote_average, release_date};
        })

        this.setState({movies})
    }

    render() {
        return (
            <section className="movie">
                <ul>
                    {
                        this.state.movies.map(f => (
                            <MovieListItem e={f} key={f.id} />
                        ))
                    }
                </ul>
            </section>
        )
    }
}

export default Movie;