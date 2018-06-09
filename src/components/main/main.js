import React from 'react';
import './main.css'
// import components
import Movies from './movies/Movies';
import Navigation from './navigation/navigation';

class Main extends React.Component {
    render() {
        return (
            <section className="main">
                <Movies />
                <Navigation />
            </section>
        )
    }
}

export default Main;