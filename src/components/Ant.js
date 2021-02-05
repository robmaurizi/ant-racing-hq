import React from 'react';
import AntGraphic from './AntGraphic';

import './Ant.scss';

const Ant = ( {name, color, weight, length, odds, oddsStatus, shouldAnimate } ) => {

    return (
        <div className="ant">
            <div className="ant-inner">
                <h2 className="ant-name">{ name }</h2>
                <ul className="ant-atts">
                    <li><h3>Length</h3> { length }mm</li>
                    <li><h3>Weight</h3> { weight }mg</li>
                    <li><h3>Color</h3> { color }</li>
                </ul>
                <div className="ant-odds">
                    <h3>Chance of Winning</h3>
                    <div className="ant-odds-value">{ oddsStatus ? oddsStatus : null } { odds ? `${Math.round(odds * 100)}%` : null }</div>
                </div>
            </div>

            <AntGraphic odds={ odds } length={length} fill={color} shouldAnimate={shouldAnimate} />
        </div>
    );
}

export default Ant;