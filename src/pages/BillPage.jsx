import React from 'react'
import Chart from '../components/Chart'
import useFetchData from '../hook/useFetchData';

const BillPage = () => {
    const { data, loading } = useFetchData(`https://raw.githubusercontent.com/nicejmp1/music-best/main/billboard/billboard100_2024-06-04.json`)
    return (
        <>
            {loading ? (
                <div>
                    로딩중 ...
                </div>
            ) : (<Chart title="빌보드 차트 Top100" musicList={data} />
            )}

        </>

    );
};

export default BillPage
