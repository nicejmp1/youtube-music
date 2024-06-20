import React, { createContext, useEffect, useState } from 'react'

export const MusicPlayerContext = createContext();

const MusicPlayerProvider = ({ children }) => {
    const [musicData, setMusicDate] = useState([]);

    useEffect(() => {
        const fetchDate = async () => {
            const response = await fetch(`${process.env.PUBLIC_URL}/data/music_list.json`)
            const data = await response.json()
            setMusicDate(data);
            console.log(data);
        }
        fetchDate();
    }, [])

    return (
        <MusicPlayerContext.Provider value={{ musicData }}>
            {children}
        </MusicPlayerContext.Provider>
    )
}

export default MusicPlayerProvider
