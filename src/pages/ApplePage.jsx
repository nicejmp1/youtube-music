import React from 'react'
import Chart from '../components/Chart'
import useFetchData from '../hook/useFetchData';

const ApplePage = () => {
    const { data, loading } = useFetchData(`https://raw.githubusercontent.com/webs9919/music-best/main/apple/apple100_2024-06-04.json`)
    return (
        <>
            {loading ? (
                <div>
                    로딩중 ...
                </div>
            ) : (<Chart title="애플뮤직 차트 Top100" musicList={data} />
            )}

        </>

    );
};

export default ApplePage
