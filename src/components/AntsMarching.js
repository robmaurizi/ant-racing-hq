import React from 'react';

import AntSvg from '../svg/AntSvg';

import './AntsMarching.scss';

const AntsMarching = () => {

    return (

        <div className="ants-marching">

            <div className="marching-ant ant-1">
                <AntSvg />
            </div>
            <div className="marching-ant ant-2">
                <AntSvg />
            </div>
            <div className="marching-ant ant-3">
                <AntSvg />
            </div>

        </div>

    );

};
export default AntsMarching;