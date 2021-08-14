import React from 'react';
import FakeData from '../FakeData/FakeData';
import PlayList from './PlayList';

const Home = () => {
    return (
        <div className="home">
            <h1 >Music Player</h1>
            <div>
                {
                    FakeData.map((song)=><PlayList song={song}></PlayList>)
                }
            </div>
        </div> 
    );
};

export default Home;