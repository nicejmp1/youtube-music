import React, { useState, useContext, useRef, useEffect } from 'react';
import { MdLibraryMusic } from 'react-icons/md';
import { RiPlayListFill } from "react-icons/ri";
import { FaShuffle } from "react-icons/fa6";
import { IoPlaySkipBackSharp, IoPlaySkipForward, IoRepeat } from "react-icons/io5";
import { FaCirclePlay } from "react-icons/fa6";
import { CgPlayPauseO } from "react-icons/cg";
import { MusicPlayerContext } from '../context/MusicPlayerProvider';
import ReactPlayer from 'react-player';

const Aside = () => {
    const { musicData } = useContext(MusicPlayerContext);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(50);
    const [duration, setDuration] = useState(0);
    const playerRef = useRef(null);

    const nowPlaying = musicData.length > 0 ? musicData[currentTrackIndex] : null;

    useEffect(() => {
        setProgress(0);
        setIsPlaying(false);
    }, [currentTrackIndex]);

    const handleReady = () => {
        if (playerRef.current) {
            playerRef.current.seekTo(0);
        }
        setIsPlaying(true);
    };

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handlePrev = () => {
        const newIndex = currentTrackIndex > 0 ? currentTrackIndex - 1 : musicData.length - 1;
        setCurrentTrackIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = currentTrackIndex < musicData.length - 1 ? currentTrackIndex + 1 : 0;
        setCurrentTrackIndex(newIndex);
    };

    const handleShuffle = () => {
        const randomIndex = Math.floor(Math.random() * musicData.length);
        setCurrentTrackIndex(randomIndex);
    };

    const handleRepeat = () => {
        if (playerRef.current) {
            playerRef.current.seekTo(0);
        }
        setProgress(0);
    };

    const handleProgress = (state) => {
        setProgress(state.played * 100);
    };

    const handleVolumeChange = (event) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);
    };

    const handleTrackClick = (index) => {
        setCurrentTrackIndex(index);
        if (playerRef.current) {
            playerRef.current.seekTo(0); // Ensure the track starts from the beginning
        }
        setIsPlaying(false); // Ensure isPlaying is set to false before restarting
        setTimeout(() => {
            setIsPlaying(true); // Start playing after ensuring it is reset
        }, 100);
    };

    const handleSeekChange = (event) => {
        const newProgress = parseFloat(event.target.value);
        setProgress(newProgress);
        if (playerRef.current) {
            playerRef.current.seekTo(newProgress / 100);
        }
    };

    const handleDuration = (duration) => {
        setDuration(duration);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <aside id='aside'>
            <div className='play_now'>
                <h2><MdLibraryMusic />Now Playing</h2>
                {nowPlaying ? (
                    <div className='thumb'>
                        <div className='img' style={{ pointerEvents: 'none' }}>
                            <ReactPlayer
                                ref={playerRef}
                                key={`${nowPlaying.videoID}-${currentTrackIndex}`} // Ensure re-rendering
                                url={`https://www.youtube.com/watch?v=${nowPlaying.videoID}&start=0`} // Always start from 0 seconds
                                playing={isPlaying}
                                controls={false}
                                width="100%"
                                height="100%"
                                onProgress={handleProgress}
                                onDuration={handleDuration}
                                onEnded={handleNext}
                                onReady={handleReady}
                                volume={volume / 100}
                            />
                        </div>
                        <span className='title'>{nowPlaying.title}</span>
                        <span className='artist'>{nowPlaying.artist}</span>
                    </div>
                ) : (
                    <div>No music is currently playing</div>
                )}
                <div className='progress'>
                    <div className='progress_bar'>
                        <input
                            type='range'
                            min='0'
                            max='100'
                            step='0.01'
                            value={progress}
                            onChange={handleSeekChange}
                        />
                    </div>
                    <div className='time'>
                        <span className='current'>{formatTime(progress / 100 * duration)}</span>
                        <span className='total'>{formatTime(duration)}</span>
                    </div>
                </div>
                <div className='controls'>
                    <span className='shuffle' onClick={handleShuffle}><FaShuffle /></span>
                    <span className='prev' onClick={handlePrev}><IoPlaySkipBackSharp /></span>
                    <span className='play' onClick={handlePlayPause}>
                        {isPlaying ? <CgPlayPauseO /> : <FaCirclePlay />}
                    </span>
                    <span className='next' onClick={handleNext}><IoPlaySkipForward /></span>
                    <span className='repeat' onClick={handleRepeat}><IoRepeat /></span>
                </div>
                <div className='volume'>
                    <input
                        type='range'
                        min='0'
                        max='100'
                        step='1'
                        value={volume}
                        onChange={handleVolumeChange}
                    />
                    <span className='volume-value'>{volume}</span>
                </div>
            </div>
            <div className='play_list'>
                <h3><RiPlayListFill />Play List</h3>
                <ul>
                    {musicData.map((track, index) => (
                        <li
                            key={index}
                            className={index === currentTrackIndex ? 'current' : ''}
                            onClick={() => handleTrackClick(index)}
                        >
                            <span className='img' style={{ backgroundImage: `url(${track.imageURL})` }}></span>
                            <span className='title'>{track.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}

export default Aside;
