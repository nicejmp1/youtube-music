import React, { forwardRef } from 'react'

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FcCalendar } from 'react-icons/fc';


const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button onClick={onClick} ref={ref}>
        <FcCalendar size={24} />
        <span>{value}</span>
    </button>
));

const Chart = ({ title, musicList, selectedDate, onDateChange, minDate, maxDate }) => {

    return (
        <section className='music_chart'>
            <div className="title">
                <h2>{title}</h2>
                <div className='date'>
                    <DatePicker
                        selected={selectedDate}
                        onChange={onDateChange}
                        dateFormat="yyyy-MM-dd"
                        minDate={minDate}
                        maxDate={maxDate}
                        customInput={<CustomInput />}
                    ></DatePicker>
                </div>
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