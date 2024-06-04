import React from 'react'
import { MdLibraryMusic } from 'react-icons/md';
import { RiPlayListFill } from "react-icons/ri";
import { FaShuffle } from "react-icons/fa6";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { FaCirclePlay } from "react-icons/fa6";
import { CgPlayPauseO } from "react-icons/cg";
import { IoRepeat } from "react-icons/io5";


const Aside = () => {
    return (
        <aside id='aside'>
            <div className='play_now'>
                <h2><MdLibraryMusic />Now Playing</h2>
                <div className='thumb'>
                    <div className='img'></div>
                    <span className='title'>노래 제목</span>
                    <span className='artist'>가수</span>
                </div>
                <div className='progress'>
                    <div className='progress_bar'>
                        <input type='range' min='0' max='100' step='0.01' />
                    </div>
                    <div className='time'>
                        <span className='current'>0:00</span>
                        <span className='total'>10:34</span>
                    </div>
                </div>
                <div className='controls'>
                    <span className='shuffle'><FaShuffle /></span>
                    <span className='prev'><IoPlaySkipBackSharp /></span>
                    <span className='play'><FaCirclePlay /></span>
                    {/* <span className='pause'><CgPlayPauseO /></span> */}
                    <span className='next'><IoPlaySkipForward /></span>
                    <span className='repeat'><IoRepeat />
                    </span>
                </div>
                <div className='volume'>
                    <input type='range' min='0' max='100' step='1' />
                </div>
            </div>
            <div className='play_list'>
                <h3><RiPlayListFill />Play List</h3>
                <ul>
                    <li>
                        <span className='img'></span>
                        <span className='title'></span>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Aside
