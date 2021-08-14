import React from 'react';
import {
    Link
} from "react-router-dom";
const PlayList = (props) => {
    return (
        <div className='playlist'>
            <img src={props.song.image} alt="" />
            <div className='songdel'>
                <h4><Link to={"/musicPlay/"+props.song.id}>{props.song.name}</Link></h4>
                <p>{props.song.artist}</p>
            </div>
            
        </div>
    );
};

export default PlayList;