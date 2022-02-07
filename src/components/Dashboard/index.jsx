import React from 'react';
import {cards,tasks} from '../data';
import Cards from './Cards';
import Others from './Others';
import Charts from './Charts';


function Dashboard() {


    return (
        <section className="dashboard show">
            <h2 className="title">Hi, Welcome</h2>
            <Cards cards={cards}/>
            <Charts />
            <Others tasks={tasks}/>
        </section>
    );
}

export default Dashboard;