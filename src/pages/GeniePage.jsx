import React from 'react'
import Chart from '../components/Chart'
import useFetchData from '../hook/useFetchData';
import { ClipLoader } from 'react-spinners';

const GeniePage = () => {
    const { data, loading } = useFetchData(`https://raw.githubusercontent.com/webs9919/music-best/main/genie/genie100_2024-06-04.json`)
    return (
        <>
            {loading ? (
                <div className='loading'>
                    <ClipLoader size={50} color={'#f88741'} loading={loading} />
                </div>
            ) : (<Chart title="지니뮤직 차트 Top100" musicList={data} />
            )}

        </>

    );
};

export default GeniePage
