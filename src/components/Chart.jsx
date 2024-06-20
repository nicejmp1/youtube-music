import React, { forwardRef, useState } from 'react'

import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FcCalendar } from 'react-icons/fc';
import ko from 'date-fns/locale/ko'

import { fetchVideoID } from '../utils/fetchVideoID';


const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button onClick={onClick} ref={ref}>
        <FcCalendar size={24} />
        <span>{value}</span>
    </button>
));

registerLocale('ko', ko);

const Chart = ({ title, musicList, selectedDate, onDateChange, minDate, maxDate }) => {
    const [searchResults, setSearchResults] = useState([])

    const handlerItemClick = async (query) => {
        const resultes = await fetchVideoID(query);
        setSearchResults(resultes);
    }
    return (
        <section className='music_chart'>
            <div className="title">
                <h2>{title}</h2>
                <div className='date'>
                    <DatePicker
                        selected={selectedDate}
                        onChange={onDateChange}
                        dateFormat="yyyy년 MM월 dd일"
                        minDate={minDate}
                        maxDate={maxDate}
                        locale="ko"
                        customInput={<CustomInput />}
                    ></DatePicker>
                </div>
            </div>
            <div className="list">
                <ul>
                    {musicList.map((item, index) => (
                        <li key={index} onClick={() => handlerItemClick(item.title)}>
                            <span className='rank'>#{item.rank}</span>
                            <span className='img' style={{ backgroundImage: `url(${item.imageURL})` }}></span>
                            <span className='title'>{item.title}</span>
                            <span className='album'>{item.album}</span>
                        </li>
                    ))}
                </ul>
            </div>
            {searchResults.length > 0 && (
                <div className='search-results'>
                    <h3>유튜브 검색 결과입니다. 음악을 듣거나 리스트에 추가할 수 있습니다.</h3>
                    <ul>
                        {searchResults.map((result, index) => (
                            <li key={index}>
                                <span className='img'></span>
                                <span className='title'>{result.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    )
}

export default Chart