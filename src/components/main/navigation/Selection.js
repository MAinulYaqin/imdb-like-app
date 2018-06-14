import React from 'react';
import './Selection.css';

let Navigation = () => (
    <section className="navigation">
        <select name="select">
            <option value="Comedy" defaultValue>Comedy</option>
            <option value="Action">Action</option>
            <option value="Horor">Horor</option>
        </select>
    </section>
);

export default Navigation;