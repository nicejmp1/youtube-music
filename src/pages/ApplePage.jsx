import React from 'react'
import Chart from '../components/Chart'
import useFetchData from '../hook/useFetchData';
import { ClipLoader } from 'react-spinners';

const ApplePage = () => {
    const { data, loading } = useFetchData(`https://raw.githubusercontent.com/webs9919/music-best/main/apple/apple100_2024-06-04.json`)
    return (
        <>
            {loading ? (
                <div className='loading'>
                    <ClipLoader size={50} color={'#f88741'} loading={loading} />
                </div>
            ) : (<Chart title="애플뮤직 차트 Top100" musicList={data} />
            )}

        </>

    );
};

export default ApplePage
