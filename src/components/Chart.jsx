import React from 'react'

const Chart = ({ title, musicList }) => {
    return (
        <section className='music_chart'>
            <div className="title">
                <h2>{title}</h2>
                <div className="date_picker"></div>
            </div>
            <div className="list">
                <ul>
                    {musicList.map((item, index) => (
                        <li key={index}>
                            <span className='rank'>#{item.rank}</span>
                            <span className='img' style={{ backgroundImage: `url(${item.imageURL})` }}></span>
                            <span className='title'>{item.title}</span>
                            <span className='album'>{item.album}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Chart
