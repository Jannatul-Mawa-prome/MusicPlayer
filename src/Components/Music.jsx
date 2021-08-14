import React, { useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import FakeData from '../FakeData/FakeData';
const Music = () => {
    const [isPlay ,setIsPlay ] = useState(false);
    const {id} = useParams();
    const musicRetrive = FakeData.find(music => music.id == id);
    //console.log(musicRetrive.audio);
    //const [audio ,setAudio ] = useState(audio1);
    let song = useRef(new Audio(musicRetrive.audio));

		
		const playmusic = () => {
			document.getElementById('Aninateimage').classList.add('animate');
            document.getElementById('play').classList.replace('fa-play-circle','fa-pause-circle')
			song.current.play();
            //console.log(song.play());
            //console.log(song.pause());
            setIsPlay(true)

		}
		const pauseMusic = () => {
			document.getElementById('Aninateimage').classList.remove('animate')
            document.getElementById('play').classList.replace('fa-pause-circle','fa-play-circle')
			song.current.pause();
			//console.log(song.pause());
			setIsPlay(false);
		}

		const clickBtn =() =>{
			if(isPlay){
				pauseMusic();
			}
			else{
				playmusic();
			}
		}
    
    return (
        <div className="musics">
            <Link to='/'><i class="fas fa-arrow-left"></i></Link>
            <div className="songList">
                <marquee><h3 id="musicTitle">{musicRetrive.name}</h3></marquee>
                <p>{musicRetrive.artist}</p>
                <img id="Aninateimage" src={musicRetrive.image} alt="music" /> 
                <audio ref= {song} src={musicRetrive.audio} id="audio"></audio>
                <div className="controls">
                    <i id="prev" className="fas fa-backward"></i>
                    <i id="play" className="fas fa-play-circle" onClick={clickBtn}></i>
                    <i id="next" className="fas fa-forward"></i>
                </div>
            </div>
	    </div>
    );
};

export default Music;