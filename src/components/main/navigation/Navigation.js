import React from 'react';
import './Navigation.css';

// import components
import Selection from './Selection';

export default class Navigation extends React.Component {
    
    render() {
        return (
            <section className="navigation">
                <Selection />
            </section>
        )
    }
}